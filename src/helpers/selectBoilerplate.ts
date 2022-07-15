import type { InstallerOptions } from "../installers/index.js";
import path from "path";
import fs from "fs-extra";
import { PKG_ROOT } from "../consts.js";

type SelectBoilerplateProps = Required<
  Pick<InstallerOptions, "projectDir" | "packages">
>;
// This generates the _app.tsx file that is used to render the app
export const selectLayoutFile = async ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const layoutFileDir = path.join(PKG_ROOT, "template/studs/_layout");

  const usingTrpc = packages.tailwind.inUse;

  let layoutFile = "";
  if (usingTrpc) {
    layoutFile = "with-tw.svelte";
  }

  if (layoutFile !== "") {
    const appSrc = path.join(layoutFileDir, layoutFile);
    const appDest = path.join(projectDir, "src/routes/_layout.svelte");
    await fs.copy(appSrc, appDest);
  }
};

// This selects the proper index.tsx to be used that showcases the chosen tech
export const selectCounterFile = async ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/studs/counter");

  const usingTw = packages.tailwind.inUse;

  let counterFile = "";
  // FIXME: auth showcase doesn't work with prisma since it requires more setup
  if (usingTw) {
    counterFile = "with-tw.svelte";
  }

  if (counterFile !== "") {
    const indexSrc = path.join(indexFileDir, counterFile);
    const indexDest = path.join(projectDir, "src/lib/counter.svelte");
    await fs.copy(indexSrc, indexDest);
  }
};

// This selects the proper index.tsx to be used that showcases the chosen tech
export const selectIndexFile = async ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/studs/index");

  const usingTw = packages.tailwind.inUse;

  let indexFile = "";
  // FIXME: auth showcase doesn't work with prisma since it requires more setup
  if (usingTw) {
    indexFile = "with-tw.svelte";
  }

  if (indexFile !== "") {
    const indexSrc = path.join(indexFileDir, indexFile);
    const indexDest = path.join(projectDir, "src/routes/index.svelte");
    await fs.copy(indexSrc, indexDest);
  }
};
