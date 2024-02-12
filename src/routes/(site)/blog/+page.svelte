<script lang="ts">
	import { Button } from "$lib/components/shadcn/ui/button";
	import PostCard, { type Post } from "./PostCard.svelte";

	export let data;
	const categories = data.allPosts.map(post => post.category);

	let currentFilter = "all" as string;
	let filteredPosts: Post[] = [];

	$: filteredPosts = filterPosts(currentFilter);

	function filterPosts(currentFilter: string) {
		if (currentFilter === "all") {
			return data.allPosts;
		} else {
			return data.allPosts.filter(post => post.category?.slug === currentFilter);
		}
	}
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
		<Button
			variant="outline"
			class="rounded-none border shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
			on:click={() => (currentFilter = "all")}
			disabled={currentFilter === "all"}
		>
			All
		</Button>

		{#if categories && categories.length > 0}
			{#each categories as category}
				{#if category}
					<Button
						variant={currentFilter === category?.slug ? "default" : "outline"}
						class="rounded-none border shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
						on:click={() => (currentFilter = String(category?.slug))}
					>
						{category?.name}
					</Button>
				{/if}
			{/each}
		{/if}
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
			{#each data.allPosts as post}
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
			{#each data.allPosts as post}
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
			{#each data.allPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}
