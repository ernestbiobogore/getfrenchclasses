<script lang="ts" context="module">
	import type { HeadingBlockNewRecord } from "$lib/graphql/generated";

	export type FaqItems = {
		id: string;
		faq: {
			heading: HeadingBlockNewRecord["heading"];
			subheading: object;
		};
	}[];
</script>

<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Accordion } from "bits-ui";
	import { slide } from "svelte/transition";

	import Minus from "~icons/lucide/minus";
	import Plus from "~icons/lucide/plus";

	export let faqs: FaqItems = [];
</script>

<Accordion.Root class="space-y-4" value={faqs[0].id}>
	{#each faqs as { id, faq }, i}
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
