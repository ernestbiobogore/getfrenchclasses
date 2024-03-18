<script lang="ts">
	import Cards from "$lib/components/dato/sections/Cards.svelte";
	import FAQ from "$lib/components/dato/sections/FAQ.svelte";
	import Hero from "$lib/components/dato/sections/Hero.svelte";
	import Testimonials from "$lib/components/dato/sections/Testimonials.svelte";
	import type { getSingleModularPage } from "$lib/graphql/queries/modular";

	export let modularPage: Awaited<ReturnType<typeof getSingleModularPage>>;
</script>

{#if modularPage?.modularContent && modularPage.modularContent.length > 0}
	{#each modularPage.modularContent as record (record.id)}
		{#if record.__typename === "HeroSectionRecord"}
			<Hero {record} />
		{/if}

		{#if record.__typename === "CardsSectionRecord"}
			<Cards {record} />
		{/if}

		{#if record.__typename === "TestimonialsSectionRecord"}
			<Testimonials {record} />
		{/if}

		{#if record.__typename === "FaqSectionRecord"}
			<FAQ {record} />
		{/if}
	{/each}
{/if}
