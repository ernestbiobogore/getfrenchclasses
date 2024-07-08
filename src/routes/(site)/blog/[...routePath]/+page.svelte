<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import PostCTA from "$dato/sections/PostCTA.svelte";
	import SocialShare from "$dato/sections/SocialShare.svelte";
	import Head from "$lib/components/seo/Head.svelte";
	import TOC from "$lib/components/toc/index.svelte";
	import { formatDate, generateShareOptions } from "$lib/utils";
	import { Image } from "@unpic/svelte";

	export let data;

	$: post = data.post;
	$: seo = post?.seo;

	$: rightCtas = post?.postCtas.filter(cta => cta.ctaPosition === "right");
	$: topCtas = post?.postCtas.filter(cta => cta.ctaPosition === "top");

	$: shareOptions = generateShareOptions({
		slug: post?.slug || "",
		title: post?.title || "",
		description: seo?.seoBlock?.description || "",
	});
</script>

<Head seo={data.post?.seo} title={String(post?.title)} />

{#if post}
	<header class="py-4 space-y-4 container-base sm:py-8">
		<h1>{post?.title}</h1>

		<div>
			{#if post.author}
				<p>By <span class="font-medium">{post.author.name}</span></p>

				{#if post.reviewer}
					<p>
						Proofread and fact-checked by <span class="font-medium">{post.reviewer.name}</span>
					</p>
				{/if}
			{/if}

			<p>
				Last updated <time datetime={formatDate(post._updatedAt)} class="font-medium"
					>{formatDate(post._updatedAt)}</time
				>
			</p>
		</div>

		<!-- SOCIAL SHARE BUTTONS -->
		<SocialShare {shareOptions} />
	</header>

	{#if seo?.seoBlock?.image?.responsiveImage}
		<div class="py-4 container-base">
			<Image
				src={seo?.seoBlock.image.responsiveImage?.src || seo?.seoBlock.image.url}
				alt={seo?.seoBlock.image.alt}
				layout="constrained"
				width={1248}
				height={702}
				background={seo?.seoBlock.image.responsiveImage?.base64 ||
					seo?.seoBlock.image.responsiveImage?.bgColor ||
					"auto"}
			/>
		</div>
	{/if}

	<article class="grid sm:grid-cols-[18.75rem_1fr_15.625rem] gap-6 my-16 container-base">
		<div class="sm:w-[18.75rem]">
			<TOC selector=".content" class="sticky top-32" />
		</div>

		<main class="space-y-8 basis-9/12">
			{#if topCtas && topCtas.length > 0}
				<div class="flex flex-col gap-4 py-4">
					{#each topCtas as cta}
						<PostCTA postCta={cta} />
					{/each}
				</div>
			{/if}

			{#each post.modularContent as block}
				{#if block.__typename === "RichTextBlockRecord"}
					<StructuredText richText={block.richText} class="space-y-4 content" />
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			{#if rightCtas && rightCtas.length > 0}
				<div class="sticky flex flex-col gap-4 py-4 top-32">
					{#each rightCtas as cta}
						<PostCTA postCta={cta} />
					{/each}
				</div>
			{/if}
		</aside>
	</article>
{/if}

{#if data.correctUrl}
	<section class="py-16 space-y-2 container-base">
		<p class="text-xl">It looks like you are trying to access an existing post with a wrong URL.</p>
		<p class="text-xl break-words">
			Try this one:
			<a href={data.correctUrl} class="font-semibold underline">{data.correctUrl}</a>
		</p>
	</section>
{/if}
