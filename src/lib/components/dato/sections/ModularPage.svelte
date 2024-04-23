<script lang="ts">
	import Heading from "$dato/blocks/Heading.svelte";
	import Cards from "$dato/sections/Cards.svelte";
	import FAQ from "$dato/sections/FAQ.svelte";
	import Hero from "$dato/sections/Hero.svelte";
	import Testimonials from "$dato/sections/Testimonials.svelte";
	import TutorsByCity from "$dato/sections/TutorsByCity.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";
	import type {
		getSingleLocationModularPage,
		getSingleModularPage,
	} from "$lib/graphql/queries/modular";
	import ComparisonTable from "./ComparisonTable.svelte";
	import StructuredText from "$dato/StructuredText/index.svelte";

	export let modularPage:
		| Awaited<ReturnType<typeof getSingleModularPage>>
		| Awaited<ReturnType<typeof getSingleLocationModularPage>>;
</script>

{#if modularPage?.modularContent && modularPage.modularContent.length > 0}
	{#each modularPage.modularContent as record (record.id)}
		{#if record.__typename === "RichTextSectionRecord"}
			<section class="space-y-12 container-base">
				{#if record.heading}
					<Heading
						heading={record.heading}
						class="text-left"
						contentClass="text-left mx-[inherit] !max-w-[inherit]"
					/>
				{/if}

				{#if record.richTexts && record.richTexts.length > 0}
					{#each record.richTexts as richText (richText.id)}
						<StructuredText {richText} />
					{/each}
				{/if}
			</section>
		{/if}

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

		{#if record.__typename === "CoursesSectionRecord"}
			<section class="py-20 space-y-12 container-base">
				{#if record.heading}
					<Heading heading={record.heading} />
				{/if}

				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each record.courses as course (course.id)}
						<CourseCard {course} />
					{/each}
				</div>
			</section>
		{/if}

		{#if record.__typename === "TutorsByCitySectionRecord"}
			<TutorsByCity {record} />
		{/if}

		{#if record.__typename === "ComparisonSectionRecord"}
			<ComparisonTable {record} />
		{/if}
	{/each}
{/if}
