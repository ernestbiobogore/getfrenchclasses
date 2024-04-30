<script lang="ts">
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import SvelteSeo from "svelte-seo";

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

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type: "website",
		images: seoData.image ? [seoData.image] : [],
		site_name: "Get French Classes",
	}}
/>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
