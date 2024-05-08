<script>
	import CtaTestimonial from "$dato/blocks/CtaTestimonial.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";
	import CustomMultiselect from "$lib/components/CustomMultiselect.svelte";
	import CourseSectionDivider from "./CourseSectionDivider.svelte";
	import { page } from "$app/stores";
	import SvelteSeo from "svelte-seo";
	import ModularPage from "$dato/sections/ModularPage.svelte";

	export let data;
	$: ({ allCoursesMetas, modularPage } = data);

	const filterOptions = {
		levels: [
			{ value: "beginner", label: "Beginner" },
			{ value: "intermediate", label: "Intermediate" },
			{ value: "advanced", label: "Advanced" },
		],
		bundles: [{ value: "starter", label: "Starter" }],
	};

	$: seo = modularPage.seo?.seoBlock;
	$: seoData = {
		url: $page.url.href,
		title: seo?.title || data.modularPage.title,
		description: seo?.description || data.modularPage.title,
		image: seo?.image
			? {
					url: seo?.image?.responsiveImage?.src || seo?.image?.url,
					alt: seo?.image?.alt || data.modularPage.title,
					width: 1200,
					height: 630,
				}
			: null,
	};
</script>

<SvelteSeo
	title={seoData.title}
	description={seoData.description}
	openGraph={{
		title: seoData.title,
		description: seoData.description,
		url: seoData.url,
		type: "website",
		images: seoData.image ? [seoData.image] : [],
		site_name: "Get French Classes",
	}}
/>

{#if data.modularPage}
	<ModularPage modularPage={data.modularPage} />
{/if}

<section class="container-base pt-10">
	<CustomMultiselect placeholder="Filter by Level or Bundle" options={filterOptions} />
</section>

<section class="container-base py-20">
	<CourseSectionDivider label="Beginner" />

	<div class="gap-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCoursesMetas as course}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

<section class="container-base py-20">
	<CourseSectionDivider label="Advanced" />

	<div class="gap-8">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each allCoursesMetas as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	</div>
</section>

{#if data.testimonial}
	{#if data.testimonial.__typename === "TestimonialBlockCtaRecord"}
		<section class="container-base py-20">
			<CtaTestimonial testimonial={data.testimonial} />
		</section>
	{/if}
{/if}
