import { apiRouter } from './routers/api';
import { placesRouter } from './routers/places';
import { router } from './trpc';

const appRouter = router({
  api: apiRouter,
  places: placesRouter
})
type AppRouter = typeof appRouter;

export default appRouter;
export type { AppRouter };

