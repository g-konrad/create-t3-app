// src/lib/trpc/client.ts
import type { AppRouter } from "./router";
import * as trpc from "@trpc/client";

export default trpc.createTRPCClient<AppRouter>({ url: "/trpc" });
