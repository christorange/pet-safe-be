import prisma from "../utils/prisma";
import { Client } from "@googlemaps/google-maps-services-js";
import 'dotenv/config'

const client = new Client({});

export const updatePlacesCoordinates = async () => {
  const places = await prisma.pet_friendly_places.findMany()

  for (const place of places){
    try{
      const res = await client.placeDetails({
        params: {
          place_id: place.id,
          fields: ['geometry/location'],
          key: process.env.GOOGLE_MAP_API as string
        },
        timeout: 2000
      })
      
      const location = res.data.result.geometry?.location

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
}