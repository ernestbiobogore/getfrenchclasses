<script lang="ts">
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import SvelteSeo from "svelte-seo";

	export let data;
	$: ({ modularPage, city } = data);
	$: seo = modularPage.seo?.seoBlock;

	$: title = `Our tutors in ${city.name} | Get French Classes`;
	$: seoData = {
		url: $page.url.href,
		title,
		description: title,
		image: {
			url: seo?.image?.responsiveImage?.src || seo?.image?.url,
			alt: seo?.image?.alt || title,
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
		site_name: seoData.title,
	}}
/>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}
