<script lang="ts">
	type Avatar = {
		src: string;
		alt: string;
	};

	export let avatars: Avatar[] = [];
	export let size = 32;
	export let loading: 'lazy' | 'eager' = 'eager';

	const margin = size / 3;
</script>

{#if avatars && avatars.length > 0}
	<div class="flex">
		{#each avatars as avatar}
			<img
				src={avatar.src}
				alt={avatar.alt}
				width={size}
				height={size}
				class="border-2 rounded-full border-white first:!ml-0"
				style="
				margin-left: -{margin}px;
				"
				{loading}
			/>
		{/each}
	</div>
{/if}
