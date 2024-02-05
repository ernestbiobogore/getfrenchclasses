<script>
	import CourseCard from "$lib/components/CourseCard.svelte";
	import GenericCta from "$lib/components/cta-section/GenericCta.svelte";
	import CourseSectionDivider from "./CourseSectionDivider.svelte";
	import FilterCourses from "./FilterCourses.svelte";

	export let data;
	$: ({ allCourses } = data);
</script>

<svelte:head>
	<title>All our Courses - GetFrenchClasses</title>
</svelte:head>

<section class="p-3 md:py-20 container-base md:text-center space-y-5">
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
	<FilterCourses />
</section>

<section>
	<CourseSectionDivider label="Beginner" />

	<div class="gap-8 container-base">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCourses as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

<section>
	<CourseSectionDivider label="Advanced" />

	<div class="gap-8 container-base">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCourses as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

<br /><br />

<GenericCta />
