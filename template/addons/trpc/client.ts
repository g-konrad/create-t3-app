// src/lib/trpc/client.ts
import type { Router } from "./router";
import * as trpc from "@trpc/client";

export default trpc.createTRPCClient<Router>({ url: "/trpc" });
