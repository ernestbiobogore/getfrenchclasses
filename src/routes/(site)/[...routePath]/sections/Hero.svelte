<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";
	import type { HeroSectionRecord } from "$lib/graphql/generated";
	import { VideoPlayer } from "@datocms/svelte";
	import PhArrowBendDownLeftFill from "~icons/ph/arrow-bend-down-left-fill";
	import Heading from "../blocks/Heading.svelte";

	export let record: HeroSectionRecord;
</script>

<section class="p-3 py-20 container-base">
	<div class="w-full mx-auto space-y-6 md:max-w-3xl">
		{#if record.heading}
			<Heading heading={record.heading} titleTag="h1" titleClass="text-left" />
		{/if}

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
	<section class="container-sm max-w-3xl pb-20">
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
