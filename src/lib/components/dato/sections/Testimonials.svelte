<script lang="ts">
	import Heading from "$lib/components/dato/blocks/Heading.svelte";
	import type {
		TestimonialBlockCtaRecord,
		TestimonialBlockDefaultRecord,
		TestimonialsSectionRecord,
	} from "$lib/graphql/generated";
	import CtaTestimonial from "../blocks/CtaTestimonial.svelte";
	import DefaultTestimonial from "../blocks/DefaultTestimonial.svelte";

	export let record: TestimonialsSectionRecord;

	$: testimonialsWithCta = record.testimonials
		.map(({ testimonial }) => testimonial)
		.filter(testimonial => testimonial.__typename === "TestimonialBlockCtaRecord") as
		| TestimonialBlockCtaRecord[]
		| undefined;
	$: defaultTestimonials = record.testimonials
		.map(({ testimonial }) => testimonial)
		.filter(testimonial => testimonial.__typename === "TestimonialBlockDefaultRecord") as
		| TestimonialBlockDefaultRecord[]
		| undefined;
</script>

<section class="py-20 space-y-12 container-base">
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if testimonialsWithCta && testimonialsWithCta.length > 0}
		{#each testimonialsWithCta as testimonial}
			<CtaTestimonial {testimonial} />
		{/each}
	{/if}

	{#if defaultTestimonials && defaultTestimonials.length > 0}
		<div class="grid gap-8 py-20 md:grid-cols-3">
			{#each defaultTestimonials as testimonial (testimonial.id)}
				<DefaultTestimonial {testimonial} />
			{/each}
		</div>
	{/if}
</section>
