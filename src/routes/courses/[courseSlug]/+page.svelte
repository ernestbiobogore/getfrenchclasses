<script lang="ts">
	import SingleourseTabs from '$lib/components/section/SingleCourseTabs.svelte';
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import { getSampleAvatars } from '$lib/utils';
	import { StructuredText } from '@datocms/svelte';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let data;
	$: coursesPageFaq = data.course.faq?.faqBlocks;
</script>

<svelte:head>
	<title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-24 md:flex-row container-base">
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

<section class="flex flex-col items-start gap-24 py-32 container-base space-y-11 md:flex-row">
	<div class="basis-1/2">
		<SingleourseTabs />
	</div>

	<div class="text-center space-y-11 md:basis-1/2" id="faq">
		{#if coursesPageFaq && coursesPageFaq.length > 0}
			<Accordion
				itemIds={coursesPageFaq.map((faq) => faq.id)}
				titles={coursesPageFaq.map((faq) => faq.question || '')}
				richTexts={coursesPageFaq.map((faq) => faq.answer[0].richText)}
			/>
		{/if}
	</div>
</section>

<section class="grid grid-cols-2 gap-8 py-24 sm:gap-16 lg:grid-cols-3 container-sm">
	{#each data.course.featuresCards as card}
		<div class="space-y-4">
			<img src={card.image?.url} alt={card.image?.alt} loading="lazy" class="w-5 h-5" />
			<StructuredText data={card.content[0].richText} />
		</div>
	{/each}
</section>

{#if data.course.singleTestimonial.length > 0}
	<section class="flex flex-col items-center gap-20 sm:px-12 container-sm py-36 sm:flex-row">
		<div class="basis-6/12">
			<img
				src={data.course.singleTestimonial[0].image?.url}
				alt={data.course.singleTestimonial[0].image?.alt}
			/>
		</div>

		<div class="space-y-5 basis-6/12">
			<h3>{data.course.singleTestimonial[0].title}</h3>
			<StructuredText data={data.course?.singleTestimonial[0].content[0].richText} />
			<div>
				<p>{data.course.singleTestimonial[0].author}</p>
				<p class="text-xs font-semibold text-savoy-blue">
					{data.course.singleTestimonial[0].company}
				</p>
			</div>
		</div>
	</section>
{/if}
