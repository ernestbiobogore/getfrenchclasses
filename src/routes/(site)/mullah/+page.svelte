<script lang="ts">
	import * as Card from "$shadcn/card";
	import BarChartIcon from "~icons/lucide/bar-chart";
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";
	import LinkIcon from "~icons/lucide/link";
	import TestimonialCta from "$lib/components/cta-section/TestimonialCta.svelte";
	import { Button } from "$shadcn/button";
	import { getSampleAvatars } from "$lib/utils";

	export let data;

	$: homepageData = data?.homepageData;

	const dummyTestimonialCta = {
		author: {
			name: "Filipa Canelas",
			avatar: getSampleAvatars()[0].src,
			title: "Founder",
			companies: ["Able-Academy"],
		},
		quote: `I've tried Jasper, CopyAI, ChatGPT and Rytr.
    Penfriend is 10x better. The output from Penfriend
    gives me a really solid foundation of content depth
    that I can improve upon, in 80% less time.
    The title suggestions are incredible, the outline is
    really solid and the content length and depth is
    IMPRESSIVE!`,
	};
</script>

<section class="py-10 md:py-20">
	<div class="container-base space-y-6 text-center">
		<h1 class="md:text-5xl tracking-tight max-w-[26ch] mx-auto">
			Earn Recurring Income Sharing a Product That Customers Love
		</h1>
		<p>
			Join our affiliate program and earn 30% recurring commission on all referred customer
			payments.
		</p>
		<Button>Join the Affiliate Program</Button>
	</div>
</section>

<!-- WHAT YOU GET AS AN AFFILIATE PARTNER -->
<section class="py-10 md:py-20">
	<div class="container-base space-y-10">
		<h2 class="text-center tracking-tight md:text-4xl">What You Get as an Affiliate Partner</h2>

		<div class="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
			{#each [...Array(3)] as _}
				<Card.Root class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
					<Card.Content class="flex flex-col items-center text-center">
						<LinkIcon class="w-10 h-10 mb-4 text-blue-600 dark:text-blue-400" />
						<div class="text-lg font-semibold text-gray-900 dark:text-gray-100">
							Personalized Links
						</div>
						<p class="text-gray-600 dark:text-gray-400">
							Get your own unique affiliate link to share with your audience.
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="py-20 bg-gray-100">
	<div class="container-base space-y-10">
		<h2 class="text-center tracking-tight md:text-4xl">How It Works</h2>

		<div class="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
			{#each [...Array(3)] as _}
				<Card.Root class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
					<Card.Content class="flex flex-col items-center text-center">
						<BarChartIcon class="w-10 h-10 mb-4 text-blue-600 dark:text-blue-400" />
						<div class="text-lg font-semibold text-gray-900 dark:text-gray-100">
							Track Your Earnings
						</div>
						<p class="text-gray-600 dark:text-gray-400">
							See how much you've earned in real-time from your affiliate dashboard.
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

{#if homepageData && homepageData.faq?.faqBlocks && homepageData.faq.faqBlocks.length > 0}
	<section class="max-w-2xl px-4 mx-auto py-10 md:pt-20" id="faq">
		<h2 class="mb-8 text-center">Frequently Asked Questions</h2>
		<FaqAccordion
			itemIds={homepageData.faq.faqBlocks.map(faq => faq.id)}
			titles={homepageData.faq.faqBlocks.map(faq => faq.question || "")}
			richTexts={homepageData.faq.faqBlocks.map(faq => faq.answer[0].richText)}
		/>
	</section>
{/if}

<TestimonialCta {...dummyTestimonialCta} />
