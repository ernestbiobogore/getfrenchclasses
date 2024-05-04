<script lang="ts">
	import type { getResourcePage } from "$lib/graphql/queries/resource";
	import { cn } from "$lib/utils";
	import { Image } from "@unpic/svelte";

	let _class = "";

	export let size = 150;
	export { _class as class };
	export let responsiveImage: NonNullable<
		NonNullable<Awaited<ReturnType<typeof getResourcePage>>>["featuredImage"]
	>["responsiveImage"];
	export let imageText: string;
</script>

{#if responsiveImage}
	<div class="relative">
		<Image
			src={responsiveImage.src}
			class="rounded-full hello"
			alt="Banner"
			layout="constrained"
			width={size}
			aspectRatio={1}
			background={responsiveImage.base64 || responsiveImage.bgColor || "auto"}
		/>

		<div class={cn("absolute bg-white p-2 rounded-lg text-sm gap-2 w-[200px]", _class)}>
			<div class="font-medium">
				{imageText}
			</div>
		</div>
	</div>
{/if}
