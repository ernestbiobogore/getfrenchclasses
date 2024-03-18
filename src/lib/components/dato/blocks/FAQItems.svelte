<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import type { FaqBlockNewRecord } from "$lib/graphql/generated";
	import { Accordion } from "bits-ui";
	import { slide } from "svelte/transition";
	import Minus from "~icons/lucide/minus";
	import Plus from "~icons/lucide/plus";

	export let items: FaqBlockNewRecord[];
</script>

<Accordion.Root class="space-y-4" value={items[0].id}>
	{#each items as { id, faq } (id)}
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
