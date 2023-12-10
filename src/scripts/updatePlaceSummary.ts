import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";

export const updatePlacesSummary = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {

  const summary = details.editorial_summary?.overview

  try{
    if (summary){
      await prisma.pet_friendly_places.update({
        where: {
          id: place.id
        },
        data: {
          summary: summary
        }
      })
    }

    console.log(`Updated place ${place.seq} summary.`)

  }catch (error){
    console.error(`Failed to update place ${place.seq} summary: ${error}`)
  }
}