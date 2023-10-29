<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import type { getAllCourses } from '$lib/graphql/queries/courses';
	import { getSampleAvatars } from '$lib/utils';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let course: Awaited<ReturnType<typeof getAllCourses>>[0];
	const updatedCourse = {
		...course,
		seo: course.seo[0].seoBlock
	}
</script>

<div class="p-8 space-y-4 bg-white rounded-2xl">
	<img
		src={updatedCourse.seo?.image?.url}
		alt={updatedCourse.seo?.image?.alt}
		width="310"
		height="210"
		loading="lazy"
		class="w-[22.5rem] h-[13.125rem] rounded-xl"
	/>

	<h3>
		<a href="/courses/{updatedCourse.slug}" class="hover:underline">{updatedCourse.name}</a>
	</h3>

	<div class="flex justify-between">
		<div class="flex items-center gap-2">
			<Clock class="w-4 h-4 stroke-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.duration} hours</p>
		</div>

		<div class="flex items-center gap-2">
			<PenSquare class="w-4 h-4 stroke-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.numberOfSections} sections</p>
		</div>

		<div class="flex items-center gap-2">
			<BarChart class="w-4 h-4 stroke-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.level} level</p>
		</div>
	</div>

	<p>
		{updatedCourse.seo?.description}
	</p>

	<p>
		<span class="text-2xl">$ {updatedCourse.price} USD</span>
		<span class="text-sm text-gray-500">excl. taxes </span>
	</p>

	<div class="flex justify-between">
		<a href="/courses/{updatedCourse.slug}" class="text-xs action-base w-fit">Read More</a>

		<div class="flex items-center gap-2">
			<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
			<p class="text-xs">{updatedCourse.numberOfEnrolledStudents} enrolled.</p>
		</div>
	</div>
</div>
