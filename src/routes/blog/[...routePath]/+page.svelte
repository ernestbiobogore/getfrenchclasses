<script lang="ts">
	import RedditIcon from '$lib/icons/reddit.svg?component';
	import XIcon from '$lib/icons/twitter.svg?component';
	import { FacebookIcon, LinkedinIcon } from 'lucide-svelte';
	import { Image } from '@unpic/svelte';
	import { StructuredText } from '@datocms/svelte';
	import { cn, generateShareOptions, getShareLinks } from '$lib/utils';

	export let data;
	$: postCta = data.post?.cta[0];
	$: shareOptions = generateShareOptions(data.post!);
	$: ({ twitterShareUrl, facebookShareUrl, linkedInShareUrl, redditShareUrl } =
		getShareLinks(shareOptions));

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

	<article class="flex flex-col sm:flex-row gap-8 container-base">
		<main class="space-y-8 basis-9/12">
			{#each data.post.modularContent as block}
				{#if block.__typename === 'ImageBlockRecord'}
					<Image
						src={block.image?.responsiveImage?.src}
						width={block.image?.responsiveImage?.width}
						height={block.image?.responsiveImage?.height}
						alt={block.image?.responsiveImage?.alt}
					/>
				{/if}

				{#if block.__typename === 'NoteBlockRecord'}
					<div class={getNoteClass(block.noteType ?? 'note')}>
						<StructuredText data={block.content[0].richText?.value} />
					</div>
				{/if}

				{#if block.__typename === 'RichTextBlockRecord'}
					<div class="space-y-4">
						<StructuredText data={block.richText?.value} />
					</div>
				{/if}
			{/each}
		</main>

		<aside class="basis-3/12">
			{#if postCta}
				<div class="border-2 h-fit rounded-md border-gray-500 lg:sticky lg:top-20">
					<div class="p-6 bg-night">
						<p class="text-sm font-bold text-neutral-300">{postCta.title}</p>
					</div>

					<div class="p-6 space-y-4">
						<StructuredText data={postCta.content[0].richText?.value} />
					</div>

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
