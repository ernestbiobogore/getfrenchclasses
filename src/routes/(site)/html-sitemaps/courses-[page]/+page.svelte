<script lang="ts">
	import { page } from "$app/stores";
	import SvelteSeo from "svelte-seo";
	import Pagination from "../Pagination.svelte";

	export let data;

	const seoData = {
		url: $page.url.href,
		title: "Courses by Location (Sitemap) - Get French Classes",
		description: "Courses by Location (Sitemap)",
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
		site_name: "Get French Classes",
	}}
/>

<div class="container-base space-y-8 py-16">
	<h1>Courses</h1>

	<div class="grid grid-cols-3 gap-x-8">
		{#each data.coursesLocationModularPagesEntries as { url, title }}
			<a href={url} class="w-fit hover:underline">{title}</a>
		{/each}
	</div>
</div>

<!-- Pagination -->
<Pagination currentPage={data.page} maxPages={data.maxPages} basePath="/html-sitemaps/courses" />
