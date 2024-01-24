import extractorSvelte from "@unocss/extractor-svelte";
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from "unocss";
import { myPreset } from "./my-preset";
import { fontFamily } from "@unocss/preset-mini/theme";

// https://unocss.dev
export default defineConfig({
  configDeps: ["./my-preset.ts"],
  extractors: [extractorSvelte()],
  theme: {
    fontFamily: {
      sans: ["Inter", fontFamily.sans],
    },
    colors: {
      magnolia: "#eeecf1",
      night: "#0f0f0f",
      platinum: "#d9d9d9",
      "savoy-blue": "#5e62d1",
    },
  },
  rules: [],
  shortcuts: [
    {
      action: "flex-s-center px-6 py-3 text-xs fw-medium rd-lg",
      "action-base": "text-white bg-night action",
      "action-white": "text-night bg-white action",
      "container-base": "px-4 mx-auto max-w-7xl",
      "container-sm": "max-w-5xl px-4 mx-auto",
    },
  ],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      body {
        position: relative;
        overflow-x: hidden;
      }
      `,
    },
  ],

  presets: [
    myPreset,
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        inter: "Inter:400;500;600;700;800",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
});
