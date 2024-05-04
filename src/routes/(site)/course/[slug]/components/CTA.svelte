<script lang="ts">
	import { enhance } from "$app/forms";
	import Video from "$dato/blocks/Video.svelte";
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import { cn, getSampleAvatars } from "$lib/utils";
	import { Button } from "$shadcn/button";
	import * as Card from "$shadcn/card";
	import { Input } from "$shadcn/input";
	import { Image } from "@unpic/svelte";
	import ArrowRight from "~icons/lucide/arrow-right";
	import type { PageData } from "../../../course/[slug]/$types";

	let className: string | undefined = "";

	export let course: PageData["course"];
	export { className as class };

	$: console.log(course);
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
				alt={course.rightCtaMedia.image.responsiveImage?.alt}
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

			<div class="flex items-center gap-1">
				<AvatarsGroup avatars={getSampleAvatars()} size={10} />
				<p class="text-xs">{course.numberOfEnrolledStudents} enrolled.</p>
			</div>
		</div>

		{#if course.rightCtaEnrollLink}
			<Button href={course.rightCtaEnrollLink} variant="brand" class="w-full">Enroll</Button>
		{/if}

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

		<form method="post" class="relative" use:enhance>
			<Input
				class="flex-1 w-full py-3 pl-3 text-sm border rounded-lg pr-14"
				type="email"
				placeholder="Your email"
				required
			/>

			<div class="absolute top-0 right-0 h-full pr-1 flex-s-center">
				<button class="bg-night px-3 flex-s-center rounded-lg h-[80%] text-xl text-white">
					<ArrowRight />
				</button>
			</div>
		</form>
	</Card.Content>
</Card.Root>
