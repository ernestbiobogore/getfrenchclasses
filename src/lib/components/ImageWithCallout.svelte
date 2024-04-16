<script lang="ts">
	import type { HeroImageBlockRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";

	export let heroImage: HeroImageBlockRecord;
	export let size = "150px";
	let _class = "";
	export { _class as class };
</script>

{#if heroImage}
	<div class="relative">
		<img
			src={heroImage?.image?.responsiveImage?.src}
			class="size-[var(--size)] rounded-full"
			alt="Teacher 1"
			style:--size="var(--sze, {size})"
		/>
		<div class={cn("absolute bg-white p-2 rounded-lg text-sm gap-2 w-[200px]", _class)}>
			<div class="font-medium">
				{heroImage?.text}
			</div>
		</div>
	</div>
{/if}
