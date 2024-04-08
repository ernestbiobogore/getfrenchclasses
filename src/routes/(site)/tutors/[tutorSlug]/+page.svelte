<script lang="ts">
	import CourseCard from "$lib/components/CourseCard.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import DefaultTestimonial from "$lib/components/dato/blocks/DefaultTestimonial.svelte";
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import SharpVerifired from "~icons/ic/sharp-verified";
	import VideoCam from "~icons/material-symbols/videocam-outline-rounded";
	import TutorCard from "../TutorCard.svelte";
	import { DEFAULT_VERIFIED_DESCRIPTION, deSlugify } from "../utils.client";

	export let data;
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
			<h1>{data.tutor.summary}</h1>

			<p class="text-2xl font-medium">{data.tutor.location}</p>

			<div class="gap-2 px-5 py-2 border rounded-full border-primary inline-flex-s-center">
				<VideoCam class="text-lg" />
				<span class="text-sm font-medium"
					>{data.tutor.remoteStatus.map(status => deSlugify(status)).join(", ")}</span
				>
			</div>

			{#if data.tutor.verified}
				<div class="p-4 bg-indigo-600 rounded-xl">
					<div class="gap-2 mb-2 text-2xl flex-s-start">
						<SharpVerifired class="text-white" />
						<span class="font-bold text-white">Verified</span>
					</div>

					{#if data.tutor.verifiedDescription}
						<StructuredText
							richText={data.tutor.verifiedDescription}
							class="text-white"
							elementClasses={{
								p: "text-sm font-medium",
							}}
						/>
					{:else}
						<p class="text-sm font-medium text-white">
							{DEFAULT_VERIFIED_DESCRIPTION}
						</p>
					{/if}
				</div>
			{/if}
		</div>

		<div>
			<h2>About {data.tutor.name}</h2>
			<StructuredText richText={data.tutor.about} />
		</div>

		<!-- TODO: GET CLARIFICATION -->
		<div class="space-y-4">
			<h2>{data.tutor.qualifiedCoursesTitle}</h2>

			<div class="grid gap-8 md:grid-cols-2">
				{#each data.tutor.qualifiedCourses as course}
					<CourseCard {course} />
				{/each}
			</div>
		</div>

		{#if data.tutor.reviews && data.tutor.reviews.length > 0}
			<div class="space-y-4">
				<h2>{data.tutor.reviewsTitle}</h2>

				<div class="grid grid-cols-2 gap-8">
					{#each data.tutor.reviews as { testimonial } (testimonial.id)}
						{#if testimonial.__typename === "TestimonialBlockDefaultRecord"}
							<DefaultTestimonial {testimonial} />
						{/if}
					{/each}
				</div>
			</div>
		{/if}

		<section class="py-20 space-y-12 lg:w-2/3">
			<Heading
				defaultHeading={data.tutor.faqTitle || "Find more about {data.tutor.name}"}
				useDefaultHeading
				class="text-left"
			/>
			<FAQItems items={data.tutor.faq} />
		</section>
	</div>

	<!-- RIGHT SIDE -->
	<div class="md:flex-[0.7] lg:flex-[0.5] relative">
		<div class="sticky top-[5.75rem]">
			<TutorCard tutor={data.tutor} withCTA />
		</div>
	</div>
</section>

{#if data.tutor.otherTutors && data.tutor.otherTutors.length > 0}
	<section class="space-y-4 container-base">
		<h2>Other tutors</h2>

		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
			{#each data.tutor.otherTutors as tutor}
				<TutorCard {tutor}></TutorCard>
			{/each}
		</div>
	</section>
{/if}
