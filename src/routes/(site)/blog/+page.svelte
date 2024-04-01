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
	import { goto } from "$app/navigation";
	import { BLOG_JUMPER_LENGTH } from "$lib/constants";
	import { Button } from "$shadcn/button";
	import PostCard from "./PostCard.svelte";

	export let data;

	let currentFilter = "all" as string;
	$: featuredPosts = filterPosts(currentFilter, data.featuredPosts);
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

	const loadMorePosts = () => {
		const currentFirst = data.first;
		const newFirst = currentFirst + BLOG_JUMPER_LENGTH;
		const finalFirst =
			newFirst > data.allNonFeaturedPostsCount ? data.allNonFeaturedPostsCount : newFirst;

		goto(`/blog?first=${finalFirst}`, {
			noScroll: true,
		});
	};
</script>

<svelte:head>
	<title>Blog - GetFrenchClasses</title>
</svelte:head>

<section class="p-3 space-y-5 container-base md:py-20 md:text-center">
	<h1><button on:click={() => (currentFilter = "all")}>Blog</button></h1>
	<p class="md:text-xl max-w-[46ch] md:mx-auto">
		Our blog covers writing tips, productivity hacks, and lessons learned on our startup journey.
	</p>

	<div class="py-3 overflow-y-auto flex-s-start md:flex-s-center">
		<Button
			variant="outline"
			class="border rounded-none shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
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
						class="border rounded-none shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
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

<div class="py-10 container-base">
	<h2 class="text-center">Featured Blog Posts</h2>
	<p class="text-center">A curated selection of our best articles</p>
</div>

{#if featuredPosts.length === 0}
	<p class="text-center">No posts found</p>
{:else}
	<div class="py-5 container-base">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredPosts as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}

<div class="py-10 container-base">
	<h2 class="text-center">Latest Releases</h2>
	<p class="text-center">Discover some of our most recent articles</p>
</div>

{#if latestPosts.length === 0}
	<p class="text-center">No posts found</p>
{:else}
	<div class="py-5 container-base">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each latestPosts as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}

{#if latestPosts.length >= BLOG_JUMPER_LENGTH && data.allNonFeaturedPostsCount > data.first}
	<div class="flex justify-center py-20">
		<Button class="bg-indigo-600 hover:bg-indigo-700" on:click={loadMorePosts}
			>Load More Posts</Button
		>
	</div>
{/if}
