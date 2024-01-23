<script lang="ts">
	import StructuredText from '$lib/components/dato/StructuredText/index.svelte';
	import type { RichTextBlockModelRichTextBlocksField } from '$lib/graphql/generated';

	export let block: RichTextBlockModelRichTextBlocksField;
</script>

{#if block.__typename === 'NoteBlockRecord'}
	<div>
		{#each block.content as structuredText}
			<StructuredText richText={structuredText.richText} />
		{/each}
	</div>
{/if}

{#if block.__typename === 'CardBlockRecord'}
	card block
{/if}

{#if block.__typename === 'ImageBlockRecord'}
	image block
{/if}
