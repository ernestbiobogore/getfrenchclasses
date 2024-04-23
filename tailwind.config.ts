import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: ["class"],
	safelist: ["dark"],
	theme: {
		// SHADCN
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				"ibm-plex-sans": ["IBM Plex Sans", ...fontFamily.sans],
			},
			colors: {
				magnolia: "#eeecf1",
				night: "#0f0f0f",
				platinum: "#d9d9d9",
				"brand-primary": "hsl(var(--brand-primary) / <alpha-value>)",
				"aquamarine": "hsl(var(--aquamarine) / <alpha-value>)",

				// SHADCN
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},

	plugins: [
		plugin(({ addVariant, addBase }) => {
			function createFlexUtilClass(display: string, justifyContent: string, alignItems: string) {
				return {
					display,
					justifyContent,
					alignItems,
				};
			}

			addBase({
				".flex-s-center": createFlexUtilClass("flex", "center", "center"),
				".flex-s-start": createFlexUtilClass("flex", "flex-start", "center"),
				".flex-s-between": createFlexUtilClass("flex", "space-between", "center"),
				".flex-s-evenly": createFlexUtilClass("flex", "space-evenly", "center"),
				".flex-s-end": createFlexUtilClass("flex", "flex-end", "center"),
				".flex-s-between-end": createFlexUtilClass("flex", "space-between", "flex-end"),
				".flex-s-center-start": createFlexUtilClass("flex", "center", "flex-start"),
				".flex-s-start-start": createFlexUtilClass("flex", "flex-start", "flex-start"),
				".inline-flex-s-center": createFlexUtilClass("inline-flex", "center", "center"),
				".inline-flex-s-start": createFlexUtilClass("inline-flex", "flex-start", "center"),
				".inline-flex-s-between": createFlexUtilClass("inline-flex", "space-between", "center"),
				".inline-flex-s-evenly": createFlexUtilClass("inline-flex", "space-evenly", "center"),
				".inline-flex-s-end": createFlexUtilClass("inline-flex", "flex-end", "center"),
				".inline-flex-s-center-start": createFlexUtilClass("inline-flex", "center", "flex-start"),
				".inline-flex-s-start-start": createFlexUtilClass(
					"inline-flex",
					"flex-start",
					"flex-start"
				),
			});

			addVariant("not-first", "&:not(:first-child)");
			addVariant("not-last", "&:not(:last-child)");
		}),
	],
};

export default config;
