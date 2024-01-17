<script lang="ts" context="module">
	import type { getSingleBlogPost } from '$lib/graphql/queries/posts';
	import { Tag } from 'lucide-svelte';

	type CMSPost = Awaited<ReturnType<typeof getSingleBlogPost>>;

	export type Post = Partial<CMSPost>;
</script>

<script lang="ts">
	export let post: Post;
</script>

<div class="p-8 space-y-4 bg-white rounded-2xl">
	<img
		src={post?.seo?.[0]?.seoBlock?.image?.url}
		alt={post?.seo?.[0]?.seoBlock?.image?.alt}
		width="310"
		height="210"
		loading="lazy"
		class="w-full h-[13.125rem] rounded-xl bg-purple-600"
	/>

	<h3>
		<a href="/blog/{post?.slug}" class="hover:underline">{post?.title}</a>
	</h3>

	<div class="flex items-center gap-2">
		<Tag class="w-4 h-4 stroke-gray-400" />
		<p class="text-xs text-gray-500">{post?.category?.name}</p>
	</div>

	<p>
		{post?.seo?.[0]?.seoBlock?.description}
	</p>

	<a href="/blog/{post?.slug}" class="text-xs action-base w-fit">Read More</a>
</div>
