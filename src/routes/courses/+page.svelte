<script>
	import CourseCard from '$lib/components/ui/CourseCard.svelte';
	import { ChevronRight } from 'lucide-svelte';

	export let data;
	$: ({ homepageData } = data);
</script>

<section class="p-3 md:py-20 container-base text-center space-y-5">
	<h2 class="tracking-tight text-7xl">
		Courses to guide to you to a <br /> stronger financial future.
	</h2>
	<p>Explore our comprehensive range of financial courses</p>
</section>

{#if homepageData && homepageData?.popularCoursesRecords.length > 0}
	<section class="py-24 container-base space-y-11">
		<div class="flex items-center justify-between gap-x-7">
			<h2>{homepageData?.popularCoursesTitle}</h2>

			<a
				href="/courses"
				class="flex items-center justify-end w-4/12 gap-2 px-3 py-2 text-xs rounded-lg sm:w-auto hover:bg-gray-300"
			>
				<span>View All</span>
				<div class="p-[0.125rem] bg-gray-900 rounded-full">
					<ChevronRight class="w-3 h-3 stroke-white" />
				</div>
			</a>
		</div>

		<div class="grid gap-8 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
			{#each homepageData.popularCoursesRecords as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	</section>
{/if}

<section class="container-base">
	<div class="p-12 m-auto space-y-5 bg-night rounded-2xl h-96 md:w-9/12">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
