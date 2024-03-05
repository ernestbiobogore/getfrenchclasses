<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import CompareCompetitors from "$lib/components/CompareCompetitors.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";
	import InternalLinks from "$lib/components/InternalLinks.svelte";
	import TestimonialCardList from "$lib/components/TestimonialCardList.svelte";
	import TestimonialCta, {
		dummyTestimonialCta,
	} from "$lib/components/cta-section/TestimonialCta.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";
	import { VideoPlayer } from "@datocms/svelte";
	import { cn } from "tailwind-variants";
	import PhArrowBendDownLeftFill from "~icons/ph/arrow-bend-down-left-fill";

	export let data;
	$: console.log(data);
</script>

<svelte:head>
	<title>{data.modularPage?.title} - GetFrenchClasses</title>
</svelte:head>

{#if data.modularPage?.modularContent && data.modularPage.modularContent.length > 0}
	{#each data.modularPage.modularContent as record (record.id)}
		{#if record.__typename === "HeroSectionRecord"}
			<section class="p-3 py-20 container-base">
				<div class="w-full mx-auto space-y-6 md:max-w-3xl">
					<h1>{record.heading?.heading}</h1>
					<p class="hero-subtitle">
						<StructuredText richText={record.heading?.subheading} />
					</p>

					{#if record.cta}
						<Button size="lg" href={record.cta.link} class="w-full">{record.cta.text}</Button>
					{/if}

					{#if record.testimonialPictures && record.testimonialPictures.length > 0}
						<div class="flex-s-center gap-4">
							<AvatarsGroup
								avatars={record.testimonialPictures.map(picture => ({
									src: String(picture.responsiveImage?.src),
									alt: String(picture.responsiveImage?.alt),
								}))}
							/>
							<p class="text-xs">{record.cta?.text}</p>
						</div>
					{/if}
				</div>
			</section>

			{#if record.video}
				<section class="container-sm max-w-3xl md:p-0">
					<div class="relative md:max-w-lg lg:max-w-xl">
						<VideoPlayer
							data={record.video.video}
							class="p-[0.375rem] bg-white shadow-2xl rounded-xl relative md:max-w-lg lg:max-w-xl"
						/>

						<div
							class="max-md:hidden absolute left-full top-1/2 -translate-y-[45%] h-[100px] w-[400px] flex items-center"
						>
							<div>
								<h3
									class="absolute text-center translate-x-[10px] -translate-y-[30px] max-w-[16ch] text-2xl italic"
								>
									{record.videoText}
								</h3>
								<PhArrowBendDownLeftFill class="text-[100px] text-[#3EAED0] rotate-[20deg]" />
							</div>
						</div>
					</div>
				</section>
			{/if}
		{/if}
	{/each}
{/if}

<!-- PATNER COMPANIES -->
<!-- <section class="bg-night mt-10">
	<div class="container-base py-20">
		<h2 class="text-center text-white">Read More About Us On:</h2>
		<div class="flex flex-wrap justify-center gap-8 mt-10">
			{#each dummyPatnerCompanies as company}
				<img
					src={company.logo?.url}
					alt={company.logo?.alt}
					class="w-full max-w-28 object-contain"
				/>
			{/each}
		</div>
	</div>
</section> -->

<!-- <div class="gap-8 container-base mt-20 pb-10 space-y-6">
	<h2 class="text-center">Popular Courses</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias numquam cupiditate soluta?
		Placeat accusamus iste eum deserunt explicabo. Quos!
	</p>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each popularCourses as course}
			<CourseCard {course} />
		{/each}
	</div>
</div> -->

<CompareCompetitors />

<!-- TARGET AUDIENCE -->
<!-- {#if homepageData?.targetAudiences && homepageData.targetAudiences.length > 0}
	<section class="container-base flex flex-col gap-6 py-20">
		<h2 class="text-center">{homepageData?.targetAudienceHeading?.heading}</h2>
		<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
			{@html homepageData?.targetAudienceHeading?.subheading}
		</p> -->

<!-- CARDS LIST -->
<!-- <div class="grid gap-6 max-md:max-w-sm max-md:mx-auto md:mt-8 md:grid-cols-2 lg:grid-cols-3"> -->
<!-- {#each homepageData.targetAudiences as info} -->
<!-- CARD -->
<!-- <div class="bg-white p-4 rounded-xl md:p-5"> -->
<!-- ICON -->
<!-- <div class="relative mb-2">
						<img src={info.media?.url} alt={info.media?.alt} class="w-12 h-12" />
					</div>

					<div class="font-semibold mb-2 text-lg">{info.title}</div>
					<StructuredText richText={info.content?.richText} />
				</div>
			{/each}
		</div>
	</section>
{/if} -->

<!-- <TestimonialCta {...dummyTestimonialCta} /> -->

<!-- <section class="container-base py-20">
	<TestimonialCardList />
</section> -->

<!-- HOW WE HELP YOU -->
<!-- <section class="container-base py-20 space-y-6">
	<h2 class="text-center">How GetFrenchClasses helps you</h2>
	<p class="text-center mb-10 max-w-[46ch] md:max-w-[64ch] mx-auto">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rerum sapiente nulla quasi
		assumenda.
	</p>

	<div class="max-md:max-w-sm max-md:mx-auto">
		{#each howWeHelpYou as item, i}
			<div
				class={cn(
					"flex flex-col max-md:gap-5 md:flex-row md:items-stretch",
					i % 2 !== 0 && "md:flex-row-reverse"
				)}
			>
				<div class="flex-1 flex-s-center">
					<div class="bg-red-400 lg:size-[400px]">
						<img
							class="object-cover object-center size-full"
							src="https://picsum.photos/200/300"
							alt=""
						/>
					</div>
				</div>

				<div class="flex-1 flex items-center">
					<div>
						<h3>{item.title}</h3>
						<br />
						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>

						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>

						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section> -->

<!-- WHY CHOOSE GFC -->
<!-- <section class="container-base py-20 flex flex-col gap-6">
	<h2 class="text-center">Why choose GetFrenchClasses</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias numquam cupiditate soluta?
		Placeat accusamus iste eum deserunt explicabo. Quos!
	</p>

	<div class="container-sm grid grid-cols-2 gap-8 sm:gap-16 lg:grid-cols-3">
		{#if homepageData && homepageData?.featureCards.length > 0}
			{#each homepageData.featureCards as card}
				<div class="space-y-4">
					{#if card.media?.url}
						<img src={card.media.url} alt={card.media.alt} loading="lazy" class="size-5" />
					{/if}

					<StructuredText richText={card.content?.richText} />
				</div>
			{/each}
		{/if}
	</div>
</section> -->

<!-- <TestimonialCta {...dummyTestimonialCta} />

<section class="container-base py-20 flex flex-col gap-6">
	<h2 class="text-center">How it works</h2>
	<p class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias numquam cupiditate soluta?
		Placeat accusamus iste eum deserunt explicabo. Quos!
	</p>

	<div class="max-md:max-w-sm max-md:mx-auto">
		{#each howWeHelpYou as item, i}
			<div
				class={cn(
					"flex flex-col max-md:gap-5 md:flex-row md:items-stretch",
					i % 2 !== 0 && "md:flex-row-reverse"
				)}
			>
				<div class="flex-1 flex-s-center">
					<div class="bg-red-400 lg:size-[400px]">
						<img
							class="object-cover object-center size-full"
							src="https://picsum.photos/200/300"
							alt=""
						/>
					</div>
				</div>

				<div class="flex-1 flex items-center">
					<div>
						<h3>{item.title}</h3>
						<br />
						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>

						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>

						<p>
							Excellent freelance writers are rare, expensive, busy, and not dedicated to your
							company.
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<TestimonialCta {...dummyTestimonialCta} />

<section class="py-20 text-center space-y-11 container-base" id="faq">
	<div class="space-y-5">
		<h2>{homepageData?.faqHeading[0].heading}</h2>

		<p class="mx-auto text-sm md:w-4/12">
			{@html homepageData?.faqHeading[0].subheading}
		</p>
	</div>

	{#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
		<div class="mx-auto md:w-6/12">
			<FaqAccordion
				faqs={homepageData.faq.faqBlocks.map(block => ({
					id: block.id,
					faq: {
						heading: block.faq?.heading || "",
						subheading: block.faq?.subheading || {},
					},
				}))}
			/>
		</div>
	{/if}
</section>

<TestimonialCta {...dummyTestimonialCta} />

<InternalLinks basePath="/tutors" sections={internalLinkSections} /> -->

<style>
	.hero-subtitle :global(p) {
		@apply text-lg md:text-2xl;
	}
</style>
