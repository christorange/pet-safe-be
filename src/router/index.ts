import { apiRouter } from './routers/api';
import { placesRouter } from './routers/places';
import { userRouter } from './routers/user'
import { savedRouter } from './routers/saved';
import { router } from './trpc';

const appRouter = router({
  api: apiRouter,
  places: placesRouter,
  user: userRouter,
  saved: savedRouter
})
type AppRouter = typeof appRouter;

export default appRouter;
export type { AppRouter };

