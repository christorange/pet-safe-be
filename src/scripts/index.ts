import prisma from "../utils/prisma";
import { Client, PlaceData } from '@googlemaps/google-maps-services-js';
import { updatePlacesCoordinates } from "./updatePlacesCoordinates"
import { updatePlacesPhotos } from "./updatePlacesPhotos"
import { updatePlacesCategory } from "./updatePlacesCategory";
import { updatePlacesRating } from "./updatePlaceRating";
import 'dotenv/config'

const client = new Client({});

let details: Partial<PlaceData> = {}

const main = async () => {
  const places = await prisma.pet_friendly_places.findMany()

  for (const place of places) {
    try{
      const res = await client.placeDetails({
        params: {
          place_id: place.id,
          key: process.env.GOOGLE_MAP_API as string
        }
      })

      details = res.data.result

      await updatePlacesCoordinates(details, place)
      await updatePlacesPhotos(details, place)
      await updatePlacesCategory(details, place)
      await updatePlacesRating(details, place)

    }catch (error){
      console.error(`Failed to fetch details for place ${place.seq}: ${error}`)
    }
  }
}

main()
