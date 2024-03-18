<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import type {
		HeadingBlockNewModelSubheadingField,
		HeadingBlockNewRecord,
	} from "$lib/graphql/generated";

	export let heading: HeadingBlockNewRecord;
	export let titleTag: "h1" | "h2" = "h2";

	const isEmptySubHeading = (subHeading: HeadingBlockNewModelSubheadingField) => {
		return (
			subHeading.value?.document?.children?.length === 1 &&
			subHeading.value.document.children?.[0]?.children?.[0]?.value === ""
		);
	};
</script>

<div class="space-y-4">
	<svelte:element this={titleTag} class="text-center">{heading.heading}</svelte:element>

	{#if heading.subheading && !isEmptySubHeading(heading.subheading)}
		<StructuredText
			richText={heading.subheading}
			class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
		/>
	{/if}
</div>
