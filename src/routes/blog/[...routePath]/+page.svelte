<script lang="ts">
	import StructuredText from '$lib/components/dato/StructuredText/index.svelte';
	import BlogCta, { type CTAProps } from '$lib/components/ui/BlogCTA.svelte';
	import RedditIcon from '$lib/icons/reddit.svg?component';
	import XIcon from '$lib/icons/twitter.svg?component';
	import { cn, generateShareOptions, getShareLinks } from '$lib/utils';
	import { FacebookIcon, LinkedinIcon } from 'lucide-svelte';

	export let data;
	$: postCta = data.post?.cta[0];
	$: shareOptions = generateShareOptions(data.post!);
	$: ({ twitterShareUrl, facebookShareUrl, linkedInShareUrl, redditShareUrl } =
		getShareLinks(shareOptions));

	const dummyCTAProps: CTAProps = {
		video:
			'https://cdn.discordapp.com/attachments/1181304981576486962/1196953201669324901/Screen_Recording_2024-01-16_at_11.01.18_pm.mov?ex=65b98089&is=65a70b89&hm=2fbbd8a97dadc3e2b8fae343e65da65aa9bef9c0f863d77c370f92725af06402&',
		buttonText: 'Start learning french with as low as $8 per day',
		heading: 'Take your french from A1 (Beginner) to C1 (Intermediate) in 4 months',
		subtext: 'Finally a way to learn a new language without paying tutors $80+ per hour.',
		buttonSubtext:
			'and 4570+ other learners went from noob to fluent french speakers with our programs.',
		peopleImages: ['', '', '']
	};

	const getNoteClass = (type: string) => {
		return cn(
			'border-l-4',
			{
				'bg-red-100 border-red-400': type === 'important',
				'bg-blue-100 border-blue-400': type === 'note',
				'bg-yellow-100 border-yellow-400': type === 'warning'
			},
			'p-4'
		);
	};
</script>

<svelte:head>
	<title>{data.post?.title || 'Post not found'}</title>
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
				class="inline-flex items-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<XIcon class="w-4 h-4" />
				<span>Share on Twitter</span>
			</a>
			<a
				href={facebookShareUrl}
				class="inline-flex items-center gap-1 px-1 rounded-lg border border-gray-400"
			>
				<FacebookIcon class="w-5" />
				<span>Share on Facebook</span>
			</a>
			<a
				href={linkedInShareUrl}
				class="inline-flex items-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<LinkedinIcon class="w-5" />
				<span>Share on LinkedIn</span>
			</a>
			<a
				href={redditShareUrl}
				class="inline-flex items-center gap-1 px-2 rounded-lg border border-gray-400"
			>
				<RedditIcon class="w-5" />
				<span>Share on Reddit</span>
			</a>
		</div>
	</header>

	<article class="flex flex-col sm:flex-row gap-8 container-base mt-8">
		<main class="space-y-8 basis-9/12">
			<BlogCta props={dummyCTAProps} ctaAction={() => alert('button Clicked')} />

			{#each data.post.modularContent as block}
				{#if block.__typename === 'RichTextBlockRecord'}
					<StructuredText richText={block.richText} class="space-y-4" />
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			{#if postCta}
				<div class="border-2 h-fit rounded-md border-gray-500 lg:sticky lg:top-20">
					<div class="p-6 bg-night">
						<p class="text-sm font-bold text-neutral-300">{postCta.title}</p>
					</div>

					<StructuredText richText={postCta.content[0].richText} class="p-6 space-y-4" />

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
