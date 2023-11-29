import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";


export const updatePlacesPhotos = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {

    const photos = details.photos

    try{
      if (photos && photos.length){
        const photoReference = photos[0].photo_reference
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.GOOGLE_MAP_API}`

        await prisma.pet_friendly_places.update({
          where: {
            id: place.id
          },
          data: {
            photo: photoUrl
          }
        })
      }

      console.log(`Updated place ${place.seq} photo.`)

    }catch (error){
      console.error(`Failed to update place ${place.seq} photo: ${error}`)
    }
  }