<script lang="ts">
	import CourseCard from "$lib/components/CourseCard.svelte";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import { Badge } from "$shadcn/badge";
	import SharpVerifired from "~icons/ic/sharp-verified";
	import VideoCam from "~icons/material-symbols/videocam-outline-rounded";
	import { tutorsDummyData } from "../+page.svelte";
	import TutorCard from "../TutorCard.svelte";

	export let data;

	const tutor = tutorsDummyData[0];
</script>

<section
	class="flex flex-col-reverse justify-between gap-10 py-8 container-base md-gap-24 md:flex-row lg:py-20"
>
	<!-- LEFT SIDE -->
	<div class="flex flex-col flex-1 gap-10">
		<div class="space-y-5">
			<div class="gap-4 py-4 overflow-x-scroll flex-s-start">
				{#each [...Array(5)] as _}
					<Badge class="px-5 py-1.5" variant="secondary">French</Badge>
				{/each}
			</div>

			<h1>French lessons with a native speaker with 40+ years of experience</h1>

			<p class="text-2xl font-medium">Lesson Location</p>

			<div class="gap-2 px-5 py-2 border rounded-full border-primary inline-flex-s-center">
				<VideoCam class="text-lg" />
				<span class="text-sm font-medium">Online</span>
			</div>

			<div class="p-4 bg-pink-200 rounded-xl">
				<div class="gap-2 mb-2 text-2xl flex-s-start">
					<SharpVerifired />
					<span class="font-bold text-">Verified</span>
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
				{#each data.allCourses as course}
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

		<section class="py-20 space-y-12 lg:w-2/3">
			<Heading defaultHeading="Find more about {tutor.name}" useDefaultHeading />
			<FAQItems items={data.homeFaqBlocks} />
		</section>
	</div>

	<!-- RIGHT SIDE -->
	<div class="md:flex-[0.7] lg:flex-[0.5] relative">
		<div class="sticky top-[5.75rem]">
			<TutorCard {tutor} withVerifiedBadge withCTA />
		</div>
	</div>
</section>

<section class="space-y-4 container-base">
	<h2>Other tutors</h2>

	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
		{#each tutorsDummyData.splice(0, 4) as tutor}
			<TutorCard {tutor}></TutorCard>
		{/each}
	</div>
</section>
