import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";

export const updatePlacesCoordinates = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {
  const location = details.geometry?.location
  try{
    if (location){
      await prisma.pet_friendly_places.update({
        where: {
          id: place.id
        },
        data: {
          latitude: location.lat,
          longitude: location.lng
        }
      })
    }

    console.log(`Updated place ${place.seq} coordinates.`)

  }catch (error){
    console.error(`Failed to update place ${place.seq} coordinates: ${error}`)
  }
}