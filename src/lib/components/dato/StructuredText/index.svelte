<script lang="ts">
	import { cn } from '$lib/utils';
	import Node from './Node.svelte';

	export let richText: any;
	export { className as class };

	$: node = richText?.value.document;
	$: blocks = richText?.blocks;

	let className: string | undefined = '';
</script>

<div class={cn(className)}>
	<Node {node} {blocks} />
</div>
