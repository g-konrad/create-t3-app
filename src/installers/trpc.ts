import type { Installer } from "./index.js";
import path from "path";
import fs from "fs-extra";
import { PKG_ROOT } from "../consts.js";
import { runPkgManagerInstall } from "../utils/runPkgManagerInstall.js";

export const trpcInstaller: Installer = async ({
  projectDir,
  pkgManager,
  packages,
  noInstall,
}) => {
  await runPkgManagerInstall({
    pkgManager,
    projectDir,
    packages: ["superjson", "@trpc/server", "@trpc/client", "trpc-sveltekit"],
    devMode: false,
    noInstallMode: noInstall,
  });
  const usingPrisma = packages?.prisma.inUse;

  const trpcAssetDir = path.join(PKG_ROOT, "template/addons/trpc");

  const hooksSrc = path.join(trpcAssetDir, "hooks.ts");
  const hooksDest = path.join(projectDir, "src/hooks.ts");

  const clientSrc = path.join(trpcAssetDir, "client.ts");
  const clientDest = path.join(projectDir, "src/lib/trpc/client.ts");

  const contextFile = usingPrisma ? "prisma-context.ts" : "base-context.ts";
  const contextSrc = path.join(trpcAssetDir, contextFile);
  const contextDest = path.join(projectDir, "src/lib/trpc/router/context.ts");

  const indexRouterFile = "index-router.ts";
  const indexRouterSrc = path.join(trpcAssetDir, indexRouterFile);
  const indexRouterDest = path.join(projectDir, "src/lib/trpc/router/index.ts");

  const exampleRouterFile = usingPrisma
    ? "example-prisma-router.ts"
    : "example-router.ts";
  const exampleRouterSrc = path.join(trpcAssetDir, exampleRouterFile);
  const exampleRouterDest = path.join(
    projectDir,
    "src/lib/trpc/router/example.ts",
  );

  await Promise.all([
    fs.copy(hooksSrc, hooksDest),
    fs.copy(clientSrc, clientDest),
    fs.copy(contextSrc, contextDest),
    fs.copy(indexRouterSrc, indexRouterDest),
    fs.copy(exampleRouterSrc, exampleRouterDest),
  ]);
};
