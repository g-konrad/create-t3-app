import type { ZodFormattedError } from "zod";
import { envSchema } from "./env-schema";

const env = envSchema.safeParse(import.meta.env);

const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);

if (!env.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(env.error.format()),
  );
  process.exit(1);
}

export default env.data;
