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

{#if className}
	<div class={cn(className)}>
		<Node {node} {blocks} />
	</div>
{:else}
	<div>
		<Node {node} {blocks} />
	</div>
{/if}
