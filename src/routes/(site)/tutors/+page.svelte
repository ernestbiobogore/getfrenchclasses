<script lang="ts" context="module">
	const filterOptions = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		audiences: [
			{ value: "kids", label: "Kids" },
			{ value: "adults", label: "Adults" },
		],
	} as const;

	function isLevelOptionValue(value: string | undefined): value is LevelOptionValue {
		return filterOptions.levels.some(option => option.label === value);
	}

	function isAudienceOptionValue(value: string | undefined): value is AudienceOptionValue {
		return filterOptions.audiences.some(option => option.label === value);
	}

	function castAsRecord(t: any) {
		return t as Record<string, { value: string; label: string }[]>;
	}

	export type LevelOptionValue = (typeof filterOptions)["levels"][number]["value"];
	export type AudienceOptionValue = (typeof filterOptions)["audiences"][number]["value"];
	export type SelectedTutorOptions = Selected<LevelOptionValue | AudienceOptionValue>[];
</script>

<script lang="ts">
	import CustomMultiselect, {
		type SelectChangeHandler,
	} from "$lib/components/CustomMultiselect.svelte";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import TestimonialCta, {
		dummyTestimonialCta,
	} from "$lib/components/cta-section/TestimonialCta.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import type { Selected } from "bits-ui";
	import TutorCard from "./TutorCard.svelte";

	export let data;

	$: filteredTutors = data.tutorsMetas;

	const handleFilterChange: SelectChangeHandler = selected => {
		if (!selected || selected.length === 0) {
			filteredTutors = data.tutorsMetas;
			return;
		}

		const selectedTutorOptions = selected as SelectedTutorOptions;

		filteredTutors = data.tutorsMetas.filter(tutor => {
			const levelSelected = selectedTutorOptions.some(option => isLevelOptionValue(option.label));
			const audienceSelected = selectedTutorOptions.some(option =>
				isAudienceOptionValue(option.label)
			);

			if (levelSelected && audienceSelected) {
				return (
					tutor.levels.some(level => selectedTutorOptions.some(option => option.value === level)) ||
					tutor.audiences.some(audience =>
						selectedTutorOptions.some(option => option.value === audience)
					)
				);
			}

			if (levelSelected) {
				return tutor.levels.some(level =>
					selectedTutorOptions.some(option => option.value === level)
				);
			}

			if (audienceSelected) {
				return tutor.audiences.some(audience =>
					selectedTutorOptions.some(option => option.value === audience)
				);
			}

			return false;
		});
	};
</script>

<svelte:head>
	<title>All our tutors - GetFrenchClasses</title>
</svelte:head>

<section class="p-3 space-y-5 container-base md:py-20 md:text-center">
	<h1>
		French Tutors to guide to you to a <br /> better understanding of the language.
	</h1>
	<p>Explore our comprehensive range of French tutors</p>

	<div class="max-w-3xl mx-auto">
		<!-- CTA BUTTON -->
		<a href={"/"} class="w-full text-base action-base md:text-lg"
			>Take a language assessment course</a
		>
	</div>
</section>

<section class="pt-10 container-base">
	<CustomMultiselect
		onSelectedChange={handleFilterChange}
		placeholder="Filter by Level or Audience"
		options={castAsRecord(filterOptions)}
	/>
</section>

<section class="py-20 container-base">
	<!-- <CourseSectionDivider label="Beginner" /> -->

	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
		{#each filteredTutors as tutor}
			<TutorCard {tutor}></TutorCard>
		{/each}
	</div>

	<div class="mt-10 flex-s-center">
		<Button class="">See More</Button>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="py-10 container-base">
	<h2 class="text-center">How it works</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rerum sapiente nulla quasi
		assumenda.
	</p>

	<div class="grid gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3">
		{#each [...Array(3)] as _}
			<Card.Root class="bg-transparent border-none shadow-none">
				<img
					class="object-cover w-full h-48 rounded-lg"
					height="200"
					src="/placeholder.svg"
					style="aspect-ratio: 300/200; object-fit: cover;"
					alt=""
				/>
				<Card.Header class="px-0 py-4">
					<Card.Title>Find your French tutor</Card.Title>
				</Card.Header>
				<Card.Content class="px-0 py-0">
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Consult tutor profiles freely and contact your ideal tutor according to your needs
						(prices, qualifications, reviews, home or webcam lessons)
					</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>

<section class="py-20 container-base">
	<h2 class="text-center">What people say</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rerum sapiente nulla quasi
		assumenda.
	</p>
	<br />
	<div>
		<TestimonialCardList />
	</div>
</section>

<!-- FAQ -->
<section class="py-20 space-y-12 container-base">
	<Heading defaultHeading="Frequently Asked Questions" useDefaultHeading />
	<!-- <FAQItems items={data.homeFaqBlocks} /> -->
</section>

<TestimonialCta {...dummyTestimonialCta} />
