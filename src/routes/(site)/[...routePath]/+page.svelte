<script lang="ts">
	import ModularPage from "$dato/sections/ModularPage.svelte";

	export let data;
</script>

<svelte:head>
	<title>{data.modularPage?.title} - GetFrenchClasses</title>
</svelte:head>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
