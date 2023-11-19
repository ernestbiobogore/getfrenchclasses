<script lang="ts">
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import CourseCard from '$lib/components/ui/CourseCard.svelte';
	import SupportImage from '$lib/images/supportImage.png';
	import { StructuredText } from '@datocms/svelte';

	import { ChevronRight } from 'lucide-svelte';

	export let data;
	$: ({ homepageData } = data);

	$: console.log(homepageData);
</script>

<svelte:head>
	<title>Get French Classes</title>
</svelte:head>

<!-- Hero -->
<section class="p-3 md:py-20 container-base">
	<div class="w-full mx-auto space-y-8 md:w-8/12">
		<h1 class="text-center">{homepageData?.heroTitle}</h1>
		<p class="w-full mx-auto text-center md:w-7/12">
			{@html homepageData?.heroSubtitle}
		</p>
		<div class="flex justify-center">
			<a href={homepageData?.heroCta[0].link} class="action-base w-fit"
				>{homepageData?.heroCta[0].text}</a
			>
		</div>

		<div class="flex items-center justify-center gap-4">
			<AvatarsGroup
				avatars={homepageData?.heroTestimonialPictures.map((picture) => ({
					src: picture.url,
					alt: String(picture.alt)
				}))}
			/>
			<p class="text-xs">{homepageData?.heroTestimonialTitle}</p>
		</div>
	</div>
</section>

<!-- Popular Courses -->
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

<!-- New Courses -->
{#if homepageData && homepageData?.newCoursesRecords.length > 0}
	<section class="py-24 container-base space-y-11">
		<div class="flex items-center justify-between gap-x-7">
			<h2>{homepageData?.newCoursesTitle}</h2>

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
			{#each homepageData.newCoursesRecords as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	</section>
{/if}

<!-- Features -->
<section class="py-24 space-y-11">
	<div class="space-y-5 container-base">
		<h2 class="text-center">{homepageData?.featuresHeading[0].heading}</h2>

		<p class="mx-auto text-sm text-center md:w-4/12">
			{@html homepageData?.featuresHeading[0].subheading}
		</p>

		<div class="flex justify-center">
			<a href={homepageData?.featuresCta[0].link} class="action-base w-fit"
				>{homepageData?.featuresCta[0].text}</a
			>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-3 container-sm">
		{#if homepageData && homepageData?.featureCards.length > 0}
			{#each homepageData.featureCards as card}
				<div class="space-y-4">
					<img src={card.image?.url} alt={card.image?.alt} loading="lazy" class="w-5 h-5" />
					<StructuredText data={card.content[0].richText} />
				</div>
			{/each}
		{/if}
	</div>
</section>

<!-- Learn About Us  -->
<section class="flex flex-col items-center justify-between gap-24 py-24 sm:flex-row container-base">
	<div class="flex flex-col gap-4 space-y-6">
		<div class="w-full space-y-5 md:max-w-1/2">
			<h2 class="md:tracking-tighter md:w-1/2">
				{homepageData?.singleTestimonial[0].title}
			</h2>

			<div class="md:w-8/12">
				<StructuredText data={homepageData?.singleTestimonial[0].content[0].richText} />
			</div>
		</div>

		<a href={homepageData?.singleTestimonial[0].cta[0].link} class="action-base w-fit">
			{homepageData?.singleTestimonial[0].cta[0].text}
		</a>
	</div>

	<div class="">
		<img src={SupportImage} alt="Support pic" loading="lazy" class="" />
	</div>
</section>

{#if homepageData && homepageData?.multipleTestimonials.length > 0}
	<section class="grid gap-16 py-24 sm:grid-cols-2 container-sm">
		{#each homepageData.multipleTestimonials as testimonial}
			<div class="flex flex-col gap-8 sm:flex-row">
				<div class="basis-6/12">
					<img src={testimonial.image?.url} alt={testimonial.image?.alt} />
				</div>

				<blockquote class="space-y-6 basis-6/12">
					<div class="space-y-5">
						<p class="text-2xl/[2.275rem] sm:text-[1.75rem]/[2.275rem] -tracking-[0.1rem]">
							{testimonial.title}
						</p>
						<p>
							<StructuredText data={testimonial.content[0].richText} />
						</p>
					</div>

					<footer>{testimonial.cta[0].text}</footer>
				</blockquote>
			</div>
		{/each}
	</section>
{/if}

<section class="flex flex-col items-center py-24 container-base space-y-11 md:flex-row">
	<div class="space-y-3 md:space-y-6 md:w-1/2">
		<h2 class="md:text-7xl md:tracking-tighter">
			{homepageData?.statsHeading?.[0]?.heading}
		</h2>
		<a href={homepageData?.statsAction[0].link} class="action-base w-fit md:text-base">
			{homepageData?.statsAction[0].text}
		</a>
	</div>

	{#if homepageData && homepageData?.statsData.length > 0}
		<div class="space-y-12">
			{#each homepageData.statsData as stat, i}
				<div
					class={`flex flex-row items-center justify-evenly ${
						i % 2 !== 0 ? 'flex-row-reverse' : ''
					} `}
				>
					<img
						class="w-5/12"
						src={homepageData.statsImages[i].url}
						alt={homepageData.statsImages[i].alt}
					/>
					<p>
						<span class="text-2xl">{stat.heading}</span>
						{@html stat.subheading}
					</p>
				</div>
			{/each}
		</div>
	{/if}
</section>

<!-- FAQ -->
<section class="py-24 text-center space-y-11 container-base">
	<div class="space-y-5">
		<h2>You have questions, we have the answers.</h2>

		<p class="mx-auto text-sm md:w-4/12">
			If you can’t find the answer to your question below, please get in
			<a class="underline" href="/">contact</a> with us today
		</p>
	</div>

	<div class="mx-auto md:w-6/12">
		<Accordion
			itemIds={Array.from({ length: 7 }, (_, i) => `item-${i + 1}`)}
			titles={Array.from(
				{ length: 7 },
				(_) => `Lorem ipsum dolor sit amet consectetur. Fermentum.`
			)}
			contents={Array.from(
				{ length: 7 },
				(_) => `Lorem ipsum dolor sit amet consectetur. Bibendum in ultrices ornare ut. Mattis nisl`
			)}
		/>
	</div>
</section>

<!-- CTA -->
<section class="container-base">
	<div class="p-12 m-auto space-y-5 bg-night rounded-2xl h-96 md:w-9/12">
		<h2 class="text-white text-[2.75rem]/[3.3rem] sm:w-5/12">
			Empower your financial future, today.
		</h2>
		<a href="/" class="action-white w-fit">View our courses</a>
	</div>
</section>
