import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import { Public } from '@prisma/client/runtime/library';


const idSchema = z.object({ id: z.string() });

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

const userUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const userRouter = router({
  //get all users
  getAll: publicProcedure.query(async () => {
    return prisma.user.findMany();
  }),

  //get user by id
  getOne: publicProcedure
    .input(idSchema)
    .query(({ input }) => {
      return prisma.user.findUnique({
        where: idSchema.parse(input),
      });
    }),

  //create user
  createUser: publicProcedure
    .input(userSchema)
    .mutation(({ input }) => {
      return prisma.user.create({
        data: userSchema.parse(input),
      });
    }),

  //update user
  updateUser: publicProcedure
    .input(userUpdateSchema)
    .mutation(({ input }) => {
      return prisma.user.update({
        where: {
          id: input.id.toString(),
        },
        data: userUpdateSchema.parse(input),
      });
    }),

  //delete user
  deleteUser: publicProcedure
    .input(idSchema)
    .mutation(({ input }) => {
      return prisma.user.delete({
        where: idSchema.parse(input),
      });
    }),
});