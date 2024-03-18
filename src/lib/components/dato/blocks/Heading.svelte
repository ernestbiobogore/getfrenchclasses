<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import type {
		HeadingBlockNewModelSubheadingField,
		HeadingBlockNewRecord,
	} from "$lib/graphql/generated";

	export let heading: HeadingBlockNewRecord | undefined = undefined;
	export let titleTag: "h1" | "h2" = "h2";
	export let defaultHeading: string | undefined = undefined;
	export let useDefaultHeading = false;

	const isEmptySubHeading = (subHeading: HeadingBlockNewModelSubheadingField) => {
		return (
			subHeading.value?.document?.children?.length === 1 &&
			subHeading.value.document.children?.[0]?.children?.[0]?.value === ""
		);
	};
</script>

<div class="space-y-4">
	{#if useDefaultHeading}
		<svelte:element this={titleTag} class="text-center">{defaultHeading}</svelte:element>
	{:else if heading}
		<svelte:element this={titleTag} class="text-center">{heading.heading}</svelte:element>
	{/if}

	{#if heading && heading.subheading && !isEmptySubHeading(heading.subheading)}
		<StructuredText
			richText={heading.subheading}
			class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
		/>
	{/if}
</div>
