<script lang="ts">
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import Head from "$lib/components/seo/Head.svelte";

	export let data;
	$: ({ modularPage } = data);
	$: seo = modularPage.seo?.seoBlock;

	$: seoData = {
		url: $page.url.href,
		title: seo?.title || data.modularPage.title,
		description: seo?.description || data.modularPage.title,
		image: seo?.image
			? {
					url: seo?.image?.responsiveImage?.src || seo?.image?.url,
					alt: seo?.image?.alt || data.modularPage.title,
					width: 1200,
					height: 630,
				}
			: null,
	};
</script>

<Head seo={data.modularPage.seo} title={data.modularPage.title} />

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
