<script lang="ts">
	import ModularPage from "$lib/components/dato/sections/ModularPage.svelte";
	import { setContext } from "svelte";

	export let data;

	setContext<boolean>("isHomePage", true);
</script>

<svelte:head>
	<title>{data.modularPage?.title || "GetFrenchClasses"}</title>
</svelte:head>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
