<script lang="ts" context="module">
	import Table from "$lib/components/dato/blocks/Table.svelte";
</script>

<script lang="ts">
	import DefaultTestimonial from "$dato/blocks/DefaultTestimonial.svelte";
	import Note from "$dato/blocks/Note.svelte";
	import YouTube from "$dato/blocks/YouTube.svelte";
	import TutorCard from "$dato/blocks/tutors/TutorCard.svelte";
	import CourseCard from "$lib/components/CourseCard.svelte";
	import type { RichTextBlockModelRichTextBlocksField } from "$lib/graphql/generated";
	import { Image } from "@unpic/svelte";

	export let block: RichTextBlockModelRichTextBlocksField;
</script>

{#if block.__typename === "ImageBlockRecord"}
	<Image
		src={block.image.responsiveImage?.src || block.image.url}
		alt={block.altText || block.image.alt}
		layout="constrained"
		width={block.image.responsiveImage?.width || 1200}
		aspectRatio={block.image.responsiveImage?.aspectRatio || 1.9}
		background={block.image.responsiveImage?.base64 ||
			block.image.responsiveImage?.bgColor ||
			"auto"}
	/>
{/if}

{#if block.__typename === "NoteBlockRecord"}
	<Note note={block} />
{/if}

{#if block.__typename === "CoursesBlockRecord"}
	{#if block.courses && block.courses.length > 0}
		<div class="grid gap-6 sm:grid-cols-2">
			{#each block.courses as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	{/if}
{/if}

{#if block.__typename === "TutorsBlockRecord"}
	{#if block.tutors && block.tutors.length > 0}
		<div class="grid gap-6 sm:grid-cols-2">
			{#each block.tutors as tutor (tutor.id)}
				<TutorCard {tutor} />
			{/each}
		</div>
	{/if}
{/if}

{#if block.__typename === "TestimonialsListBlockRecord"}
	{#if block.testimonials && block.testimonials.length > 0}
		<div class="grid gap-x-8 gap-y-12 py-8 sm:grid-cols-2">
			{#each block.testimonials as { testimonial } (testimonial.id)}
				{#if testimonial.__typename === "TestimonialBlockDefaultRecord"}
					<DefaultTestimonial {testimonial} />
				{/if}
			{/each}
		</div>
	{/if}
{/if}

{#if block.__typename === "TableBlockRecord"}
	<Table table={block} />
{/if}

{#if block.__typename === "YoutubeEmbedBlockRecord"}
	<YouTube youtubeId={block.youtubeId} />
{/if}
