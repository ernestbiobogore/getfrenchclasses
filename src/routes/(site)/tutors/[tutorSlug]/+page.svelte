<script lang="ts">
	import CourseCard from "$lib/components/CourseCard.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import DefaultTestimonial from "$lib/components/dato/blocks/DefaultTestimonial.svelte";
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import { Badge } from "$shadcn/badge";
	import SharpVerifired from "~icons/ic/sharp-verified";
	import VideoCam from "~icons/material-symbols/videocam-outline-rounded";
	import TutorCard from "../TutorCard.svelte";
	import { deSlugify } from "../utils.client";

	export let data;
	$: allTutorsMeta = data.tutorsMetas;
	$: otherTutors = allTutorsMeta.filter(tutor => tutor.slug !== data.tutor.slug);
</script>

<svelte:head>
	<title>{data.tutor.name} - Tutors - GetFrenchClasses</title>
	<meta name="description" content={data.tutor.summary} />
</svelte:head>

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

			<h1>{data.tutor.summary}</h1>

			<p class="text-2xl font-medium">{data.tutor.location}</p>

			<div class="gap-2 px-5 py-2 border rounded-full border-primary inline-flex-s-center">
				<VideoCam class="text-lg" />
				<span class="text-sm font-medium"
					>{data.tutor.remoteStatus.map(status => deSlugify(status)).join(", ")}</span
				>
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
			<h2>About {data.tutor.name}</h2>
			<StructuredText richText={data.tutor.about} />
		</div>

		<!-- TODO: GET CLARIFICATION -->
		<div class="space-y-4">
			<h2>Qualified to teach</h2>

			<div class="grid gap-8 md:grid-cols-2">
				{#each data.tutor.qualifiedCourses as course}
					<CourseCard {course} />
				{/each}
			</div>
		</div>

		{#if data.tutor.reviews && data.tutor.reviews.length > 0}
			<div class="space-y-4">
				<h2>Reviews</h2>

				<div class="grid gap-8 py-20 md:grid-cols-2">
					{#each data.tutor.reviews as testimonial (testimonial.id)}
						<DefaultTestimonial {testimonial} />
					{/each}
				</div>
			</div>
		{/if}

		<section class="py-20 space-y-12 lg:w-2/3">
			<Heading defaultHeading="Find more about {data.tutor.name}" useDefaultHeading />
			<FAQItems items={data.tutor.faq} />
		</section>
	</div>

	<!-- RIGHT SIDE -->
	<div class="md:flex-[0.7] lg:flex-[0.5] relative">
		<div class="sticky top-[5.75rem]">
			<TutorCard tutor={data.tutor} withVerifiedBadge withCTA />
		</div>
	</div>
</section>

{#if otherTutors && otherTutors.length > 0}
	<section class="space-y-4 container-base">
		<h2>Other tutors</h2>

		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
			{#each otherTutors.splice(0, 4) as tutor}
				<TutorCard {tutor}></TutorCard>
			{/each}
		</div>
	</section>
{/if}
