<script lang="ts">
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import { setContext } from "svelte";
	import SvelteSeo from "svelte-seo";

	export let data;

	setContext<boolean>("isHomePage", true);

	$: seo = data.modularPage.seo?.seoBlock;

	$: seoData = {
		url: $page.url.href,
		title: seo?.title || data.modularPage.title,
		description: seo?.description || data.modularPage.title,
		image: {
			url: seo?.image?.responsiveImage?.src || seo?.image?.url,
			alt: seo?.image?.alt || data.modularPage.title,
			width: 1200,
			height: 630,
		},
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
		images: [
			{
				url: seoData.image.url,
				width: seoData.image.width,
				height: seoData.image.height,
				alt: seoData.image.alt,
			},
		],
		site_name: "Get French Classes",
	}}
/>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
