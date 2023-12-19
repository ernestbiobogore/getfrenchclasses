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

<header class="container-base py-16">
	<h1>{data.post.title}</h1>
</header>

<section class="container-base space-y-8">
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
</section>
