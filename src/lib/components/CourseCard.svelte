<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import type { getAllCourses } from "$lib/graphql/queries/courses";
	import { getSampleAvatars } from "$lib/utils";
	import Clock from "~icons/lucide/clock";
	import PenSquare from "~icons/lucide/pen-square";
	import BarChart from "~icons/lucide/bar-chart";

	export let course: Awaited<ReturnType<typeof getAllCourses>>[number];
	const updatedCourse = {
		...course,
		seo: course.seo[0]?.seoBlock,
	};
</script>

<div class="p-8 flex flex-col gap-y-4 bg-white rounded-2xl">
	<img
		src={updatedCourse.seo?.image?.url}
		alt={updatedCourse.seo?.image?.alt}
		width="310"
		height="210"
		loading="lazy"
		class="w-[22.5rem] h-[13.125rem] rounded-xl bg-purple-600"
	/>

	<h3>
		<a href="/courses/{updatedCourse.slug}" class="hover:underline">{updatedCourse.name}</a>
	</h3>

	<div class="flex-s-between">
		<div class="flex-s-center gap-2">
			<Clock class="text-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.duration} hours</p>
		</div>

		<div class="flex-s-center gap-2">
			<PenSquare class="text-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.numberOfSections} sections</p>
		</div>

		<div class="flex-s-center gap-2">
			<BarChart class="text-gray-400" />
			<p class="text-xs text-gray-500">{updatedCourse.level} level</p>
		</div>
	</div>

	<p>
		{updatedCourse.seo?.description}
	</p>

	<div class="text-2xl mt-auto">$ {updatedCourse.price} USD</div>

	<div class="flex justify-between">
		<a href="/courses/{updatedCourse.slug}" class="text-xs action-base w-fit">Read More</a>

		<div class="flex items-center gap-2">
			<AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
			<p class="text-xs">{updatedCourse.numberOfEnrolledStudents} enrolled.</p>
		</div>
	</div>
</div>
