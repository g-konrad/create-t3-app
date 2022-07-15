// src/lib/trpc/router/context.ts
import type { RequestEvent } from "@sveltejs/kit";
import * as trpc from "@trpc/server";

export const createContext = (event: RequestEvent) => {
  const req = event.request;

  return {
    req,
  };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
