<script lang="ts" context="module">
	import type { PageData } from "../blog/$types";

	const filterPosts = (currentFilter: string, posts: PageData["allPosts"]) => {
		if (currentFilter === "all") {
			return posts;
		} else {
			return posts.filter(post => post.category?.slug === currentFilter);
		}
	};
</script>

<script lang="ts">
	import { Button } from "$shadcn/button";
	import PostCard from "./PostCard.svelte";

	export let data: PageData;

	let currentFilter = "all" as string;
	$: featuredPosts = filterPosts(
		currentFilter,
		data.allPosts.filter(post => post.featured)
	);
	$: latestPosts = filterPosts(currentFilter, data.allPosts);

	$: individualCategories = data.allPosts.reduce(
		(acc, post) => {
			if (post.category) {
				if (!acc.find(c => c.slug === post.category?.slug)) {
					acc.push({ slug: post.category.slug, name: post.category.name });
				}
			}
			return acc;
		},
		[] as { slug: string; name: string }[]
	);
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

		{#if individualCategories && individualCategories.length > 0}
			{#each individualCategories as category (category.slug)}
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

<div class="container-base py-10">
	<h2 class="text-center">Featured Blog Posts</h2>
	<p class="text-center">A curated selection of our best articles</p>
</div>

{#if featuredPosts.length === 0}
	<p class="text-center">No posts found</p>
{:else}
	<div class="container-base py-5">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredPosts as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}

<div class="container-base py-10">
	<h2 class="text-center">Latest Releases</h2>
	<p class="text-center">Discover some of our most recent articles</p>
</div>

{#if latestPosts.length === 0}
	<p class="text-center">No posts found</p>
{:else}
	<div class="container-base py-5">
		<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each latestPosts as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}
