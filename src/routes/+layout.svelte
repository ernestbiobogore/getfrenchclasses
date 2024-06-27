<script lang="ts">
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import "../app.css";

	import { navigating } from "$app/stores";
	import FooterMenu from "$dato/sections/FooterMenu.svelte";
	import { Toaster } from "$shadcn/sonner";
	import { ModeWatcher } from "mode-watcher";
	import NProgress from "nprogress";

	NProgress.configure({ showSpinner: false, minimum: 0.16 });
	$: $navigating ? NProgress.start() : NProgress.done();

	// onMount(async () => {
	// 	const { posthog } = await import("posthog-js");

	// 	if (browser) {
	// 		posthog.init(PUBLIC_POSTHOG_API_KEY, {
	// 			api_host: "https://us.i.posthog.com",
	// 			person_profiles: "always",
	// 			capture_pageview: false,
	// 			capture_pageleave: false,
	// 		});

	// 		beforeNavigate(() => posthog.capture("$pageleave"));
	// 		afterNavigate(() => posthog.capture("$pageview"));
	// 	}
	// });
</script>

<ModeWatcher />
<Toaster richColors />

<slot />

<FooterMenu />
