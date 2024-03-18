<script lang="ts">
	import Cards from "$lib/components/dato/sections/Cards.svelte";
	import FAQ from "$lib/components/dato/sections/FAQ.svelte";
	import Hero from "$lib/components/dato/sections/Hero.svelte";
	import Testimonials from "$lib/components/dato/sections/Testimonials.svelte";

	export let data;
</script>

<svelte:head>
	<title>{data.modularPage?.title} - GetFrenchClasses</title>
</svelte:head>

{#if data.modularPage?.modularContent && data.modularPage.modularContent.length > 0}
	{#each data.modularPage.modularContent as record (record.id)}
		{#if record.__typename === "HeroSectionRecord"}
			<Hero {record} />
		{/if}

		{#if record.__typename === "CardsSectionRecord"}
			<Cards {record} />
		{/if}

		{#if record.__typename === "TestimonialsSectionRecord"}
			<Testimonials {record} />
		{/if}

		{#if record.__typename === 'FaqSectionRecord'}
			<FAQ {record} />
		{/if}
	{/each}
{/if}
