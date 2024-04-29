<script lang="ts">
	import { page } from "$app/stores";
	import StructuredText from "$dato/StructuredText/index.svelte";
	import PostCTA from "$dato/sections/PostCTA.svelte";
	import SocialShare from "$dato/sections/SocialShare.svelte";
	import { formatDate, generateShareOptions } from "$lib/utils";
	import { Image } from "@unpic/svelte";
	import SvelteSeo from "svelte-seo";

	export let data;

	$: post = data.post;
	$: seoData = {
		url: $page.url.href,
		title: post?.seo?.title || "GetFrenchClasses",
		description: post?.seo?.description || post?.title,
		image: {
			url: post?.seo?.image?.responsiveImage?.src || post?.seo?.image?.url,
			alt: post?.seo?.image?.alt || post?.title,
			width: 1200,
			height: 630,
		},
	};
	$: rightCtas = post?.postCtas.filter(cta => cta.ctaPosition === "right");
	$: topCtas = post?.postCtas.filter(cta => cta.ctaPosition === "top");

	$: shareOptions = generateShareOptions({
		slug: post?.slug || "",
		title: post?.seo?.title || "",
		description: post?.seo?.description || "",
	});
</script>

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	noindex={post ? false : true}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type: "website",
		images: [
			{
				url: seoData.image.url,
				width: seoData.image.width,
				height: seoData.image.height,
				alt: seoData.image.alt,
			},
		],
		site_name: seoData.title,
	}}
/>

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

	{#if post.seo?.image?.responsiveImage}
		<div class="py-4 container-base">
			<Image
				src={post.seo.image.responsiveImage?.src || post.seo.image.url}
				alt={post.seo.image.alt}
				layout="constrained"
				width={1248}
				height={702}
				background={post.seo.image.responsiveImage?.base64 ||
					post.seo.image.responsiveImage?.bgColor ||
					"auto"}
			/>
		</div>
	{/if}

	<article class="flex flex-col gap-6 mt-8 mb-16 lg:flex-row container-base">
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
					<StructuredText richText={block.richText} class="space-y-4" />
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			{#if rightCtas && rightCtas.length > 0}
				<div class="flex flex-col gap-4 py-4 sticky top-32">
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
