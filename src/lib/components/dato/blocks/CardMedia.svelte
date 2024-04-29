<script lang="ts">
	import type { FileField } from "$lib/graphql/generated";
	import { Image } from "@unpic/svelte";

	export let media: FileField;
</script>

{#if media.format === "svg"}
	{#if media.url}
		<img src={media.url} alt={media.alt} class="w-12 h-12" />
	{/if}
{:else if media.responsiveImage}
	<Image
		src={media.responsiveImage?.src || media.url}
		alt={media.responsiveImage?.alt}
		layout="constrained"
		width={media.responsiveImage?.width || 1200}
		aspectRatio={media.responsiveImage?.aspectRatio || 1.9}
		background={media.responsiveImage?.base64 || media.responsiveImage?.bgColor || "auto"}
	/>
{/if}
