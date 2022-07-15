// src/lib/trpc/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter);

export type AppRouter = typeof appRouter;

export { createContext } from "./context";
