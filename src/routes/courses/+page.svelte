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

<section class="grid gap-8 container-base py-7 lg:grid-cols-3 lg:grid-rows-2">
	{#each allCourses as course}
		<div class="flex flex-col-reverse bg-white rounded-2xl p-6 gap-3">
			<div class="space-y-5 md:basis-6/12">
				<div class="space-y-4">
					<h1 class="text-4xl tracking-tight">{course.name}</h1>

					<div class="flex justify-between md:w-3/4">
						<div class="flex items-center gap-2">
							<Clock class="w-4 h-4 stroke-gray-400" />
							<p class="text-xs text-gray-500">{course.duration} hours</p>
						</div>

						<div class="flex items-center gap-2">
							<PenSquare class="w-4 h-4 stroke-gray-400" />
							<p class="text-xs text-gray-500">{course.numberOfSections} sections</p>
						</div>

						<div class="flex items-center gap-2">
							<BarChart class="w-4 h-4 stroke-gray-400" />
							<p class="text-xs text-gray-500">{course.level} level</p>
						</div>
					</div>
				</div>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus in urna aliquam
					sollicitudin. Aliquam vehicula mi et magna dapibus maximus.
				</p>

				<div class="flex items-center gap-4">
					<a href="/courses/{course.slug}" class="text-xs action-base w-fit">Enroll Now</a>
					<p>
						<span class="text-2xl">$ {course.price} USD</span>
						<span class="text-sm text-gray-500">excl. taxes </span>
					</p>
				</div>

				<div class="flex items-center gap-2">
					<AvatarsGroup avatars={getSampleAvatars()} />
					<p class="text-xs">{course.numberOfEnrolledStudents} enrolled.</p>
				</div>
			</div>

			<div class="items-center justify-end md:flex md:basis-6/12">
				<img
					src={course.seo?.image?.url}
					alt={course.seo?.image?.alt}
					width="512"
					height="300"
					class="rounded-xl w-[32rem] h-[18.75rem] bg-purple-600"
				/>
			</div>
		</div>
	{/each}
</section>

<section class="container-base">
	<div class="p-12 m-auto space-y-5 bg-night rounded-2xl h-96 md:w-9/12">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
