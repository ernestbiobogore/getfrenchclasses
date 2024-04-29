<script lang="ts">
	import { cn } from "$lib/utils";
	import * as Card from "$shadcn/card";
	import { ScrollArea } from "$shadcn/scroll-area";
	import { createTableOfContents } from "@melt-ui/svelte";
	import Tree from "./tree.svelte";

	let className: string | undefined = "";

	export let selector: string;
	export { className as class };

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree },
	} = createTableOfContents({
		selector,
		exclude: ["h4", "h5", "h6"],
		activeType: "all",
		headingFilterFn: heading => !heading.hasAttribute("data-toc-ignore"),
	});
</script>

{#if $headingsTree && $headingsTree.length}
	{#key $headingsTree}
		<Card.Root class={cn("pt-8 pb-4 h-fit", className)}>
			<ScrollArea orientation="vertical" class="h-[30rem]">
				<Card.Content>
					<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
				</Card.Content>
			</ScrollArea>
		</Card.Root>
	{/key}
{/if}
