<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { AlignJustify, X } from 'lucide-svelte';

	const {
		elements: { content, trigger, arrow, close },
		states: { open }
	} = createPopover({
		forceVisible: true
	});
</script>

<button type="button" class="trigger" use:melt={$trigger} aria-label="Update dimensions">
	<AlignJustify class="square-4" />
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div class="flex flex-row w-full h-36" transition:fade={{ duration: 100 }} use:melt={$content}>
		<div use:melt={$arrow} />
		<div class="bg-white h-50 w-full flex flex-col justify-between px-5">
			<a href="/">Courses</a>
			<a href="/about">About</a>
			<a href="/">FAQ's</a>
			<a href="/contact">Contact</a>
		</div>
		<button class="close px-5" use:melt={$close}>
			<X class="square-4" />
		</button>
	</div>
{/if}
