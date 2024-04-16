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
</script>

<ModeWatcher />
<Toaster richColors />

<slot />

<FooterMenu />
