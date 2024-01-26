import Icons from "unplugin-icons/vite";
import svg from "@poppanator/sveltekit-svg";
import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({ compiler: "svelte", scale: 1 }),
    svg({
      includePaths: ["./src/lib/icons/"],
      svgoOptions: {
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { removeViewBox: false } },
          },
        ],
      },
    }),
  ],
});
