<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import PostCTA from "$dato/sections/PostCTA.svelte";
	import SocialShare from "$dato/sections/SocialShare.svelte";
	import BlogCta, { type CTAProps } from "$lib/components/cta-section/BlogCta.svelte";
	import { formatDate, generateShareOptions, getSampleAvatars } from "$lib/utils";
	import { NakedImage } from "@datocms/svelte";

	export let data;
	$: post = data.post;

	$: shareOptions = generateShareOptions({
		slug: post?.slug || "",
		title: post?.seo?.title || "",
		description: post?.seo?.description || "",
	});

	const dummyCTAProps: CTAProps = {
		video:
			"https://cdn.discordapp.com/attachments/1181304981576486962/1196953201669324901/Screen_Recording_2024-01-16_at_11.01.18_pm.mov?ex=65b98089&is=65a70b89&hm=2fbbd8a97dadc3e2b8fae343e65da65aa9bef9c0f863d77c370f92725af06402&",
		buttonText: "Start learning french with as low as $8 per day",
		heading: "Take your french from A1 (Beginner) to C1 (Intermediate) in 4 months",
		subtext: "Finally a way to learn a new language without paying tutors $80+ per hour.",
		buttonSubtext:
			"and 4570+ other learners went from noob to fluent french speakers with our programs.",
		peopleImages: getSampleAvatars(),
	};
</script>

<svelte:head>
	<title>{post?.title || "Post not found"}</title>
	{#if !post}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

{#if post}
	<header class="container-base py-4 sm:py-8 space-y-4">
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
		<div class="container-base py-4">
			<NakedImage data={post.seo.image.responsiveImage} class="!w-full" />
		</div>
	{/if}

	<article class="flex flex-col gap-6 mt-8 lg:flex-row container-base mb-16">
		<main class="space-y-8 basis-9/12">
			<BlogCta props={dummyCTAProps} ctaAction={() => alert("button Clicked")} />

			{#each post.modularContent as block}
				{#if block.__typename === "RichTextBlockRecord"}
					<StructuredText richText={block.richText} class="space-y-4" />
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			<PostCTA />
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
