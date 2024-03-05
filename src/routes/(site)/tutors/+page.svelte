<script lang="ts" context="module">
	const filterOptions = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		type: [
			{ value: "kids", label: "Kids" },
			{ value: "adults", label: "Adults" },
		],
	} as const;

	export const tutorsDummyData = Array.from({ length: 6 })
		.fill({
			name: "Kevin L.",
			short_description: "French lessons with a native speaker with 40+ years of experience",
			rating: 5.0,
			audience: ["Adults"],
			levels: ["Intermediate", "Advanced"],
			location: "Richboro, PA (Online, In person)",
			lessons: ["Grammar", "Vocabulary", "Pronunciation"],
		})
		.concat([
			{
				name: "Kevin L.",
				short_description: "French lessons with a native speaker with 40+ years of experience",
				rating: 5.0,
				audience: ["Kids"],
				levels: ["Beginner"],
				location: "Richboro, PA (Online, In person)",
				lessons: ["Grammar", "Vocabulary", "Pronunciation"],
			},
			{
				name: "Kevin L.",
				short_description: "French lessons with a native speaker with 40+ years of experience",
				rating: 5.0,
				audience: ["Kids"],
				levels: ["Beginner"],
				location: "Richboro, PA (Online, In person)",
				lessons: ["Grammar", "Vocabulary", "Pronunciation"],
			},
		]) as Tutor[];

	export type LevelOptionValue = (typeof filterOptions)["levels"][number]["label"];
	export type TypeOptionValue = (typeof filterOptions)["type"][number]["label"];
	export type TutorSelected = Selected<LevelOptionValue | TypeOptionValue>[];
</script>

<script lang="ts">
	import TutorCard, { type Tutor } from "$lib/components/TutorCard.svelte";

	import CustomMultiselect, {
		type SelectChangeHandler,
	} from "$lib/components/CustomMultiselect.svelte";
	import TestimonialCta, {
		dummyTestimonialCta,
	} from "$lib/components/cta-section/TestimonialCta.svelte";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import type { Selected } from "bits-ui";

	import FaqAccordion from "$lib/components/FaqAccordion.svelte";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import { goto } from "$app/navigation";

	export let data;
	$: homepageData = data?.homepageData;

	let filteredTutors: Tutor[] = tutorsDummyData;

	const handleFilterChange: SelectChangeHandler = selected => {
		if (!selected || selected.length === 0) {
			filteredTutors = tutorsDummyData;
			return;
		}

		const tutorSelected = selected as TutorSelected;

		filteredTutors = tutorsDummyData.filter(tutor => {
			const levelSelected = tutorSelected.some(option => isLevelOptionValue(option.label));
			const typeSelected = tutorSelected.some(option => isTypeOptionValue(option.label));

			if (levelSelected && typeSelected) {
				return (
					tutor.levels.some(level => tutorSelected.some(option => option.label === level)) ||
					tutor.audience.some(audience => tutorSelected.some(option => option.label === audience))
				);
			}

			if (levelSelected) {
				return tutor.levels.some(level => tutorSelected.some(option => option.label === level));
			}

			if (typeSelected) {
				return tutor.audience.some(audience =>
					tutorSelected.some(option => option.label === audience)
				);
			}

			return false;
		});
	};

	function isLevelOptionValue(value: string | undefined): value is LevelOptionValue {
		return filterOptions.levels.some(option => option.label === value);
	}

	function isTypeOptionValue(value: string | undefined): value is TypeOptionValue {
		return filterOptions.type.some(option => option.label === value);
	}

	function castAsRecord(t: any) {
		return t as Record<string, { value: string; label: string }[]>;
	}
</script>

<svelte:head>
	<title>All our Courses - GetFrenchClasses</title>
</svelte:head>

<section class="container-base p-3 space-y-5 md:py-20 md:text-center">
	<h1>
		French Tutors to guide to you to a <br /> better understanding of the language.
	</h1>
	<p>Explore our comprehensive range of French tutors</p>

	<div class="max-w-3xl mx-auto">
		<!-- CTA BUTTON -->
		<a href={"/"} class="action-base w-full text-base md:text-lg"
			>Take a language assessment course</a
		>
	</div>
</section>

<section class="container-base pt-10">
	<CustomMultiselect
		onSelectedChange={handleFilterChange}
		placeholder="Filter by Level or Type"
		options={castAsRecord(filterOptions)}
	/>
</section>

<section class="container-base py-20">
	<!-- <CourseSectionDivider label="Beginner" /> -->

	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
		{#each filteredTutors as tutor}
			<div
				role="button"
				tabindex="0"
				on:keydown={e => e.key === "Enter" && goto("/tutor/andy")}
				on:click={() => goto("/tutor/andy")}
			>
				<TutorCard {tutor}></TutorCard>
			</div>
		{/each}
	</div>

	<div class="flex-s-center mt-10">
		<Button class="">See More</Button>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="container-base py-10">
	<h2 class="text-center">How it works</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rerum sapiente nulla quasi
		assumenda.
	</p>

	<div class="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
		{#each [...Array(3)] as _}
			<Card.Root class="shadow-none bg-transparent border-none">
				<img
					class="w-full h-48 object-cover rounded-lg"
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

<section class="container-base py-20">
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

{#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
	<section class="max-w-2xl px-4 mx-auto py-10 md:pt-20" id="faq">
		<h2 class="mb-8 text-center">Frequently Asked Questions</h2>
		<FaqAccordion
			faqs={homepageData.faq.faqBlocks.map(block => ({
				id: block.id,
				faq: {
					heading: block.faq?.heading || "",
					subheading: block.faq?.subheading || {},
				},
			}))}
		/>
	</section>
{/if}

<TestimonialCta {...dummyTestimonialCta} />
