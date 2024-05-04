<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import CtaTestimonial from "$dato/blocks/CtaTestimonial.svelte";
	import DefaultTestimonial from "$dato/blocks/DefaultTestimonial.svelte";
	import FAQItems from "$dato/blocks/FAQItems.svelte";
	import Heading from "$dato/blocks/Heading.svelte";
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import CourseCtaBanner from "$lib/components/cta-section/CourseCtaBanner.svelte";
	import type {
		TestimonialBlockCtaRecord,
		TestimonialBlockDefaultRecord,
	} from "$lib/graphql/generated";
	import { Button } from "$shadcn/button";
	import { Image } from "@unpic/svelte";
	import BarChart from "~icons/lucide/bar-chart";
	import Check from "~icons/lucide/check";
	import Clock from "~icons/lucide/clock";
	import PenSquare from "~icons/lucide/pen-square";
	import CTA from "./components/CTA.svelte";
	import CourseSyllabus from "./components/CourseSyllabus.svelte";

	export let data;

	$: course = data.course;
	$: defaultTestimonials = course.testimonials
		.map(({ testimonial }) => testimonial)
		.filter(testimonial => testimonial.__typename === "TestimonialBlockDefaultRecord") as
		| TestimonialBlockDefaultRecord[]
		| undefined;
	$: ctaTestimonials = course.testimonials
		.map(({ testimonial }) => testimonial)
		.filter(testimonial => testimonial.__typename === "TestimonialBlockCtaRecord") as
		| TestimonialBlockCtaRecord[]
		| undefined;
</script>

<svelte:head>
	<title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-24 py-8 md:flex-row container-base">
	<!-- LEFT SIDE -->
	<div class="flex-1 space-y-5">
		<div class="space-y-4">
			<h1>{data.course.name}</h1>

			<div class="gap-4 flex-s-between md:justify-start">
				<div class="gap-2 flex-s-center">
					<Clock class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.duration} hours</p>
				</div>

				<div class="gap-2 flex-s-center">
					<PenSquare class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.numberOfSections} sections</p>
				</div>

				<div class="gap-2 flex-s-center">
					<BarChart class="text-gray-400" />
					<p class="text-xs text-gray-500">{data.course.level} level</p>
				</div>
			</div>
		</div>

		<p>{data.course.seo[0].seoBlock?.description}</p>

		<Button href="/course/{data.course.slug}" variant="brand">Enroll Now</Button>

		<!-- INSTRUCTORS -->
		<div class="py-5">
			<div class="mb-2 text-xs text-gray-500 uppercase">Hosted By</div>

			<div
				class="grid w-full gap-4"
				style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));"
			>
				{#each course.instructors as instructor (instructor.id)}
					<div class="gap-3 flex-s-start">
						{#if instructor.profilePicture?.responsiveImage?.src}
							<Image
								src={instructor.profilePicture.responsiveImage.src}
								alt={instructor.profilePicture.responsiveImage.alt}
								layout="constrained"
								width={64}
								aspectRatio={1}
								background={instructor.profilePicture.responsiveImage.base64 ||
									instructor.profilePicture.responsiveImage.bgColor ||
									"auto"}
								class="rounded-xl"
							/>
						{/if}

						<div class="flex-1">
							<p class="font-semibold">{instructor.name}</p>
							<p class="text-sm max-w-[46ch]">
								{instructor.summary}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		{#if course.targetAudience && course.targetAudience.length > 0}
			<!-- WHO THE COURSE IS FOR -->
			<div class="py-5">
				<Heading
					heading={course.targetAudienceHeading}
					useDefaultHeading={!course.targetAudienceHeading}
					defaultHeading="Who is this course for?"
					class="text-left"
				/>

				<br />

				<!-- CARDS -->
				<div class="grid gap-4 sm:grid-cols-2">
					{#each course.targetAudience as audience, i}
						<div class="flex flex-col gap-3 p-4 border border-gray-400 rounded-lg">
							<div class="bg-white text-gray-800 size-[40px] rounded-full flex-s-center">
								0{i + 1}
							</div>

							{#if audience.heading}
								<Heading
									heading={audience.heading}
									class="text-left font-semibold text-base"
									contentClass="text-left"
									titleTag="p"
								/>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if course.outcomes && course.outcomes.length > 0}
			<!-- WHAT YOU'LL GET -->
			<div class="py-5">
				<Heading
					heading={course.outcomesHeading}
					useDefaultHeading={!course.outcomesHeading}
					defaultHeading="What you'll get"
					class="text-left"
				/>

				<br />

				<!-- CARDS -->
				<div class="flex flex-col max-w-2xl gap-4">
					{#each course.outcomes as outcome (outcome.id)}
						<div class="flex-s-start-start">
							<div>
								<div class="bg-green-600 size-[20px] text-white rounded-full flex-s-center">
									<Check />
								</div>
							</div>

							{#if outcome.heading}
								<div class="ml-3">
									<Heading
										heading={outcome.heading}
										class="text-left font-semibold text-base"
										contentClass="text-left"
										titleTag="p"
									/>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if course.contentList && course.contentList.length > 0}
			<!-- THIS COURSE INCLUDES -->
			<div class="py-5">
				<Heading
					heading={course.contentListHeading}
					useDefaultHeading={!course.contentListHeading}
					defaultHeading="This course includes"
					class="text-left"
				/>

				<br />

				<!-- CARDS -->
				<div class="grid max-w-2xl gap-4 md:grid-cols-2">
					{#each course.contentList as content (content.id)}
						{#if content.heading}
							<div class="gap-2 flex-s-start items-center">
								{#if content.media?.format === "svg"}
									<img src={content.media.url} alt={content.media.alt} class="w-4 h-4" />
								{:else if content.media?.responsiveImage}
									<Image
										src={content.media.responsiveImage?.src || content.media.url}
										alt={content.media.responsiveImage?.alt}
										layout="constrained"
										width={16}
										aspectRatio={1}
										background={content.media.responsiveImage?.base64 ||
											content.media.responsiveImage?.bgColor ||
											"auto"}
									/>
								{/if}

								<Heading
									heading={content.heading}
									class="text-left text-base"
									contentClass="text-left"
									titleTag="p"
								/>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<CTA {data} />
</section>

<CourseSyllabus />

{#if data.course.testimonials && data.course.testimonials.length > 0}
	<section class="py-20 container-base space-y-8">
		<h2 class="text-center">What people say</h2>

		{#if course.testimonials && course.testimonials.length > 0}
			<div class="space-y-12">
				{#if ctaTestimonials && ctaTestimonials.length > 0}
					<div class="flex flex-col gap-4">
						{#each ctaTestimonials as testimonial}
							<CtaTestimonial {testimonial} />
						{/each}
					</div>
				{/if}

				{#if defaultTestimonials && defaultTestimonials.length > 0}
					<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{#each defaultTestimonials as testimonial}
							<DefaultTestimonial {testimonial} />
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</section>
{/if}

{#if course.ctaBannerTitle && course.ctaBannerButton && course.ctaBannerImages && course.ctaBannerMidActions}
	<CourseCtaBanner
		title={course.ctaBannerTitle}
		midActions={course.ctaBannerMidActions}
		cta={course.ctaBannerButton}
		heroImages={course.ctaBannerImages}
	/>
{/if}

<!-- INSTRUCTOR BIO -->
<section class="py-20 container-base space-y-4">
	<Heading
		heading={course.instructorsHeading}
		useDefaultHeading={!course.instructorsHeading}
		defaultHeading="Meet your instructors"
	/>

	<br />

	<div class="space-y-4">
		{#each course.instructors as instructor (instructor.id)}
			<div
				class="w-full max-w-2xl gap-4 mx-auto max-md:space-y-4 md:flex-s-start not-last:mb-6"
				id="instructor"
			>
				<div class="">
					{#if instructor?.profilePicture?.responsiveImage}
						<img
							src={instructor.profilePicture.responsiveImage.src}
							alt={instructor.profilePicture.responsiveImage.alt}
							height="300"
							width="250"
							class="rounded-xl"
						/>
					{/if}
				</div>

				<div class="flex-1">
					<div class="mb-2 text-lg font-semibold">{instructor.name}</div>
					<StructuredText class="flex flex-col gap-4" richText={instructor.about} />
				</div>
			</div>
		{/each}
	</div>
</section>

{#if course.tutors && course.tutors.length > 0}
	<section class="py-20 container-base space-y-4">
		<Heading
			heading={course.tutorsHeading}
			useDefaultHeading={!course.tutorsHeading}
			defaultHeading="Your tutors"
		/>

		<br />

		<div class="grid gap-6 sm:grid-cols-3">
			{#each course.tutors as tutor (tutor.id)}
				<TutorCard {tutor} withCTA />
			{/each}
		</div>

		<div class="py-10 flex-s-center">
			<Button href="/tutors" variant="brand">See More</Button>
		</div>
	</section>
{/if}

<section class="max-w-2xl px-4 mx-auto my-12">
	<h2 class="mb-6 text-3xl font-bold text-center">Course schedule</h2>
	<div class="flex items-center justify-center mb-4">
		<Clock class="mr-2 text-gray-500" />
		<span class="text-gray-500">3-4 hours per week</span>
	</div>

	<div class="pl-4 border-l-2 border-gray-400 border-dashed">
		<h3 class="mt-4 mb-2 text-xl font-semibold">Office hours</h3>
		<p class="mb-2 text-gray-700">
			<strong>Wednesdays or Fridays</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Join Femke and course alumni mentors once a week on Wednesday's or Friday's for live sessions
			to get your burning questions answered while working through worksheets with your peers.
		</p>
		<p class="mb-4 text-gray-700">Sessions will run at Europe & North America friendly times.</p>
		<h3 class="mt-4 mb-2 text-xl font-semibold">Self-paced modules</h3>
		<p class="mb-2 text-gray-700">
			<strong>2 hours per week</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Work through 2 modules a week with an accompanying video. This format was created to ensure
			you understand concepts, and provide you with tools to implement what you learned as a next
			step.
		</p>
		<h3 class="mt-4 mb-2 text-xl font-semibold">Resources, templates & worksheets</h3>
		<p class="mb-2 text-gray-700">
			<strong>2 hours per week</strong>
		</p>
		<p class="mb-4 text-gray-700">
			Tried and true templates, resources and worksheets you can use at work to advocate for your
			ideas, feel empowered to have strategic influence within your team and get included in product
			strategy conversations.
		</p>
	</div>
</section>

{#if ctaTestimonials && ctaTestimonials.length > 0}
	<section class="py-20 space-y-12 container-base">
		<CtaTestimonial testimonial={ctaTestimonials[0]} />
	</section>
{/if}

{#if data.course.faq?.faqBlocks && data.course.faq?.faqBlocks.length > 0}
	<section class="max-w-2xl py-10 mx-auto space-y-12" id="faq">
		<Heading defaultHeading="Frequently Asked Questions" useDefaultHeading />
		<FAQItems items={data.course.faq} />
	</section>
{/if}
