<script lang="ts">
	import { page } from "$app/stores";
	import SvelteSeo from "svelte-seo";
	import { type Seo, getSeoData } from "./utils";

	export let seo: Seo;
	export let title: string;
	export let type: "website" | "article" = "website";

	$: seoData = getSeoData({ seo, href: $page.url.href, title });
	$: canonical = $page.url.pathname === "/" ? $page.url.href.slice(0, -1) : $page.url.href;
</script>

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	{canonical}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type,
		images: seoData.image ? [seoData.image] : [],
		site_name: "Get French Classes",
	}}
/>
