import prisma from "../utils/prisma";
import { PlaceData } from "@googlemaps/google-maps-services-js";
import { pet_friendly_places } from "@prisma/client";

export const updatePlacesCategory = async (
  details: Partial<PlaceData>,
  place: pet_friendly_places
) => {

  const types = details.types
  try{
    if (types && types.length){
      const googleCategory = types[0].replace(/_/g, ' ')

      let type: string = 'Bar'

      const restaurantKeywords = ['restaurant', 'food', 'meal', 'dinner', 'brunch']
      const barKeywords = ['bar', 'liquor', 'pub', 'beer', 'wine', 'brewery', 'distillery']
      const cafeKeywords = ['cafe', 'coffee', 'tea', 'bakery', 'boba', 'bubble tea']
      const parkKeywords = ['park', 'garden', 'tourist attraction']

      if (restaurantKeywords.some(category => googleCategory.includes(category))){
        type = 'Restaurant'
      }
      if (barKeywords.some(category => googleCategory.includes(category))){
        type = 'Bar'
      }
      if (cafeKeywords.some(category => googleCategory.includes(category))){
        type = 'Cafe/Boba'
      }
      if (parkKeywords.some(category => googleCategory.includes(category))){
        type = 'Park'
      }

      await prisma.pet_friendly_places.update({
        where: {
          id: place.id
        },
        data: {
          googleCategory: googleCategory,
          type: type
        }
      })
    }

    console.log(`Updated place ${place.seq} category.`)

  }catch (error){
    console.error(`Failed to update place ${place.seq} category: ${error}`)
  }
}
