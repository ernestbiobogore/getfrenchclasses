<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import type { getAllCoursesMetas } from "$lib/graphql/queries/courses";
	import { getSampleAvatars } from "$lib/utils";
	import BarChart from "~icons/lucide/bar-chart";
	import Clock from "~icons/lucide/clock";
	import PenSquare from "~icons/lucide/pen-square";
	import { Button } from "$shadcn/button";

	export let course: Awaited<ReturnType<typeof getAllCoursesMetas>>[number];
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
		<a href="/course/{updatedCourse.slug}" class="hover:underline">{updatedCourse.name}</a>
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

	<div class="flex flex-col gap-4">
		<Button href="/course/{updatedCourse.slug}" variant="brand">Read More</Button>

		<div class="flex items-center justify-center">
			{#if updatedCourse.enrolledStudents?.images && updatedCourse.enrolledStudents.images.length > 0}
				{@const avatars = updatedCourse.enrolledStudents.images.map(image => ({
					src: String(image.responsiveImage?.src),
					alt: String(image.responsiveImage?.alt),
				}))}
				<div class="flex items-center gap-1">
					<AvatarsGroup {avatars} size={30} />

					<p class="text-xs">
						{updatedCourse.enrolledStudents.description ||
							updatedCourse.numberOfEnrolledStudents + "enrolled."}
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
