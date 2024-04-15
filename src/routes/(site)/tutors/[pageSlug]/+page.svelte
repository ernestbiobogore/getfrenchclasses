<script lang="ts">
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import InternalLinks, {
		type Section as InternalLinkSection,
	} from "$lib/components/dato/sections/InternalLinks.svelte";
	import SvelteSeo from "svelte-seo";

	export let data;
	$: ({ modularPage, citiesWithTutors } = data);
	$: seo = modularPage.seo?.seoBlock;

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

	$: tutorsInternalLinks = [
		{
			title: "By City",
			links: citiesWithTutors.map(city => ({
				label: city.name,
				path: `/${city.slug}`,
			})),
		},
	] satisfies InternalLinkSection[];
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

<InternalLinks basePath="/tutors" sections={tutorsInternalLinks} />
