<script lang="ts">
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import type { FaqSectionRecord } from "$lib/graphql/generated";

	export let record: FaqSectionRecord;
</script>

<section class="py-20 space-y-12 container-base">
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if record.faq?.faqBlocks && record.faq.faqBlocks.length > 0}
		<FAQItems items={record.faq} />
	{/if}
</section>
