<script lang="ts">
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import { getSampleAvatars } from '$lib/utils';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-8 md:flex-row md:gap-0 container-base">
	<div class="space-y-5 md:basis-6/12">
		<div class="space-y-4">
			<h1>{data.course.name}</h1>

			<div class="flex justify-between md:w-6/12">
				<div class="flex items-center gap-2">
					<Clock class="w-4 h-4 stroke-gray-400" />
					<p class="text-xs text-gray-500">{data.course.duration} hours</p>
				</div>

				<div class="flex items-center gap-2">
					<PenSquare class="w-4 h-4 stroke-gray-400" />
					<p class="text-xs text-gray-500">{data.course.numberOfSections} sections</p>
				</div>

				<div class="flex items-center gap-2">
					<BarChart class="w-4 h-4 stroke-gray-400" />
					<p class="text-xs text-gray-500">{data.course.level} level</p>
				</div>
			</div>
		</div>

		<p>{data.course.seo?.description}</p>

		<div class="flex items-center gap-4">
			<a href="/courses/{data.course.slug}" class="text-xs action-base w-fit">Enroll Now</a>
			<p>
				<span class="text-2xl">$ {data.course.price} USD</span>
				<span class="text-sm text-gray-500">excl. taxes </span>
			</p>
		</div>

		<div class="flex items-center gap-2">
			<AvatarsGroup avatars={getSampleAvatars()} />
			<p class="text-xs">{data.course.numberOfEnrolledStudents} enrolled.</p>
		</div>
	</div>

	<div class="items-center justify-end md:flex md:basis-6/12">
		<img
			src={data.course.seo?.image?.url}
			alt={data.course.seo?.image?.alt}
			width="512"
			height="300"
			class="rounded-xl w-[32rem] h-[18.75rem]"
		/>
	</div>
</section>
