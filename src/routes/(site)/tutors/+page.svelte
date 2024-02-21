<script lang="ts">
	import * as Avatar from "$shadcn/avatar";
	import * as Card from "$shadcn/card";
	import CourseSectionDivider from "$routes/(site)/courses/CourseSectionDivider.svelte";
	import CustomMultiselect, {
		type SelectChangeHandler,
	} from "$lib/components/CustomMultiselect.svelte";
	import TestimonialCta, {
		dummyTestimonialCta,
	} from "$lib/components/cta-section/TestimonialCta.svelte";
	import type { Selected } from "bits-ui";
	import { Button } from "$shadcn/button";

	import StarFillIcon from "~icons/solar/star-bold";
	import UserIcon from "~icons/lucide/user";
	import LayersIcon from "~icons/lucide/layers";
	import LocateIcon from "~icons/lucide/locate";
	import PhoneIcon from "~icons/lucide/phone";
	import VideoIcon from "~icons/lucide/video";
	import MessageCircleIcon from "~icons/lucide/message-circle";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";

	export let data;
	$: homepageData = data?.homepageData;

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

	type LevelOptionValue = (typeof filterOptions)["levels"][number]["label"];
	type TypeOptionValue = (typeof filterOptions)["type"][number]["label"];
	type TutorSelected = Selected<LevelOptionValue | TypeOptionValue>[];

	type Tutor = {
		name: string;
		short_description: string;
		rating: number;
		audience: TypeOptionValue[];
		levels: LevelOptionValue[];
		location: string;
		price: number;
	};

	let tutors = Array.from({ length: 6 })
		.fill({
			name: "Kevin L.",
			short_description: "French lessons with a native speaker with 40+ years of experience",
			rating: 5.0,
			audience: ["Adults"],
			levels: ["Intermediate", "Advanced"],
			location: "Richboro, PA (Online, In person)",
			price: 24,
		})
		.concat([
			{
				name: "Kevin L.",
				short_description: "French lessons with a native speaker with 40+ years of experience",
				rating: 5.0,
				audience: ["Kids"],
				levels: ["Beginner"],
				location: "Richboro, PA (Online, In person)",
				price: 24,
			},
			{
				name: "Kevin L.",
				short_description: "French lessons with a native speaker with 40+ years of experience",
				rating: 5.0,
				audience: ["Kids"],
				levels: ["Beginner"],
				location: "Richboro, PA (Online, In person)",
				price: 24,
			},
		]) as Tutor[];

	let filteredTutors: Tutor[] = tutors;

	const handleFilterChange: SelectChangeHandler = selected => {
		if (!selected || selected.length === 0) {
			filteredTutors = tutors;
			return;
		}

		const tutorSelected = selected as TutorSelected;

		filteredTutors = tutors.filter(tutor => {
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
			<Card.Root class="bg-white shadow-lg rounded-lg overflow-hidden">
				<img
					alt="Banner"
					class="w-full h-20 object-fill"
					height="100"
					src="/placeholder.svg"
					style="aspect-ratio: 1 / 1; object-fit: cover;"
					width="350"
				/>
				<Card.Content class="p-4">
					<div class="flex items-center space-x-3 mb-6">
						<Avatar.Root class="w-14 h-14 border-4 border-white">
							<Avatar.Image alt={tutor.name} src="/placeholder.svg?height=40&width=40" />
							<Avatar.Fallback>KL</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<div class="font-semibold text-lg text-gray-900">{tutor.name}</div>
							<div class="flex items-center">
								<StarFillIcon class="text-yellow-400" />
								<span class="ml-1 mr-2 text-gray-900">5.0</span>
								<span class="text-sm text-gray-500">(7)</span>
							</div>
						</div>
					</div>
					<div class="text-lg font-medium mb-6 text-gray-900">
						{tutor.short_description}
					</div>
					<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
						<UserIcon class="w-5 h-5" />
						<span>{tutor.audience.join(", ")}</span>
					</div>
					<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
						<LayersIcon class="w-5 h-5" />
						<span>
							{tutor.levels.join(", ")}
						</span>
					</div>
					<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
						<LocateIcon class="w-5 h-5" />
						<span>{tutor.location}</span>
					</div>
					<div class="flex items-center justify-between">
						<div class="text-xl font-semibold text-blue-600">${tutor.price}/hr</div>
						<div class="flex-s-center gap-2 text-lg text-gray-600">
							<PhoneIcon />
							<VideoIcon />
							<MessageCircleIcon />
						</div>
					</div>
				</Card.Content>
			</Card.Root>
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
			itemIds={homepageData.faq.faqBlocks.map(faq => faq.id)}
			titles={homepageData.faq.faqBlocks.map(faq => faq.question || "")}
			richTexts={homepageData.faq.faqBlocks.map(faq => faq.answer[0].richText)}
		/>
	</section>
{/if}

<TestimonialCta {...dummyTestimonialCta} />
