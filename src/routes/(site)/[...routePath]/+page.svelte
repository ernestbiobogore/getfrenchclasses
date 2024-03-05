<script lang="ts">
	import Cards from "./sections/Cards.svelte";
	import Hero from "./sections/Hero.svelte";
	import Testimonials from "./sections/Testimonials.svelte";

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
	{/each}
{/if}
