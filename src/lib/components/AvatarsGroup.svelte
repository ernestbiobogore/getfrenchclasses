<script lang="ts" context="module">
	export type Avatar = {
		src: string;
		alt: string;
	};
</script>

<script lang="ts">
	import * as ShadcnAvatar from "$lib/components/shadcn/ui/avatar";

	export let avatars: Avatar[] = [];
	export let size = 32;
	export let loading: "lazy" | "eager" = "eager";

	const margin = size / 3;
</script>

<div class="flex">
	{#each avatars as avatar}
		<ShadcnAvatar.Root style="margin-left: -{margin}px;">
			<ShadcnAvatar.Image src={avatar.src} alt={avatar.alt} {loading} />
		</ShadcnAvatar.Root>
	{/each}
</div>
