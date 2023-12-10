import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";

export const updatePlacesPhone = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {

  const phone = details.formatted_phone_number

  try{
    if (phone){
      await prisma.pet_friendly_places.update({
        where: {
          id: place.id
        },
        data: {
          phone: phone
        }
      })
    }

    console.log(`Updated place ${place.seq} phone number.`)

  }catch (error){
    console.error(`Failed to update place ${place.seq} phone number: ${error}`)
  }
}