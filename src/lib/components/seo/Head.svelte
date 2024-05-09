<script lang="ts">
	import { type Seo, getSeoData } from "./utils";
	import SvelteSeo from "svelte-seo";
	import { page } from "$app/stores";

	export let seo: Seo;
	export let title: string;

	$: seoData = getSeoData({ seo, href: $page.url.href, title });
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
