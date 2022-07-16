import type { Installer } from "./index.js";
import path from "path";
import fs from "fs-extra";
import { PKG_ROOT } from "../consts.js";

export const envVariblesInstaller: Installer = async ({
  projectDir,
  packages,
}) => {
  const usingPrisma = packages?.prisma.inUse;

  const envAssetDir = path.join(PKG_ROOT, "template/addons/env");

  let envFile = "";

  switch (true) {
    case usingPrisma:
      envFile = "env-prisma.js";
      break;
  }

  if (!envFile) return;

  const envSchemaSrc = path.join(envAssetDir, envFile);
  const envSchemaDest = path.join(projectDir, "env-schema.js");

  await fs.copy(envSchemaSrc, envSchemaDest, { overwrite: true });
};
