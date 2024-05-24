<script lang="ts">
	import { cn } from "$lib/utils";
	import { Image } from "@unpic/svelte";
	import type { PageData } from "../../routes/(site)/resources/[slug]/$types";

	let _class = "";

	export let size = 150;
	export { _class as class };
	export let responsiveImage:
		| NonNullable<NonNullable<PageData["resource"]>["featuredImage"]>["responsiveImage"]
		| undefined;
	export let imageAlt: string | null;
	export let imageText: string | null;
</script>

{#if responsiveImage && imageText}
	<div class="relative">
		<Image
			src={responsiveImage.src}
			class="rounded-full hello"
			alt={imageAlt || responsiveImage.alt}
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
