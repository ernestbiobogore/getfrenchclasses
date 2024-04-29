<script lang="ts">
	import { cn } from "$lib/utils";
	import { melt, type TableOfContentsElements, type TableOfContentsItem } from "@melt-ui/svelte";

	export let tree: TableOfContentsItem[] = [];
	export let activeHeadingIdxs: number[];
	export let item: TableOfContentsElements["item"];
	export let level = 1;

	const linkWrapperClasses = cn({
		"my-4": level === 1,
	});

	const linkClasses = cn("hover:underline", {
		"font-medium": level === 1,
	});
</script>

<div class={cn("m-0", level !== 1 ? "pl-4" : "")}>
	{#each tree as heading, i (i)}
		<div class={cn(linkWrapperClasses)}>
			<a href="#{heading.id}" use:melt={$item(heading.id)} class={linkClasses}>
				{@html heading.node.innerHTML}
			</a>

			{#if heading.children && heading.children.length}
				<svelte:self tree={heading.children} level={1 + 1} {activeHeadingIdxs} {item} />
			{/if}
		</div>
	{/each}
</div>
