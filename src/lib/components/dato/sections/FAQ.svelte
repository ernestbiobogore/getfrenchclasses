<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import type { FaqSectionRecord } from "$lib/graphql/generated";
	import { Accordion } from "bits-ui";
	import { slide } from "svelte/transition";
	import Minus from "~icons/lucide/minus";
	import Plus from "~icons/lucide/plus";

	export let record: FaqSectionRecord;
</script>

<section class="py-20 space-y-12 container-base">
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if record.faq?.faqBlocks && record.faq.faqBlocks.length > 0}
		<Accordion.Root class="space-y-4" value={record.faq.faqBlocks[0].id}>
			{#each record.faq.faqBlocks as { id, faq } (id)}
				<Accordion.Item value={id} class="px-6 py-4 space-y-4 bg-white rounded-xl">
					<h3>
						<Accordion.Trigger
							class="flex-s-between w-full font-medium [&[data-state=open]>.plus]:hidden [&[data-state=closed]>.minus]:hidden"
						>
							<span class="text-base text-left basis-11/12">{faq.heading}</span>
							<Minus class="minus text-2xl"></Minus>
							<Plus class="plus text-2xl"></Plus>
						</Accordion.Trigger>
					</h3>

					<Accordion.Content transition={slide} class="text-left">
						<StructuredText richText={faq.subheading} />
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	{/if}
</section>
