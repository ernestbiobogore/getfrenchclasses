<script lang="ts">
	import type { HeroSectionRecord } from "$lib/graphql/generated";
	import { cn } from "$lib/utils";

	export let heroImage: HeroSectionRecord["heroImages"][0];
	let _class = "";
	export { _class as class };
</script>

{#if heroImage}
	<div class="relative">
		<img
			src={heroImage?.image?.responsiveImage?.src}
			class="size-[150px] rounded-full"
			alt="Teacher 1"
		/>
		<div class={cn("absolute bg-white p-2 rounded-lg text-sm gap-2 w-[200px]", _class)}>
			<div class="font-medium">
				{heroImage?.text}
			</div>
		</div>
	</div>
{/if}
