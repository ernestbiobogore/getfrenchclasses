<script lang="ts">
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import type { FaqSectionRecord } from "$lib/graphql/generated";
	import { getContext } from "svelte";

	export let record: FaqSectionRecord;

	const isHomePage = getContext<boolean>("isHomePage");
</script>

<section class="py-20 space-y-12 container-base" id={isHomePage ? "home-faq" : ""}>
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if record.faq?.faqBlocks && record.faq.faqBlocks.length > 0}
		<FAQItems items={record.faq} />
	{/if}
</section>
