<script lang="ts">
	import { Badge } from "$shadcn/badge";
	import { Button } from "$shadcn/button";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";

	export let data;
</script>

<svelte:head>
	<title>GetFrenchclasses Careers - {data.job.title}</title>
</svelte:head>

<section class="container-sm p-3 space-y-4 md:py-20">
	<Badge class="text-base font-normal border-black">{data.job.location}</Badge>
	<h1>{data.job.title}</h1>
	<Button class="border-black" variant="outline" href={data.job.cta?.link}
		>{data.job.cta?.text || "Apply For this Job"}</Button
	>
</section>

<section class="py-20 bg-white">
	<div class="container-sm">
		<div class="flex flex-col gap-5 md:max-w-lg md:ml-20">
			{#each data.job.contentItems as block}
				<!-- {#if block.__typename === "RichTextBlockRecord"} -->
				<StructuredText richText={block.richText} class="space-y-4" />
				<!-- {/if} -->
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.container-sm {
		:global(h2) {
			@apply text-3xl;
		}
	}
</style>
