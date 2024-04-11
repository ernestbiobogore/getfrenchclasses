<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type { getFaqItemBySlug } from "$lib/graphql/queries/faq";
	import { Accordion } from "bits-ui";
	import { slide } from "svelte/transition";
	import Minus from "~icons/lucide/minus";
	import Plus from "~icons/lucide/plus";

	export let items: Awaited<ReturnType<typeof getFaqItemBySlug>>;
	$: faqBblocks = items?.faqBlocks;
</script>

{#if faqBblocks && faqBblocks.length > 0}
	<Accordion.Root class="space-y-4" value={faqBblocks[0].id}>
		{#each faqBblocks as { id, faq } (id)}
			<Accordion.Item value={id} class="px-6 py-4 space-y-4 bg-white rounded-xl">
				<h3>
					<Accordion.Trigger
						class="flex-s-between w-full font-medium [&[data-state=open]>.plus]:hidden [&[data-state=closed]>.minus]:hidden"
					>
						<span class="text-base text-left basis-11/12">{faq.heading}</span>
						<Minus class="text-2xl minus"></Minus>
						<Plus class="text-2xl plus"></Plus>
					</Accordion.Trigger>
				</h3>

				<Accordion.Content transition={slide} class="text-left">
					<StructuredText richText={faq.subheading} />
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
{/if}
