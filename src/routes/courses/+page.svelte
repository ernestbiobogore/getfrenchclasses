<script>
	import CourseCard from "$lib/components/CourseCard.svelte";
	import Circle1 from "$lib/images/circle1.png";
	import Circle2 from "$lib/images/circle2.png";
	import Triangle from "$lib/images/triangle.png";
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

<section class="container-base relative">
	<div class=" m-auto space-y-5 bg-night rounded-2xl h-96 w-full">
		<div class="p-12 flex flex-col gap-10 md:p-8 md:w-34rem">
			<h2 class="w-full text-white text-2xl sm:break-words sm:w-5/12 md:text-[2.75rem]/[3.3rem]">
				Empower your financial future, today.
			</h2>
			<a href="/" class="action-white w-fit">View our courses</a>
		</div>
		<img
			src={Circle1}
			alt="Circle 1"
			class="absolute size-16 bottom-3 left-20 md:left-[28rem] md:top-20 md:size-20 lg:left-[50rem]"
		/>
		<img
			src={Circle2}
			alt="Circle 2"
			class="absolute size-20 bottom-28 right-24 md:top-48 md:right-36 md:s-28 lg:right-48 lg:top-40"
		/>
		<img
			src={Triangle}
			alt="Triangle"
			class="absolute w-24 h-28 bottom-0 right-4 md:s-40 md:right-4"
		/>
	</div>
</section>
