// src/hooks.ts or src/hooks/index.ts
import { createTRPCHandle } from "trpc-sveltekit";
import { createContext, router } from "./router";

export const handle = async ({ event, resolve }) => {
  const response = await createTRPCHandle({
    url: "/trpc",
    router,
    createContext,
    event,
    resolve,
  });

  return response;
};
