<script lang="ts">
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import "../app.css";

	import { navigating } from "$app/stores";
	import NProgress from "nprogress";
	import FooterMenu from "$lib/components/dato/sections/FooterMenu.svelte";

	NProgress.configure({ showSpinner: false, minimum: 0.16 });
	$: $navigating ? NProgress.start() : NProgress.done();
</script>

<slot />

<FooterMenu />
