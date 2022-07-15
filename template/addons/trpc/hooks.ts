// src/hooks.ts or src/hooks/index.ts
import type { Handle } from "@sveltejs/kit";
import { createTRPCHandle } from "trpc-sveltekit";
import { createContext, router } from "./lib/trpc/router";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await createTRPCHandle({
    url: "/trpc",
    router,
    createContext,
    event,
    resolve,
  });

  return response;
};
