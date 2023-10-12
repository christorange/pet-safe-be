# PetSafe Backend

- [Fastify](https://fastify.dev/docs/latest/) server with [WebSocket](https://github.com/fastify/fastify-websocket)
- [tRPC](https://trpc.io/docs) APIs
- [Prisma](https://www.prisma.io/docs/getting-started) as ORM

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

[CLI reference](https://www.prisma.io/docs/reference/api-reference/command-reference)

Schema GUI:
```
npx prisma studio
```
Generate Prisma client based on schema:
```
npx prisma generate
```

Push schema changes:
```
npx prisma db push
```

Pull schema changes:
```
npx prisma db pull
```

## Commit guideline:

Write your commit message in this way:

**[type] ( [scope?] ): [description]**

Types:
- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature
- doc: Documentation changes
- build: Changes that affect the build system or external dependencies
- chore: Other changes that don\'t modify src or test files
- revert: Reverts a previous commit

Scope: Optional, refers to the part of code changed in this commit.