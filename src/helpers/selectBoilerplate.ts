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
  const layoutFileDir = path.join(PKG_ROOT, "template/studs/__layout");

  const usingTrpc = packages.tailwind.inUse;

  let layoutFile = "";
  if (usingTrpc) {
    layoutFile = "with-tw.svelte";
  }

  if (layoutFile !== "") {
    const appSrc = path.join(layoutFileDir, layoutFile);
    const appDest = path.join(projectDir, "src/routes/__layout.svelte");
    await fs.copy(appSrc, appDest);
  }
};

// This selects the proper index.tsx to be used that showcases the chosen tech
export const selectTechFile = async ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/studs/tech");

  const usingTw = packages.tailwind.inUse;

  let techFile = "";
  // FIXME: auth showcase doesn't work with prisma since it requires more setup
  if (usingTw) {
    techFile = "with-tw.svelte";
  }

  if (techFile !== "") {
    const indexSrc = path.join(indexFileDir, techFile);
    const indexDest = path.join(projectDir, "src/lib/tech.svelte");
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
