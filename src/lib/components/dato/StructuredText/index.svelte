<script lang="ts">
	import { cn } from "$lib/utils";
	import { setContext } from "svelte";
	import Node from "./Node.svelte";
	import type { ElementsClasses } from "./types";

	export let richText: any;
	export let elementClasses: ElementsClasses | undefined = undefined;
	export { className as class };

	$: node = richText?.value.document;
	$: blocks = richText?.blocks;

	let className: string | undefined = "";

	setContext<ElementsClasses | undefined>("elementClasses", elementClasses);
</script>

<div class={cn("structured-text", className)}>
	<Node {node} {blocks} />
</div>

<style>
	:global(.structured-text a) {
		@apply underline;
	}
</style>
