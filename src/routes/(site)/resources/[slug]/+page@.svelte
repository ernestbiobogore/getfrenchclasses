<script lang="ts">
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";
	import GenericCta from "$lib/components/cta-section/GenericCta.svelte";
	import { Badge } from "$shadcn/badge";
	import * as Card from "$shadcn/card";
	import * as Carousel from "$shadcn/carousel";
	import CheckCircleRounded from "~icons/material-symbols/check-circle-rounded";
	import MultistepForm from "./form/MultistepForm.svelte";

	export let data;

	const dummyImage = "/placeholder.svg";
	let homepageData = data.homepageData;

	$: ({ homepageData } = data);
</script>

<svelte:head>
	<title>Grammar Tips / Free language learning resources</title>
</svelte:head>

<nav class="py-4 sticky top-0 z-10 bg-magnolia border-b">
	<div class="container-base flex-s-center">
		<a href="/" class="text-xs font-bold md:text-xl">Get French Classes</a>
	</div>
</nav>

<!-- Hero -->
<section class="py-10 md:py-20">
	<div class="container-sm flex gap-5 max-md:flex-col-reverse">
		<div class="flex-1 space-y-6">
			<Badge>Free French Resources</Badge>
			<h1>Free Grammar Tips for Learning French</h1>
			<p class="max-w-[64ch]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore repellendus
				perferendis illum autem, deserunt dignissimos aut.
			</p>
			<MultistepForm />
		</div>
		<div class="h-96 bg-blue-600 md:flex-[0.5]">
			<img src={dummyImage} alt="French Grammar Tips" class="object-cover w-full h-full" />
		</div>
	</div>
</section>

<!-- WHAT'S CONTAINED IN THE DOCUMENT -->
<section class="py-20 md:py-32 bg-white">
	<div class="container-sm flex flex-col-reverse gap-5 md:grid md:grid-cols-2">
		<div class="bg-blue-60">
			<h3>What's contained in the document</h3>

			<ul class="px-0 flex flex-col gap-4 mt-4">
				{#each [...Array(5)] as _}
					<li class="flex-s-start-start gap-2 max-w-[46ch]">
						<div>
							<CheckCircleRounded class="w-6 h-6 text-green-500" />
						</div>
						<div>
							Setting goals, measuring success, and proving the value of Instagram to your
							executives
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div class="bg-red- flex-s-center">
			<Carousel.Root class="w-full max-w-sm">
				<Carousel.Content>
					{#each Array(5) as _, i (i)}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root>
									<Card.Content class="p-0">
										<img
											src={dummyImage}
											alt="French Grammar Tips"
											class="w-full h-full object-cover"
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
<section class="bg-white pb-20 md:pb-32">
	<div class="container-sm md:grid grid-cols-2">
		<h3 class="max-md:mb-4">Want to learn some French Grammar Tips? Look no further</h3>

		<div class="grid gap-2">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur magnam, atque excepturi
				vel quos culpa quae suscipit ratione perferendis nisi aliquid blanditiis voluptate doloribus
				consequatur odio, enim eligendi inventore! Quidem?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa autem, hic minima eaque
				odio nostrum possimus et cupiditate impedit asperiores amet debitis magni error maxime, vel
				eveniet consequuntur architecto quam placeat a quo ad nihil optio? Quibusdam, repellendus
				perferendis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsam, provident, ullam
				nulla odio sint qui debitis sit saepe eius magnam ducimus totam esse perspiciatis quaerat
				dolore voluptas recusandae laboriosam.
			</p>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-24 text-center space-y-11 container-base" id="faq">
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

<GenericCta text="Start learning more Grammar Tips Today" />
