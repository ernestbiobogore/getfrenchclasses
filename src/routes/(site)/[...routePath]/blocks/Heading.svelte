<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import type {
		HeadingBlockNewModelSubheadingField,
		HeadingBlockNewRecord,
	} from "$lib/graphql/generated";
	import { cn } from "$lib/utils";

	export let heading: HeadingBlockNewRecord;
	export let titleTag: "h1" | "h2" = "h2";
	export let titleClass: string = "text-center";

	const isEmptySubHeading = (subHeading: HeadingBlockNewModelSubheadingField) => {
		return (
			subHeading.value?.document?.children?.length === 1 &&
			subHeading.value.document.children?.[0]?.children?.[0]?.value === ""
		);
	};
</script>

<svelte:element this={titleTag} class={cn(titleClass)}
	>{heading.heading}</svelte:element
>

{#if heading.subheading && !isEmptySubHeading(heading.subheading)}
	<StructuredText
		richText={heading.subheading}
		class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
	/>
{/if}
