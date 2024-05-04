<script lang="ts">
	import type { HeroImageBlockRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import { Image } from "@unpic/svelte";

	export let heroImage: HeroImageBlockRecord;
	export let size = 150;
	let _class = "";
	export { _class as class };
</script>

{#if heroImage && heroImage.image?.responsiveImage?.src}
	<div class="relative">
		<Image
			src={heroImage.image.responsiveImage.src}
			class="rounded-full hello"
			alt="Banner"
			layout="constrained"
			width={size}
			aspectRatio={1}
			background={heroImage.image.responsiveImage.base64 ||
				heroImage.image.responsiveImage.bgColor ||
				"auto"}
		/>

		<div class={cn("absolute bg-white p-2 rounded-lg text-sm gap-2 w-[200px]", _class)}>
			<div class="font-medium">
				{heroImage?.text}
			</div>
		</div>
	</div>
{/if}
