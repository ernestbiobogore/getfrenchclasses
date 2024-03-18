<script lang="ts">
	import type { FileField } from "$lib/graphql/generated";
	import { Image } from "@datocms/svelte";

	export let media: FileField;
</script>

{#if media.format === "svg"}
	{#if media.url}
		<img src={media.url} alt={media.alt} class="w-12 h-12" />
	{/if}
{:else if media.responsiveImage}
	<Image data={media.responsiveImage} />
{/if}
