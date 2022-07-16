import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import env from "./env";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
  },
};

export default config;
