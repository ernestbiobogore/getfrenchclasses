<script lang="ts">
	import BlogCta, { type CTAProps } from "$lib/components/cta-section/BlogCta.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { cn, generateShareOptions, getSampleAvatars, getShareLinks } from "$lib/utils";

	import Fa6BrandsXTwitter from "~icons/fa6-brands/x-twitter";
	import LucideFacebook from "~icons/lucide/facebook";
	import LucideLinkedin from "~icons/lucide/linkedin";
	import PhRedditLogoBold from "~icons/ph/reddit-logo-bold";

	export let data;
	$: postCta = data.post?.cta[0];

	$: shareOptions = generateShareOptions({
		slug: data.post?.slug || "",
		title: data.post?.seo?.title || "",
		description: data.post?.seo?.description || "",
	});

	$: ({ twitterShareUrl, facebookShareUrl, linkedInShareUrl, redditShareUrl } =
		getShareLinks(shareOptions));

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

	const getNoteClass = (type: string) => {
		return cn("border-l-4 p-4", {
			"bg-[#ccccff] border-[#86608e]": type === "important",
			"bg-[#1569c7] border-[#040720]": type === "note",
			"bg-[#eaeee9] border-[#d4a017]": type === "warning",
		});
	};

	const getNoteTitleClass = (type: string) => {
		return cn("font-semibold", {
			"text-[#86608e]": type === "important",
			"text-[#040720]": type === "note",
			"text-[#d4a017]": type === "warning",
		});
	};
</script>

<svelte:head>
	<title>{data.post?.title || "Post not found"}</title>
	{#if !data.post}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

{#if data.post}
	<header class="max-[300px]:py-16 container-base">
		<h1>{data.post?.title}</h1>

		<!-- SOCIAL SHARE BUTTONS -->
		<div class="text-sm flex flex-wrap gap-2 items-center my-4 [&>*]:shrink-none [&>*]:h-[30px]">
			<a
				href={twitterShareUrl}
				class="inline-flex-s-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<Fa6BrandsXTwitter />
				<span>Share on Twitter</span>
			</a>
			<a
				href={facebookShareUrl}
				class="inline-flex-s-center gap-1 px-1 rounded-lg border border-gray-400"
			>
				<LucideFacebook class="text-lg" />
				<span>Share on Facebook</span>
			</a>
			<a
				href={linkedInShareUrl}
				class="inline-flex-s-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<LucideLinkedin class="text-lg" />
				<span>Share on LinkedIn</span>
			</a>
			<a
				href={redditShareUrl}
				class="inline-flex-s-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<PhRedditLogoBold class="text-lg" />
				<span>Share on Reddit</span>
			</a>
		</div>
	</header>

	<!-- CALLOUT /NOTE SECTION -->
	<section class="container-base">
		<div class={getNoteClass(postCta?.type || "important")}>
			{#if postCta?.title}
				<h3 class={getNoteTitleClass(postCta?.type || "important")}>{postCta.title}</h3>
			{/if}
			{#if postCta?.content?.richText}
				<StructuredText richText={postCta.content.richText} />
			{/if}
			{#if postCta?.video}
				<video controls src={postCta.video} class="w-full mt-4"></video>
			{/if}
			{#if postCta?.items}
				<ul>
					{#each postCta.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</section>

	<article class="flex flex-col sm:flex-row gap-8 container-base mt-8">
		<main class="space-y-8 basis-9/12">
			<BlogCta props={dummyCTAProps} ctaAction={() => alert("button Clicked")} />

			{#each data.post.modularContent as block}
				{#if block.__typename === "RichTextBlockRecord"}
					<StructuredText richText={block.richText} class="space-y-4" />
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			{#if postCta}
				<div class="border-2 h-fit rounded-md border-gray-500 lg:sticky lg:top-20">
					<div class="p-6 bg-night">
						<p class="text-(sm neutral-300) font-bold">{postCta.title}</p>
					</div>

					<StructuredText richText={postCta.content?.richText} class="p-6 space-y-4" />

					<div class="p-6 bg-night">
						<a href={postCta.cta[0].link} class="action-white w-fit text-sm rounded-none"
							>{postCta.cta[0].text}</a
						>
					</div>
				</div>
			{/if}
		</aside>
	</article>
{/if}

{#if data.correctUrl}
	<section class="container-base py-16 space-y-2">
		<p class="text-xl">It looks like you are trying to access an existing post with a wrong URL.</p>
		<p class="text-xl break-words">
			Try this one:
			<a href={data.correctUrl} class="underline font-semibold">{data.correctUrl}</a>
		</p>
	</section>
{/if}
