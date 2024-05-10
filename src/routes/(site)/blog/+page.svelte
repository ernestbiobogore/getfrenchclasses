<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import ModularPage from "$dato/sections/ModularPage.svelte";
	import Head from "$lib/components/seo/Head.svelte";
	import { Button } from "$shadcn/button";
	import PostCard from "./PostCard.svelte";

	export let data;
	$: ({ featuredPosts, nonFeaturedPosts, categoriesWithPosts } = data);

	const isCategoryFiltered = (categorySlug: string, url: URL) => {
		const categoryParam = url.searchParams.get("category");
		return categoryParam === categorySlug;
	};
</script>

<Head seo={data.modularPage.seo} title={data.modularPage.title} />

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}

<svelte:head>
	<title>Blog - GetFrenchClasses</title>
</svelte:head>

<section class="p-3 space-y-5 container-base md:text-center">
	<div class="py-3 overflow-y-auto flex-s-start md:flex-s-center">
		<Button
			variant={$page.url.searchParams.get("category") ? "outline" : "default"}
			class="border rounded-none shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
			on:click={() => goto(`/blog`)}
		>
			All
		</Button>

		{#if categoriesWithPosts && categoriesWithPosts.length > 0}
			{#each categoriesWithPosts as category (category?.slug)}
				{#if category}
					<Button
						variant={isCategoryFiltered(category?.slug, $page.url) ? "default" : "outline"}
						class="border rounded-none shrink-0 not-first:border-r first:rounded-l-lg last:rounded-r-lg"
						on:click={() => goto(`/blog?category=${category.slug}`)}
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
	<p class="text-center">No featured posts found</p>
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

{#if nonFeaturedPosts.length === 0}
	<p class="text-center">No posts found</p>
{:else}
	<div class="py-5 container-base">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each nonFeaturedPosts as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</div>
{/if}

<!-- {#if latestPosts.length >= BLOG_JUMPER_LENGTH && data.allNonFeaturedPostsCount > data.first}
	<div class="flex justify-center py-20">
		<Button class="bg-indigo-600 hover:bg-indigo-700" on:click={loadMorePosts}
			>Load More Posts</Button
		>
	</div>
{/if} -->
