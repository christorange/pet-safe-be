import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import type { FeatureCollection } from 'geojson';

export const placesRouter = router({
  allPlaces: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany();

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e=>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude, e.latitude]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address
        }
      }))
    }
    return geojson;
  })
});