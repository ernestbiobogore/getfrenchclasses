<script lang="ts">
	import Heading from "$dato/blocks/Heading.svelte";
	import Masonry from "$lib/components/Masonry.svelte";
	import type {
		TestimonialBlockCtaRecord,
		TestimonialBlockDefaultRecord,
		TestimonialsSectionRecord,
	} from "$lib/graphql/generated";
	import { cn } from "$lib/utils";
	import CtaTestimonial from "../blocks/CtaTestimonial.svelte";
	import DefaultTestimonial from "../blocks/DefaultTestimonial.svelte";

	export let record: TestimonialsSectionRecord;
	export { className as class };

	let className: string | undefined = "";

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

<section class={cn("py-20 space-y-12 container-base", className)}>
	{#if record.heading}
		<Heading heading={record.heading} />
	{/if}

	{#if testimonialsWithCta && testimonialsWithCta.length > 0}
		{#each testimonialsWithCta as testimonial}
			<CtaTestimonial {testimonial} />
		{/each}
	{/if}

	{#if defaultTestimonials && defaultTestimonials.length > 0}
		<Masonry gridGap="50px">
			{#each defaultTestimonials as testimonial (testimonial.id)}
				<DefaultTestimonial {testimonial} />
			{/each}
		</Masonry>
	{/if}
</section>
