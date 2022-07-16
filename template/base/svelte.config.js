import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

// Check that the app is being built with valid env vars
import "./src/lib/env/index.js";

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
