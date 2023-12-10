import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import { Public } from '@prisma/client/runtime/library';



const savedSchema = z.object({
  user_id: z.string(),
  place_id: z.string()
});

export const savedRouter = router({
  // get all saved entries
  getAll: publicProcedure.query(({}) => {
    return prisma.user_saved_places.findMany();
  }),

  saveOne: publicProcedure
    .input(savedSchema)
    .mutation(async ({ input }) => {
      return await prisma.user_saved_places.create({
        data: savedSchema.parse(input),
      });
    }),
  
    getByUserId: publicProcedure // haven't export for fe yet
    .input(z.string())
    .query( ({ input }) => {
      return prisma.user_saved_places.findMany({
        where: {
          user_id: input, // Filtering based on the user_id
        },
        select: {
          place_id: true, // Selecting only the place_id column
        },
      });
    }),
  


});