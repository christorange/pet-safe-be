import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import type { FeatureCollection } from 'geojson';

export const placesRouter = router({
  allPlaces: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany();

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e =>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude as number, e.latitude as number]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address,
          type: e.type,
          rating: e.rating,
          photo: e.photo
        }
      }))
    }
    return geojson;
  }),

  cafes: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany({
      where: {
        type: {
          equals: 'Cafe/Boba'
        }
      }
    });

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e=>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude as number, e.latitude as number]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address,
          type: e.type,
          rating: e.rating,
          photo: e.photo
        }
      }))
    }
    return geojson;
  }),

  restaurants: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany({
      where: {
        type: {
          equals: 'Restaurant'
        }
      }
    });

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e=>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude as number, e.latitude as number]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address,
          type: e.type,
          rating: e.rating,
          photo: e.photo
        }
      }))
    }
    return geojson;
  }),

  bars: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany({
      where: {
        type: {
          equals: 'Bar'
        }
      }
    });

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e=>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude as number, e.latitude as number]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address,
          type: e.type,
          rating: e.rating,
          photo: e.photo
        }
      }))
    }
    return geojson;
  }),

  parks: publicProcedure.query(async () => {
    const res = await prisma.pet_friendly_places.findMany({
      where: {
        type: {
          equals: 'Park'
        }
      }
    });

    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: res.map(e=>({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.longitude as number, e.latitude as number]
        },
        properties: {
          id: e.id,
          name: e.name,
          address: e.address,
          type: e.type,
          rating: e.rating,
          photo: e.photo
        }
      }))
    }
    return geojson;
  }),

  onePlace: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const res = await prisma.pet_friendly_places.findUnique({
        where: {
          id: input
        }
      });
      return {
        name: res?.name,
        address: res?.address,
        type: res?.type,
        rating: res?.rating,
        photo: res?.photo,
        summary: res?.summary,
      };
    }),
});