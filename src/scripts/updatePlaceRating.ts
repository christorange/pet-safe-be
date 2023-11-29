import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";

export const updatePlacesRating = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {

  const rating = details.rating?.toString()
  console.log(rating)
  try{
    if (rating){
      await prisma.pet_friendly_places.update({
        where: {
          id: place.id
        },
        data: {
          rating: rating
        }
      })
    }

    console.log(`Updated place ${place.seq} rating.`)

  }catch (error){
    console.error(`Failed to update place ${place.seq} rating: ${error}`)
  }
}