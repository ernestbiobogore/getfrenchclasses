<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Accordion } from "bits-ui";
	import { slide } from "svelte/transition";

	import Plus from "~icons/lucide/plus";
	import Minus from "~icons/lucide/minus";

	export let itemIds: string[];
	export let titles: string[];
	export let richTexts: any[];
</script>

<Accordion.Root class="space-y-4" value={itemIds[0]}>
	{#each itemIds as value, i}
		<Accordion.Item {value} class="px-6 py-4 space-y-4 bg-white rounded-xl">
			<h3>
				<Accordion.Trigger
					class="flex-s-between w-full font-medium [&[data-state=open]>.plus]:hidden [&[data-state=closed]>.minus]:hidden"
				>
					<span class="text-base text-left basis-11/12">{titles[i]}</span>
					<Minus class="minus text-2xl"></Minus>
					<Plus class="plus text-2xl"></Plus>
				</Accordion.Trigger>
			</h3>

			<Accordion.Content transition={slide} class="text-left">
				<StructuredText richText={richTexts[i]} />
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
