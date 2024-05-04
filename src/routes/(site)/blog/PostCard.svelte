<script lang="ts" context="module">
	import type { SinglePostFromAll } from "$lib/types";
	import Tag from "~icons/lucide/tag";
	import { Button } from "$shadcn/button";
</script>

<script lang="ts">
	export let post: SinglePostFromAll;
</script>

<div class="p-8 space-y-4 bg-white rounded-2xl">
	<img
		src={post?.seo?.seoBlock?.image?.url}
		alt={post?.seo?.seoBlock?.image?.alt}
		width="310"
		height="210"
		loading="lazy"
		class="w-full h-[13.125rem] rounded-xl bg-purple-600"
	/>

	<h3>
		<a href={post.path} class="hover:underline">{post?.title}</a>
	</h3>

	{#if post.category}
		<div class="flex items-center gap-2">
			<Tag class="text-gray-400" />
			<p class="text-xs text-gray-500">{post?.category?.name}</p>
		</div>
	{/if}

	<p>
		{post?.seo?.seoBlock?.description}
	</p>

	<Button href={post.path} variant="brand">Read More</Button>
</div>
