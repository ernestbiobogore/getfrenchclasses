<script lang="ts">
	import FaqAccordion from "$lib/components/FaqAccordion.svelte";

	export let data;

	let homepageData = data.homepageData;
	$: ({ homepageData } = data);
</script>

<svelte:head>
	<title>Grammar Tips / Free language learning resources</title>
</svelte:head>

<nav class="py-4 sticky top-0 z-10 bg-magnolia border-b">
	<!--  -->
</nav>

<!-- Hero -->
<section>
	<div class="container-base">
		<!--  -->
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
				itemIds={homepageData.faq.faqBlocks.map(faq => faq.id)}
				titles={homepageData.faq.faqBlocks.map(faq => faq.question || "")}
				richTexts={homepageData.faq.faqBlocks.map(faq => faq.answer[0].richText)}
			/>
		</div>
	{/if}
</section>
