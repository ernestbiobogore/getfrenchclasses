<script lang="ts" context="module">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import type { RichTextBlockModelRichTextBlocksField } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";

	const getNoteClass = (type: string) => {
		return cn("border-l-4 p-4", {
			"bg-[#ccccff] border-[#86608e]": type === "important",
			"bg-[#1569c7] border-[#040720]": type === "note",
			"bg-[#eaeee9] border-[#d4a017]": type === "warning",
		});
	};

	const getNoteContentlass = (type: string) => {
		return cn("font-semibold", {
			"text-[#86608e]": type === "important",
			"text-white": type === "note",
			"text-[#d4a017]": type === "warning",
		});
	};
</script>

<script lang="ts">
	export let block: RichTextBlockModelRichTextBlocksField;
</script>

{#if block.__typename === "NoteBlockRecord"}
	<div class={getNoteClass(block.noteType || "note")}>
		{#if block.card}
			{#if block.card.title}
				<h3 class={getNoteContentlass(block.noteType || "note")}>{block.card.title}</h3>
			{/if}

			{#if block.card.content?.richText}
				<StructuredText
					richText={block.card.content.richText}
					class={getNoteContentlass(block.noteType || "note")}
				/>
			{/if}

			{#if block.card.media?.responsiveImage}
				<img
					src={block.card.media.responsiveImage.src}
					alt={block.card.media.responsiveImage.alt}
					class="w-full mt-4"
				/>
			{/if}

			{#if block.card.media?.video}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video controls src={block.card.media.video.mp4Url} class="w-full mt-4"> </video>
			{/if}
		{/if}
	</div>
{/if}

{#if block.__typename === "CardBlockRecord"}
	card block
{/if}

{#if block.__typename === "ImageBlockRecord"}
	image block
{/if}
