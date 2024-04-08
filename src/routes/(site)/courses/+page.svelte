<script>
	import CourseCard from "$lib/components/CourseCard.svelte";
	import CustomMultiselect from "$lib/components/CustomMultiselect.svelte";
	import CtaTestimonial from "$lib/components/dato/blocks/CtaTestimonial.svelte";
	import CourseSectionDivider from "./CourseSectionDivider.svelte";

	export let data;
	$: ({ allCoursesMetas } = data);

	const filterOptions = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		bundles: [{ value: "starter", label: "Starter" }],
	};
</script>

<svelte:head>
	<title>All our Courses - GetFrenchClasses</title>
</svelte:head>

<section class="container-base p-3 space-y-5 md:py-20 md:text-center">
	<h1>
		Courses to guide to you to a <br /> stronger financial future.
	</h1>
	<p>Explore our comprehensive range of financial courses</p>

	<div class="max-w-3xl mx-auto">
		<!-- CTA BUTTON -->
		<a href={"/"} class="action-base w-full text-base md:text-lg"
			>Take a language assessment course</a
		>
	</div>
</section>

<section class="container-base pt-10">
	<CustomMultiselect placeholder="Filter by Level or Bundle" options={filterOptions} />
</section>

<section class="container-base py-20">
	<CourseSectionDivider label="Beginner" />

	<div class="gap-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCoursesMetas as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

<section class="container-base py-20">
	<CourseSectionDivider label="Advanced" />

	<div class="gap-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCoursesMetas as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

{#if data.testimonial}
	{#if data.testimonial.__typename === "TestimonialBlockCtaRecord"}
		<section class="container-base py-20">
			<CtaTestimonial testimonial={data.testimonial} />
		</section>
	{/if}
{/if}
