<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	/**
	 * @type {any}
	 */
	export let open;
</script>

{#if open}
	<div>
		{#each ['Home', 'Example', 'About', 'Contact'] as link, i}
			<p transition:fly={{ y: -15, delay: 50 * i }}>
				{link}
			</p>
		{/each}
	</div>

	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}
