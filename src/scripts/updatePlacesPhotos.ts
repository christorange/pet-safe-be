import prisma from "../utils/prisma";
import { Client } from "@googlemaps/google-maps-services-js";
import 'dotenv/config'

const client = new Client({});

export const updatePlacesPhotos = async () => {
  const places = await prisma.pet_friendly_places.findMany()

  for (const place of places){
    try{
      const res = await client.placeDetails({
        params: {
          place_id: place.id,
          fields: ['photo'],
          key: process.env.GOOGLE_MAP_API as string
        },
        timeout: 2000
      })
      
      const photos = res.data.result.photos

      if (photos && photos.length && !place.photo){
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
}