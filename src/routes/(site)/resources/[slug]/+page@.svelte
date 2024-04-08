<script lang="ts">
	import * as Card from "$shadcn/card";
	import * as Carousel from "$shadcn/carousel";
	import CheckCircleRounded from "~icons/material-symbols/check-circle-rounded";
	import CtaTestimonial from "$lib/components/dato/blocks/CtaTestimonial.svelte";
	import FAQItems from "$lib/components/dato/blocks/FAQItems.svelte";
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Badge } from "$shadcn/badge";
	import { Button } from "$shadcn/button";
	import { Image } from "@datocms/svelte";
	import { f } from "$lib/utils";

	export let data;

	const dummyImage = "/placeholder.svg";
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
		<div class="flex-1 space-y-6">
			<Badge>Free French Resources</Badge>
			<h1>{data.resource?.title}</h1>
			<p class="max-w-[64ch]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore repellendus
				perferendis illum autem, deserunt dignissimos aut.
			</p>
			<Button href={data.resource?.cta?.link}>{data.resource?.cta?.text}</Button>
		</div>
		<div class="h-96 bg-blue-600 md:flex-[0.5]">
			<img src={dummyImage} alt="French Grammar Tips" class="object-cover w-full h-full" />
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
							<CheckCircleRounded class="w-6 h-6 text-green-500" />
						</div>
						<div>{text}</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="bg-red- flex-s-center">
			<Carousel.Root class="w-full max-w-sm">
				<Carousel.Content>
					{#each data.resource?.contentMedias || [] as { responsiveImage }, i (i)}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root>
									<Card.Content class="p-0">
										<Image class="object-cover size-full" data={f(responsiveImage)} />
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
