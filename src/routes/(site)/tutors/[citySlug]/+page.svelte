<script lang="ts">
	import ModularPage from "$dato/sections/ModularPage.svelte";

	export let data;
</script>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
