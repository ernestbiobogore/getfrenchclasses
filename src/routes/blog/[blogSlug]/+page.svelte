<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { StructuredText } from '@datocms/svelte';
	import { Image } from '@unpic/svelte';

	export let data;

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
	<title>{data.post.title}</title>
</svelte:head>

<header class="py-16 container-base">
	<h1>{data.post.title}</h1>
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
		{#if data.post.cta[0]}
			<div class="border-2 h-fit rounded-md border-gray-500 lg:sticky lg:top-20">
				<div class="p-6 bg-night">
					<p class="text-sm font-bold text-neutral-300">{data.post.cta[0].title}</p>
				</div>

				<div class="p-6 space-y-4">
					<StructuredText data={data.post.cta[0].content[0].richText?.value} />
				</div>

				<div class="p-6 bg-night">
					<a href={data.post.cta[0].cta[0].link} class="action-white w-fit text-sm rounded-none"
						>{data.post.cta[0].cta[0].text}</a
					>
				</div>
			</div>
		{/if}
	</aside>
</article>
