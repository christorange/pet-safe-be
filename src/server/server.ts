import ws from '@fastify/websocket';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import appRouter from '../router';
import { createContext } from '../router/context';
import cors from '@fastify/cors';


export interface ServerOptions {
  dev?: boolean;
  port?: number;
  prefix?: string;
}

export function createServer() {
  const port = parseInt(process.env.PORT as string, 10) || 3475;
  const prefix = '/trpc';
  const server = fastify({ logger: true });

  // void server.register(cors, {
  //   origin: true,
  //   strictPreflight: false
  // });

  void server.register(ws);
  void server.register(fastifyTRPCPlugin, {
    prefix,
    useWSS: true,
    trpcOptions: { router: appRouter, createContext },
  });

  server.addHook('preHandler',(req, res, done)=>{
    const origin = req.headers.origin ?? ''
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if(req.method === 'OPTIONS') {
      return res.send();
    }

    done();
  })

  server.get('/', (request, reply) => {
    reply
      .code(200)
      .header('Content-Type', 'text/html; charset=utf-8')
      .send(`<h1>PetSafe Backend</h1>`);
  });

  const stop = async () => {
    await server.close();
  };
  const start = async () => {
    try {
      await server.listen({ 
        port: port,
        host: '0.0.0.0'
      });
      console.log('listening on port', port);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }

  };

  return { server, start, stop };
}
