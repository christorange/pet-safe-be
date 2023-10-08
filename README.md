# PetSafe Backend

- Fastify server with WebSocket
- tRPC APIs
- Prisma as ORM

## API development:
Start server:
```
npm run dev
```

After each API modification, run
```
npx api-export
```
to build the tRPC API router types output, so the frontend can consume it.

## Database changes:

Schema GUI:
```
npx prisma studio
```

Push schema changes:
```
npx prisma db push
```

Pull schema changes:
```
npx prisma db pull
```
