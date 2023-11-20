import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import { Public } from '@prisma/client/runtime/library';


export const savedRouter = router({
  // get all saved entries
  getAll: publicProcedure.query(({}) => {
    return prisma.usersavedplaces.findMany();
  }),


});