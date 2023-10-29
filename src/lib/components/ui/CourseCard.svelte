<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import type { getAllCourses } from '$lib/graphql/queries/courses';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let course: Awaited<ReturnType<typeof getAllCourses>>[0];

	const getSampleAvatars = (n = 3) => {
		return Array.from({ length: n }, (_) => {
			const i = Math.floor(Math.random() * 100);

			return {
				src: `https://picsum.photos/100/100?random=${i + 1}`,
				alt: `Avatar ${i + 1}`
			};
		});
	};
</script>

<div class="p-8 space-y-4 bg-white rounded-2xl">
	<img
		src={course.seo?.image?.url}
		alt={course.seo?.image?.alt}
		width="310"
		height="210"
		loading="lazy"
		class="w-[22.5rem] h-[13.125rem] rounded-xl"
	/>

	<h3>{course.name}</h3>

	<div class="flex justify-between">
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

	<p>
		{course.seo?.description}
	</p>

	<p>
		<span class="text-2xl">$ {course.price} USD</span>
		<span class="text-sm text-gray-500">excl. taxes </span>
	</p>

	<div class="flex justify-between">
		<a href="/courses/{course.slug}" class="text-xs action-base w-fit">Read More</a>

		<div class="flex items-center gap-2">
			<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
			<p class="text-xs">{course.numberOfEnrolledStudents} enrolled.</p>
		</div>
	</div>
</div>
