<script lang="ts">
	import PostCard, { type Post } from "./PostCard.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";

	const allPosts = Array.from({ length: 6 }).fill({
		title: "How to build a successful business",
		category: {
			name: "Business",
			slug: "business",
		},
		slug: "skype-french-lessons",
		seo: [
			{
				seoBlock: {
					title: "Sample Title",
					description: "Sample Description",
					image: {
						url: "https://fastly.picsum.photos/id/1047/330/210.jpg?hmac=H8YBXyH-ou3g5H_vh7-HE-4-Cx1llFcaV3GIkqP0S7E",
						alt: "Sample Image",
					},
				},
			},
		],
	}) as Post[];

	const filters = [
		{ name: "How to Say", routePath: "how-to-say" },
		{ name: "Grammar", routePath: "grammar" },
		{ name: "Vocabulary", routePath: "vocabulary" },
	];

	let currentFilter = "all";

	let filteredPosts: Post[] = [];

	function filterPosts(currentFilter: string, allPosts: Post[]) {
		if (currentFilter === "all") {
			return allPosts;
		} else {
			return allPosts.map(post => ({
				...post,
				title: `${post?.title} - ${currentFilter}`,
				slug: `${currentFilter}/${post?.slug}`,
			}));
		}
	}

	$: filteredPosts = filterPosts(currentFilter, allPosts);
</script>

<svelte:head>
	<title>Blog - GetFrenchClasses</title>
</svelte:head>

<section class="container-base p-3 space-y-5 md:py-20 md:text-center">
	<h1><button on:click={() => (currentFilter = "all")}>Blog</button></h1>
	<p class="md:text-xl max-w-[46ch] md:mx-auto">
		Our blog covers writing tips, productivity hacks, and lessons learned on our startup journey.
	</p>

	<div class="flex-s-start overflow-y-auto py-3 md:flex-s-center">
		{#each filters as filter}
			<Button
				variant={currentFilter === filter.routePath ? "default" : "outline"}
				class="rounded-none border shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
				on:click={() => (currentFilter = filter.routePath)}
			>
				{filter.name}
			</Button>
		{/each}
	</div>
</section>

<hr class="max-md:mt-10" />

{#if currentFilter !== "all"}
	{#if filteredPosts.length === 0}
		<p class="text-center">No posts found</p>
	{:else}
		<div class="container-base py-5">
			<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredPosts as post}
					<PostCard {post} />
				{/each}
			</div>
		</div>
	{/if}
{:else}
	<div class="container-base py-10">
		<h2 class="text-center">Featured Blog Posts</h2>
		<p class="text-center">A curated selection of our best articles</p>
	</div>

	<div class="container-base py-5">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each allPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>

	<div class="container-base py-10">
		<h2 class="text-center">Latest Releases</h2>
		<p class="text-center">Discover some of our most recent articles</p>
	</div>

	<div class="container-base py-5">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each allPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>

	<div class="container-base py-10">
		<h2 class="text-center">Case Studies</h2>
		<p class="text-center">Read our latest case studies</p>
	</div>

	<div class="container-base py-5">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each allPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}
