import { updatePlacesCoordinates } from "./updatePlacesCoordinates"
import { updatePlacesPhotos } from "./updatePlacesPhotos"

import 'dotenv/config'

updatePlacesCoordinates()
  .catch(e => {
    console.error(e)
  })

updatePlacesPhotos()
  .catch(e => {
    console.error(e)
  })

