// src/lib/trpc/client.ts
import type { AppRouter } from "./router";
import * as trpc from "@trpc/client";
import superjson from "superjson";

export default trpc.createTRPCClient<AppRouter>({
  url: "/trpc",
  transformer: superjson,
});
