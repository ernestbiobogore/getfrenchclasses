<script lang="ts">
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import Head from "$lib/components/seo/Head.svelte";

	export let data;
	$: ({ modularPage } = data);
	$: seo = modularPage.seo?.seoBlock;
</script>

<Head seo={data.modularPage.seo} title={data.modularPage.title} />

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
