<script lang="ts">
	import Video from "$dato/blocks/Video.svelte";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import ImageWithCallout from "$lib/components/ImageWithCallout.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";
	import type { HeroSectionRecord } from "$lib/graphql/generated";
	import PhArrowBendDownLeftFill from "~icons/ph/arrow-bend-down-left-fill";

	export let record: HeroSectionRecord;

	$: heroImages = record.heroImages;
</script>

<section class="relative z-1 max-w-[1500px] mx-auto">
	<!-- IMAGES ON EACH END OF THE HERO SECTION -->
	{#if heroImages && heroImages.length > 0}
		<div class="max-lg:hidden absolute inset-0 flex-s-between">
			<div class="grid-areas grid justify-items-center gap-x-8 grid-cols-2">
				<div class="flex-s-center">
					<ImageWithCallout
						responsiveImage={heroImages[0].image?.responsiveImage}
						imageText={heroImages[0].text}
						class="bottom-full -translate-x-1/2 left-1/2 text-center"
					/>
				</div>
				<div></div>

				<ImageWithCallout
					responsiveImage={heroImages[1].image?.responsiveImage}
					imageText={heroImages[1].text}
					class="bottom-5 -translate-x-[80%] text-end"
				/>
			</div>

			<div class="grid-areas grid justify-items-center gap-x-8 grid-cols-2">
				<div class="flex-s-center">
					<ImageWithCallout
						responsiveImage={heroImages[2].image?.responsiveImage}
						imageText={heroImages[2].text}
						class="bottom-full -translate-x-1/3 left-1/2 text-center"
					/>
				</div>

				<ImageWithCallout
					responsiveImage={heroImages[3].image?.responsiveImage}
					imageText={heroImages[3].text}
					class="bottom-5 translate-x-[60%]"
				/>
			</div>
		</div>
	{/if}

	<section class="px-3 py-20 container-base relative z-1">
		<div class="relative w-full mx-auto space-y-6 md:max-w-3xl">
			{#if record.heading}
				<Heading heading={record.heading} titleTag="h1" contentClass="hero-content" />
			{/if}

			{#if record.cta}
				<div class="flex-s-center">
					<Button variant="brand" size="lg" href={record.cta.link} class="mx-auto"
						>{record.cta.text}</Button
					>
				</div>
			{/if}

			{#if record.testimonialPictures && record.testimonialPictures.length > 0}
				<div class="flex-s-center gap-4">
					<AvatarsGroup
						avatars={record.testimonialPictures.map(picture => ({
							src: String(picture.responsiveImage?.src),
							alt: String(picture.responsiveImage?.alt),
						}))}
					/>
					<p class="text-xs">{record.testimonialTitle}</p>
				</div>
			{/if}
		</div>
	</section>
</section>

{#if record.video}
	<section class="container-sm max-w-3xl py-20">
		<div class="relative md:max-w-lg md:mx-auto lg:max-w-xl">
			<Video
				video={record.video}
				class="p-[0.375rem] bg-white shadow-2xl rounded-xl relative max-h-[600px] md:max-w-lg lg:max-w-xl"
			/>

			<div
				class="max-md:hidden absolute left-full top-2 -translate-y-[45%] h-[100px] w-[400px] flex items-center"
			>
				<div class="space-y-10">
					<h3
						class="absolute text-center translate-x-[-100px] -translate-y-[50px] max-w-[16ch] text-2xl italic"
						style="text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.9);"
					>
						{record.videoText}
					</h3>
					<PhArrowBendDownLeftFill class="text-[100px] text-aquamarine rotate-[-20deg]" />
				</div>
			</div>
		</div>
	</section>
{/if}

<style lang="scss">
	.grid-areas {
		grid-template-areas:
			"top top"
			"left right";

		:nth-child(1) {
			grid-area: top;
		}

		:nth-child(2) {
			grid-area: left;
		}

		:nth-child(3) {
			grid-area: right;
		}
	}

	:global(.hero-content p strong) {
		@apply text-brand-primary;
	}
</style>
