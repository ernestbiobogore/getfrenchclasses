<script>
	import CourseCard from '$lib/components/ui/CourseCard.svelte';
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import { getSampleAvatars } from '$lib/utils';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let data;
	$: ({ allCourses } = data);

	console.log(data);
</script>

<section class="p-3 md:py-20 container-base text-center space-y-5">
	<h2 class="tracking-tight text-7xl">
		Courses to guide to you to a <br /> stronger financial future.
	</h2>
	<p>Explore our comprehensive range of financial courses</p>
</section>

<section class=" gap-8 container-base py-7">
	<div class="grid gap-8 grid-col-1 lg:grid-cols-3 lg:grid-row-2">
		{#each allCourses as course}
			<CourseCard {course} />
		{/each}
	</div>
</section>

<section class="container-base">
	<div class="p-12 m-auto space-y-5 bg-night rounded-2xl h-96 md:w-9/12">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
