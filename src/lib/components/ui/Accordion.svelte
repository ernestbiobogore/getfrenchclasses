<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { Minus, Plus } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	export let itemIds: string[];
	export let titles: string[];
	export let contents: string[];

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: itemIds[0]
	});
</script>

<div use:melt={$root} class="space-y-4">
	{#each Array(itemIds.length) as _, i}
		{@const itemId = itemIds[i]}
		<div use:melt={$item(itemId)} class="px-6 py-4 space-y-4 bg-white rounded-xl">
			<h3>
				<button
					use:melt={$trigger(itemId)}
					class="flex justify-between w-full text-base font-medium"
				>
					<span class="text-left basis-11/12">
						{titles[i]}
					</span>

					{#if $isSelected(itemId)}
						<Minus />
					{:else}
						<Plus />
					{/if}
				</button>
			</h3>
			{#if $isSelected(itemId)}
				<div use:melt={$content(itemId)} transition:slide class="text-left">
					{contents[i]}
				</div>
			{/if}
		</div>
	{/each}
</div>
