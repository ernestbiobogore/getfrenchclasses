<script lang="ts">
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import AvatarsGroup from '$lib/components/ui/AvatarsGroup.svelte';
	import Menu from '$lib/components/ui/Menu.svelte';
	import { getSampleAvatars } from '$lib/utils';
	import { StructuredText } from '@datocms/svelte';
	import { BarChart, Clock, PenSquare } from 'lucide-svelte';

	export let data;
	$: ({ homepageData } = data);
	$: coursesPageFaq = homepageData?.faq?.faqBlocks.slice(0, 5)
</script>

<svelte:head>
	<title>{data.course.name}</title>
</svelte:head>

<section class="flex flex-col justify-between gap-8 md:flex-row md:gap-0 container-base">
	<div class="space-y-5 md:basis-6/12">
		<div class="space-y-4">
			<h1 class="text-4xl tracking-tighter">{data.course.name}</h1>

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

<section class="py-32 container-base space-y-11 flex flex-col md:flex-row items-start">
	<div class="basis-1/2">
		<Menu />
	</div>

	<div class=" text-center space-y-11 md:basis-1/2" id="faq">
		<div class="space-y-5">
			<h2>{homepageData?.faqHeading[0].heading}</h2>

			<p class="mx-auto text-sm md:w-4/12">
				{@html homepageData?.faqHeading[0].subheading}
			</p>
		</div>

		{#if coursesPageFaq && coursesPageFaq.length > 0}
			<div class="mx-auto md:w-6/12">
				<Accordion
					itemIds={coursesPageFaq.map((faq) => faq.id)}
					titles={coursesPageFaq.map((faq) => faq.question || '')}
					richTexts={coursesPageFaq.map((faq) => faq.answer[0].richText)}
				/>
			</div>
		{/if}
	</div>
</section>
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
