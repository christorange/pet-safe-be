import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export interface User {
  name: string[] | string;
}

export function createContext({ req, res }: CreateFastifyContextOptions) {

  return { req, res };
}

export type Context = inferAsyncReturnType<typeof createContext>;
