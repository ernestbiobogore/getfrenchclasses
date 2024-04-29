<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import ConvertBoxAction from "$dato/blocks/ConvertBoxAction.svelte";
	import CtaTestimonial from "$dato/blocks/CtaTestimonial.svelte";
	import FAQItems from "$dato/blocks/FAQItems.svelte";
	import Heading from "$dato/blocks/Heading.svelte";
	import { f } from "$lib/utils";
	import { Badge } from "$shadcn/badge";
	import * as Card from "$shadcn/card";
	import * as Carousel from "$shadcn/carousel";
	import { Image } from "@unpic/svelte";
	import CheckCircleRounded from "~icons/material-symbols/check-circle-rounded";

	export let data;
</script>

<svelte:head>
	<title>Grammar Tips / Free language learning resources</title>
</svelte:head>

<nav class="sticky top-0 z-10 py-4 border-b bg-magnolia">
	<div class="container-base flex-s-center">
		<a href="/" class="text-xs font-bold md:text-xl">Get French Classes</a>
	</div>
</nav>

<!-- Hero -->
<section class="py-10 md:py-20">
	<div class="flex gap-5 container-sm max-md:flex-col-reverse">
		<div class="space-y-6 sm:basis-8/12">
			<Badge>Free French Resources</Badge>
			<h1>{data.resource?.title}</h1>
			<StructuredText richText={data.resource?.summary} elementClasses={{ p: "max-w-[64ch]" }} />

			{#if data.resource?.cta?.convertboxId}
				<ConvertBoxAction
					title={data.resource.cta.title || "Download Now"}
					convertboxId={data.resource.cta.convertboxId}
				/>
			{/if}
		</div>

		<div class="flex items-center sm:basis-4/12">
			{#if data.resource?.featuredImage?.responsiveImage}
				<Image
					src={data.resource.featuredImage?.responsiveImage?.src || data.resource.featuredImage.url}
					alt={data.resource.featuredImage?.responsiveImage?.alt || data.resource.featuredImage.alt}
					layout="constrained"
					width={data.resource.featuredImage?.responsiveImage?.width || 324}
					aspectRatio={data.resource.featuredImage?.responsiveImage?.aspectRatio || 0.84}
					background={data.resource.featuredImage?.responsiveImage?.base64 ||
						data.resource.featuredImage?.responsiveImage?.bgColor ||
						"auto"}
				/>
			{/if}
		</div>
	</div>
</section>

<!-- WHAT'S CONTAINED IN THE DOCUMENT -->
<section class="py-20 bg-white md:py-32">
	<div class="flex flex-col-reverse gap-5 container-sm md:grid md:grid-cols-2">
		<div class="bg-blue-60">
			<h3>{data.resource?.contentHeading}</h3>

			<ul class="flex flex-col gap-4 px-0 mt-4">
				{#each data.resource?.contentItems || [] as { text }}
					<li class="flex-s-start-start gap-2 max-w-[46ch]">
						<div>
							<CheckCircleRounded class="text-green-500 size-6" />
						</div>
						<div>{text}</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="bg-red- flex-s-center">
			<Carousel.Root class="w-full max-w-sm">
				<Carousel.Content>
					{#each data.resource?.contentMedias || [] as image}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root>
									<Card.Content class="p-0">
										<Image
											src={image.responsiveImage?.src || image.url}
											alt={image.alt}
											layout="constrained"
											width={image.responsiveImage?.width || 1200}
											height={image.responsiveImage?.height || 630}
											background={image.responsiveImage?.base64 ||
												image.responsiveImage?.bgColor ||
												"auto"}
										/>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				<div class="mx-auto pt-4 w-[10px] h-[60px] relative md:contents">
					<Carousel.Previous />
					<Carousel.Next />
				</div>
			</Carousel.Root>
		</div>
	</div>
</section>

<!-- SEO SECTION -->
<section class="pb-20 bg-white md:pb-32">
	<div class="grid-cols-2 container-sm md:grid">
		<h3 class="max-md:mb-4">{data.resource?.descriptionHeading}</h3>

		<StructuredText class="grid gap-2" richText={data.resource?.descriptionContent} />
	</div>
</section>

<!-- FAQ -->
<section class="py-20 space-y-12 container-base">
	<Heading defaultHeading="Frequently Asked Questions" useDefaultHeading />
	<FAQItems items={data.homeFaq} />
</section>

<!-- <GenericCta text="Start learning more Grammar Tips Today" /> -->
<!-- <CtaTestimonial {testimonial} /> -->

{#if data.testimonial && data.testimonial.__typename === "TestimonialBlockCtaRecord"}
	<section class="py-20 space-y-12 container-base">
		<CtaTestimonial testimonial={data.testimonial} />
	</section>
{/if}
