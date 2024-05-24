<script lang="ts">
	import { enhance } from "$app/forms";
	import Video from "$dato/blocks/Video.svelte";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import { cn } from "$lib/utils";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import { Input } from "$shadcn/input";
	import { Image } from "@unpic/svelte";
	import ArrowRight from "~icons/lucide/arrow-right";
	import LoaderCircle from "~icons/lucide/loader-circle";
	import type { PageData } from "../../../course/[slug]/$types";

	let className: string | undefined = "";

	export let course: PageData["course"];
	export { className as class };

	let running = false;
</script>

<Card.Root
	class={cn("overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer h-fit", className)}
>
	{#if course.rightCtaMedia}
		{#if course.rightCtaMedia.__typename === "VideoBlockRecord"}
			<Video video={course.rightCtaMedia} class="h-60" />
		{/if}

		{#if course.rightCtaMedia.__typename === "ImageBlockRecord" && course.rightCtaMedia.image.responsiveImage?.src}
			<Image
				src={course.rightCtaMedia.image.responsiveImage.src}
				alt={course.rightCtaMedia.altText || course.rightCtaMedia.image.responsiveImage?.alt}
				layout="fullWidth"
				height={240}
				background={course.rightCtaMedia.image.responsiveImage?.base64 ||
					course.rightCtaMedia.image.responsiveImage?.bgColor ||
					"auto"}
				class="object-cover w-full aspect-square"
			/>
		{/if}
	{:else}
		<Image
			src="/placeholder.svg"
			alt="Banner"
			layout="fullWidth"
			height={240}
			class="object-cover w-full h-60 aspect-square"
		/>
	{/if}

	<Card.Content class="pt-6 space-y-4">
		<div class="flex items-center justify-between">
			<p class="font-semibold">${course.price} USD</p>

			{#if course.enrolledStudents?.images && course.enrolledStudents.images.length > 0}
				{@const avatars = course.enrolledStudents.images.map(image => ({
					src: String(image.responsiveImage?.src),
					alt: String(image.responsiveImage?.alt),
				}))}
				<div class="flex items-center gap-1">
					<AvatarsGroup {avatars} size={30} />

					<p class="text-xs">
						{course.enrolledStudents.description || course.numberOfEnrolledStudents + "enrolled."}
					</p>
				</div>
			{/if}
		</div>

		{#if course.rightCtaMainAction?.link}
			<Button href={course.rightCtaMainAction.link} variant="brand" class="w-full">
				{course.rightCtaMainAction.text || "Enroll"}
			</Button>
		{/if}

		<div class="flex justify-between">
			{#each course.rightCtaActions as { link, text }, i}
				<a href={link} class="font-semibold underline">{text}</a>

				{#if i % 2 === 0}
					<span>|</span>
				{/if}
			{/each}
		</div>

		{#if course.rightCtaMainText || course.rightCtaSubtext}
			<div>
				{#if course.rightCtaSubtext}
					<p class="text-xs font-medium text-gray-400 uppercase">{course.rightCtaSubtext}</p>
				{/if}

				{#if course.rightCtaMainText}
					<p class="text-sm text-gray-800">{course.rightCtaMainText}</p>
				{/if}
			</div>
		{/if}

		<form
			method="post"
			action="/course/[slug]?/sendUserEmail"
			class="relative"
			use:enhance={() => {
				running = true;

				return async ({ update }) => {
					running = false;
					return update();
				};
			}}
		>
			<Input type="hidden" name="slug" value={course.slug} />
			<Input
				class="flex-1 w-full py-3 pl-3 text-sm border rounded-lg pr-14"
				type="email"
				name="email"
				placeholder="Your email"
				required
			/>

			<div class="absolute top-0 right-0 h-full pr-1 flex-s-center">
				<Button type="submit" variant="brand" class="h-[80%] submit" disabled={running}>
					<LoaderCircle
						class="w-0 h-0 transition-all duration-500 ease-in-out opacity-0 loader-circle"
					/>
					<ArrowRight />
				</Button>
			</div>
		</form>
	</Card.Content>
</Card.Root>
