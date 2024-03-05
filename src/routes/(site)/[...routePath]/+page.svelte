<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";
	import * as Card from "$lib/components/shadcn/ui/card";
	import { Image, VideoPlayer } from "@datocms/svelte";
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
		{/if}

		{#if record.__typename === "CardsSectionRecord"}
			<section class="container-base flex flex-col gap-6 py-20">
				<h2 class="text-center">{record.heading?.heading}</h2>
				<StructuredText
					richText={record.heading?.subheading}
					class="text-center mx-auto max-w-[46ch] md:max-w-[64ch]"
				/>

				{#if record.cards.length > 0}
					<div
						class="grid gap-6 max-md:max-w-sm max-md:mx-auto md:mt-8 md:grid-cols-2 lg:grid-cols-3"
					>
						{#each record.cards as card}
							<Card.Root>
								<Card.Header class="space-y-8">
									{#if card.media?.format === "svg"}
										{#if card.media.url}
											<img src={card.media?.url} alt={card.media?.alt} class="w-12 h-12" />
										{/if}
									{:else if card.media?.responsiveImage}
										<Image data={card.media.responsiveImage} />
									{/if}

									<Card.Title>{card.heading.heading}</Card.Title>
								</Card.Header>
								<Card.Content>
									<StructuredText richText={card.heading.subheading} />
								</Card.Content>
							</Card.Root>
						{/each}
					</div>
				{/if}
			</section>
		{/if}
	{/each}
{/if}
