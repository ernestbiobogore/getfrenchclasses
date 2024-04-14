<script lang="ts">
	import "@fontsource-variable/inter";
	import "nprogress/nprogress.css";
	import "../app.css";

	import { navigating } from "$app/stores";
	import FooterMenu from "$dato/sections/FooterMenu.svelte";
	import NProgress from "nprogress";

	NProgress.configure({ showSpinner: false, minimum: 0.16 });
	$: $navigating ? NProgress.start() : NProgress.done();
</script>

<slot />

<FooterMenu />
