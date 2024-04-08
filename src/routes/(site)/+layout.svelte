<script lang="ts">
	import { navigating } from "$app/stores";
	import FooterMenu from "$lib/components/dato/sections/FooterMenu.svelte";
	import HeaderMenu from "$lib/components/dato/sections/HeaderMenu.svelte";
	import "@fontsource-variable/inter";
	import NProgress from "nprogress";
	import "nprogress/nprogress.css";
	import "../../app.css";

	NProgress.configure({ showSpinner: false, minimum: 0.16 });
	$: $navigating ? NProgress.start() : NProgress.done();
</script>

<HeaderMenu />

<slot />

<FooterMenu />
