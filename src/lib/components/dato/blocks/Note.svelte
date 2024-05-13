<script lang="ts" context="module">
	import { cn } from "$lib/utils";

	const getNoteHeaderClass = (type: string) => {
		return cn("p-4", {
			"bg-brand-primary text-white": type === "note",
			"bg-destructive/90 text-destructive-foreground": type === "important",
			"bg-[#d4a017] text-white": type === "warning",
		});
	};

	const getNoteContentlass = (type: string) => {
		return cn("text-xl border-2 p-4", {
			"border-brand-primary": type === "note",
			"border-destructive/90": type === "important",
			"border-[#d4a017]": type === "warning",
		});
	};
</script>

<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type { NoteBlockRecord } from "$lib/graphql/generated";

	export let note: NoteBlockRecord;
</script>

<div>
	{#if note.card}
		{#if note.card.title}
			<div class={getNoteHeaderClass(note.noteType || "note")}>
				<p class="font-medium text-xl">{note.card.title}</p>
			</div>
		{/if}

		{#if note.card.content?.richText}
			<StructuredText
				richText={note.card.content.richText}
				class={getNoteContentlass(note.noteType || "note")}
			/>
		{/if}

		{#if note.card.media?.responsiveImage}
			<img
				src={note.card.media.responsiveImage.src}
				alt={note.card.media.responsiveImage.alt}
				class="w-full mt-4"
			/>
		{/if}

		{#if note.card.media?.video}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls src={note.card.media.video.mp4Url} class="w-full mt-4"> </video>
		{/if}
	{/if}
</div>
