<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import { Button } from "$lib/components/shadcn/ui/button";
	import * as Card from "$lib/components/shadcn/ui/card";
	import type {
		TestimonialBlockCtaRecord,
		TestimonialBlockDefaultRecord,
		TestimonialsSectionRecord,
	} from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import { Image } from "@datocms/svelte";
	import CarbonQuotes from "~icons/carbon/quotes";

	export let record: TestimonialsSectionRecord;

	$: testimonialsWithCta = record.testimonials.filter(
		testimonial => testimonial.__typename === "TestimonialBlockCtaRecord"
	) as TestimonialBlockCtaRecord[] | undefined;
	$: defaultTestimonials = record.testimonials.filter(
		testimonial => testimonial.__typename === "TestimonialBlockDefaultRecord"
	) as TestimonialBlockDefaultRecord[] | undefined;
</script>

<section class="py-20 space-y-12 container-base">
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if testimonialsWithCta && testimonialsWithCta.length > 0}
		{#each testimonialsWithCta as testimonial}
			<Card.Root
				class="py-20 container-base"
				style="border-radius: 20px;
		background: linear-gradient(261deg, #FFEFE9 75%, #FFF 100%);
		box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);"
			>
				<Card.Header class="flex flex-col gap-6 md:flex-row lg:gap-8">
					<div class={cn("rounded-2xl bg-white flex-1", testimonial.highlight && "pt-2 px-4 pb-8")}>
						{#if testimonial.highlight}
							<CarbonQuotes class="mb-2 text-2xl text-orange-600 md:text-6xl" />
							<Card.Title>
								<StructuredText
									richText={testimonial.highlight}
									elementClasses={{
										p: "text-lg !font-medium tracking-normal md:text-2xl md:pl-4 lg:text-4xl/[3rem]",
									}}
								/>
							</Card.Title>
						{/if}
					</div>

					<div class="flex md:flex-col md:flex-[0.2]">
						{#if testimonial.picture?.responsiveImage}
							<Image data={testimonial.picture.responsiveImage} />
						{/if}

						<div>
							<div class="text-lg font-medium">{testimonial.author}</div>
							<div class="text-[#3EAED0]">
								<p class="text-lg font-medium">{testimonial.role}</p>
								<p>{testimonial.company}</p>
							</div>
						</div>
					</div>
				</Card.Header>

				<Card.Content class="flex flex-col gap-4 pb-0 md:flex-row">
					{#if testimonial.content.heading}
						<div class="flex-1">
							<h3 class=" md:text-4xl">{testimonial.content.heading}</h3>
						</div>
					{/if}

					<div class="flex-1 space-y-8">
						{#if testimonial.content.subheading}
							<StructuredText richText={testimonial.content.subheading} />
						{/if}

						{#if testimonial.cta}
							<Button size="lg" href={testimonial.cta.link} class="w-full"
								>{testimonial.cta.text}</Button
							>
						{/if}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	{/if}

	{#if defaultTestimonials && defaultTestimonials.length > 0}
		<div class="grid gap-8 py-20 md:grid-cols-3">
			{#each defaultTestimonials as testimonial}
				<Card.Root class="single-testimonial">
					<div class="gap-2 flex-s-start">
						<div class="bg-red-600 rounded-full">
							{#if testimonial.picture?.responsiveImage}
								<Image data={testimonial.picture.responsiveImage} class="rounded-full !size-8" />
							{/if}
						</div>

						<div>{testimonial.author}</div>
					</div>

					<StructuredText richText={testimonial.content} />
				</Card.Root>
			{/each}
		</div>
	{/if}
</section>

<style>
	:global(.single-testimonial) {
		@apply rounded-lg space-y-2 bg-[#FFECEF] p-4;
		border: 1px solid #415462;
		box-shadow:
			25px 25px 0px 0px rgba(255, 240, 245, 0.1),
			20px 20px 0px 0px rgba(255, 192, 203, 0.3),
			15px 15px 0px 0px rgba(255, 182, 193, 0.5),
			10px 10px 0px 0px rgba(255, 105, 180, 0.7),
			5px 5px 0px 0px rgba(247, 54, 249, 0.7);
	}
</style>
