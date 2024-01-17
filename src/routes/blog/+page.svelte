<script lang="ts">
	import PostCard, { type Post } from './PostCard.svelte';

	const allPosts = Array.from({ length: 6 }).fill({
		title: 'How to build a successful business',
		category: {
			name: 'Business',
			slug: 'business'
		},
		slug: 'this-is-a-test-post',
		seo: [
			{
				seoBlock: {
					title: 'Sample Title',
					description: 'Sample Description',
					image: {
						url: 'https://fastly.picsum.photos/id/1047/330/210.jpg?hmac=H8YBXyH-ou3g5H_vh7-HE-4-Cx1llFcaV3GIkqP0S7E',
						alt: 'Sample Image'
					}
				}
			}
		]
	}) as Post[];
</script>

<svelte:head>
	<title>Blog - GetFrenchClasses</title>
</svelte:head>

<div class="container-base py-10">
	<h2 class="">Featured Blog Posts</h2>
	<p>A curated selection of our best articles</p>
</div>

<div class="container-base py-5">
	<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each allPosts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>

<div class="container-base py-10">
	<h2 class="">Latest Releases</h2>
	<p>Discover some of our most recent articles</p>
</div>

<div class="container-base py-5">
	<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each allPosts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>

<div class="container-base py-10">
	<h2 class="">Case Studies</h2>
	<p>Read our latest case studies</p>
</div>

<div class="container-base py-5">
	<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each allPosts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>
