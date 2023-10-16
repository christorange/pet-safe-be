import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { Context } from './context';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const router = t.router;
const publicProcedure = t.procedure;
const mergeRouters = t.mergeRouters;

export { t, router, publicProcedure, mergeRouters };