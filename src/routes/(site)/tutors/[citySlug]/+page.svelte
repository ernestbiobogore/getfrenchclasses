<script lang="ts">
	import { page } from "$app/stores";
	import Heading from "$dato/blocks/Heading.svelte";
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import Cards from "$dato/sections/Cards.svelte";
	import FAQ from "$dato/sections/FAQ.svelte";
	import Hero from "$dato/sections/Hero.svelte";
	import Testimonials from "$dato/sections/Testimonials.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";
	import { Button } from "$shadcn/button";
	import SvelteSeo from "svelte-seo";

	export let data;
	$: ({ modularPage, city, courses } = data);
	$: seo = modularPage.seo?.seoBlock;

	$: title = `Our tutors in ${city.name} | Get French Classes`;
	$: seoData = {
		url: $page.url.href,
		title,
		description: title,
		image: {
			url: seo?.image?.responsiveImage?.src || seo?.image?.url,
			alt: seo?.image?.alt || title,
			width: 1200,
			height: 630,
		},
	};
</script>

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type: "website",
		images: [
			{
				url: seoData.image.url,
				width: seoData.image.width,
				height: seoData.image.height,
				alt: seoData.image.alt,
			},
		],
		site_name: seoData.title,
	}}
/>

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

		{#if record.__typename === "ReferenceSectionRecord"}
			{#if record.section === "tutors_by_location"}
				{#if city._allReferencingTutors.length > 0}
					<section class="py-20 space-y-12 container-base">
						<Heading defaultHeading="Our tutors in {city.name}" useDefaultHeading />

						<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
							{#each city._allReferencingTutors as tutor (tutor.id)}
								<TutorCard {tutor} />
							{/each}
						</div>

						<div class="flex justify-center">
							<Button href="/tutors">See all tutors</Button>
						</div>
					</section>
				{/if}
			{/if}

			{#if record.section === "courses"}
				<section class="py-20 space-y-12 container-base">
					<Heading defaultHeading="Our courses" useDefaultHeading />

					<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{#each courses as course (course.id)}
							<CourseCard {course} />
						{/each}
					</div>

					<div class="flex justify-center">
						<Button href="/courses">See all our courses</Button>
					</div>
				</section>
			{/if}
		{/if}
	{/each}
{/if}
