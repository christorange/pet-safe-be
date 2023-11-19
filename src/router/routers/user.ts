import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import prisma from '../../utils/prisma';
import { Public } from '@prisma/client/runtime/library';


const idValue = 'user_2XdC1teyjoM23zWSd0sglh1cD0w';
const emailval = 'nathanielcrush51@gmail.com'
export const userRouter = router({
  
    sendUser: publicProcedure.mutation(async () => {
        const user = await prisma.user.findFirst({
            where: {
              AND: { id: idValue } // idValue=ClerkUser.id
            }
          });
        
          if (!user) {
           //create a new record in postgres    
           await prisma.user.upsert({
            where: { id: idValue as string },
            update: {}, // Define update fields if needed when the user already exists
            create: {
              id: idValue,
              email: emailval
            },
            // pdate: { attributes },
          });
          } 
    }),

    users: publicProcedure.query(async () => {
      const res = await prisma.user.findMany(
      );
      return res;
    })


});