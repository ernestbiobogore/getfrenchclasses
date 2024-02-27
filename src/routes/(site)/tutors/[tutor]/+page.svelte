<script lang="ts">
	import { Badge } from "$shadcn/badge";
	import { tutorsDummyData } from "../+page.svelte";
	import TutorCard from "../TutorCard.svelte";
	import VideoCam from "~icons/material-symbols/videocam-outline-rounded";
	import SharpVerifired from "~icons/ic/sharp-verified";
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";

	export let data;
	let homepageData = data.homepageData;
	let allCourses = data.allCourses;

	$: ({ homepageData, allCourses } = data);

	const tutor = tutorsDummyData[0];
</script>

<section
	class="container-base flex flex-col-reverse justify-between gap-10 py-8 md-gap-24 md:flex-row lg:py-20"
>
	<!-- LEFT SIDE -->
	<div class="gap-10 flex flex-col flex-1">
		<div class="space-y-5">
			<div class="flex-s-start gap-4 overflow-x-scroll py-4">
				{#each [...Array(5)] as _}
					<Badge class="px-5 py-1.5" variant="secondary">French</Badge>
				{/each}
			</div>

			<h1>French lessons with a native speaker with 40+ years of experience</h1>

			<p class="text-2xl font-medium">Lesson Location</p>

			<div class="border border-primary rounded-full px-5 py-2 gap-2 inline-flex-s-center">
				<VideoCam class="text-lg" />
				<span class="text-sm font-medium">Online</span>
			</div>

			<div class="p-4 rounded-xl bg-pink-200">
				<div class="text-2xl mb-2 flex-s-start gap-2">
					<SharpVerifired />
					<span class="text- font-bold">Verified</span>
				</div>
				<p class="text-sm font-medium">
					One of our best tutors. Quality profile, experience in their field, verified
					qualifications and a great response time. Anna will be happy to arrange your first French
					lesson.
				</p>
			</div>
		</div>

		<div>
			<h2>About {tutor.name}</h2>
			<p>
				I love teaching languages, it's my passion! I work with adults and young people, I like
				building genuine relationships with my students. I have lived and worked in many mdifferent
				countries and I can speak five languages: Italian, French, English, Spanish and...latin !
			</p>
		</div>

		<!-- TODO: GET CLARIFICATION -->
		<div class="space-y-4">
			<h2>Qualified to teach</h2>

			<div class="grid gap-8 md:grid-cols-2">
				{#each allCourses.splice(0, 3) as course}
					<CourseCard {course} />
				{/each}
			</div>
		</div>

		<div class="space-y-4">
			<h2>Reviews</h2>

			<div class="" style:--padding="0">
				<TestimonialCardList />
			</div>
		</div>

		<div class="space-y-4 mt-10">
			<h2>Find more about {tutor.name}</h2>

			{#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
				<div class="lg:w-2/3">
					<FaqAccordion
						faqs={homepageData.faq.faqBlocks.map(block => ({
							id: block.id,
							faq: {
								heading: block.faq?.heading || "",
								subheading: block.faq?.subheading || {},
							},
						}))}
					/>
				</div>
			{/if}
		</div>
	</div>

	<!-- RIGHT SIDE -->
	<div class="md:flex-[0.7] lg:flex-[0.5] relative">
		<div class="sticky top-[5.75rem]">
			<TutorCard {tutor} withVerifiedBadge withCTA />
		</div>
	</div>
</section>

<section class="container-base space-y-4">
	<h2>Other tutors</h2>

	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
		{#each tutorsDummyData.splice(0, 4) as tutor}
			<TutorCard {tutor}></TutorCard>
		{/each}
	</div>
</section>
