import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import staticAdapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess(), mdsvex(mdsvexConfig)],

    kit: {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        adapter: staticAdapter({
            fallback: "index.html"
        }),
		target: '#svelte'
	}
};

export default config;
