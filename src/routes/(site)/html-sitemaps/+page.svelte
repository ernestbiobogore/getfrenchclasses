<script lang="ts">
	import { page } from "$app/stores";
	import SvelteSeo from "svelte-seo";

	const seoData = {
		url: $page.url.href,
		title: "HTML Sitemaps - Get French Classes",
		description: "HTML Sitemaps",
	};
</script>

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	canonical={seoData.url}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type: "website",
		site_name: "Get French Classes",
	}}
/>

<div class="container-base space-y-12 py-16">
	<h1>HTML Sitemaps</h1>

	<div>
		<a href="/html-sitemaps/courses-1" class="w-fit underline text-2xl font-medium">Courses</a>
	</div>
</div>
