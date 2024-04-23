<script lang="ts">
	import type { RichTextSectionRecord } from "$lib/graphql/generated";
	import StructuredText from "$dato/StructuredText/index.svelte";
	import Heading from "$dato/blocks/Heading.svelte";

	export let record: RichTextSectionRecord;
</script>

<section class="space-y-12 container-base">
	{#if record.heading}
		<Heading
			heading={record.heading}
			class="text-left"
			contentClass="text-left mx-[inherit] !max-w-[inherit]"
		/>
	{/if}

	{#if record.richTexts && record.richTexts.length > 0}
		{#each record.richTexts as richText (richText.id)}
			<StructuredText {richText} />
		{/each}
	{/if}
</section>
