<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import type {
		HeadingBlockNewModelSubheadingField,
		HeadingBlockNewRecord,
	} from "$lib/graphql/generated";
	import { cn, spanify } from "$lib/utils";

	let className: string | undefined | null = undefined;

	export let heading: HeadingBlockNewRecord | undefined = undefined;
	export let titleTag: "h1" | "h2" = "h2";
	export let defaultHeading: string | undefined = undefined;
	export let useDefaultHeading = false;
	export { className as class };

	const isEmptySubHeading = (subHeading: HeadingBlockNewModelSubheadingField) => {
		return (
			subHeading.value?.document?.children?.length === 1 &&
			subHeading.value.document.children?.[0]?.children?.[0]?.value === ""
		);
	};
</script>

<div class="space-y-4">
	{#if useDefaultHeading}
		<svelte:element this={titleTag} class={cn("text-center", className)}
			>{defaultHeading}</svelte:element
		>
	{:else if heading}
		<svelte:element this={titleTag} class={cn("text-center", className)}
			>{@html spanify(
				heading.heading,
				{ words: heading.highlightedWords?.split(", ") },
				"img-underline"
			)}</svelte:element
		>
	{/if}

	{#if heading && heading.subheading && !isEmptySubHeading(heading.subheading)}
		<StructuredText
			richText={heading.subheading}
			class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
		/>
	{/if}
</div>

<style>
	:global(.img-underline) {
		/* text-decoration: underline; */
		background-image: url("/span-underline.svg");
		background-position: 50% 100%;
		background-repeat: no-repeat;
		background-size: auto;
	}
</style>
