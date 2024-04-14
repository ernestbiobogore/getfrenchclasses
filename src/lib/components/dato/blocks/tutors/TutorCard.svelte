<script lang="ts">
	import * as Avatar from "$shadcn/avatar";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import * as Tooltip from "$shadcn/tooltip";

	import SharpVerifired from "~icons/ic/sharp-verified";
	import BookOpen from "~icons/lucide/book-open";
	import LayersIcon from "~icons/lucide/layers";
	import LocateIcon from "~icons/lucide/locate";
	import UserIcon from "~icons/lucide/user";
	import StarFillIcon from "~icons/solar/star-bold";

	import StructuredText from "$dato/StructuredText/index.svelte";
	import {
		type FormattedSingleTutor,
		type FormattedTutorMeta,
	} from "$dato/blocks/tutors/types";
	import {
		DEFAULT_VERIFIED_DESCRIPTION,
		deSlugify,
	} from "$dato/blocks/tutors/utils.client";
	import { type AltFileField } from "$lib/graphql/generated/schema";
	import { Badge } from "$shadcn/badge";
	import { Button } from "$shadcn/button";

	export let tutor: FormattedTutorMeta | FormattedSingleTutor;
	export let withCTA = false;

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map(word => word[0])
			.join("");
	};

	$: coverMedia = "coverMedia" in tutor ? (tutor.coverMedia as AltFileField) : undefined;
</script>

<Card.Root class="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer">
	{#if coverMedia}
		{#if coverMedia.video}
			<video class="w-full h-40 object-cover" src={coverMedia.video.mp4Url} controls>
				<track kind="captions" />
			</video>
		{/if}

		{#if coverMedia.responsiveImage}
			<img
				alt={coverMedia.responsiveImage.alt}
				class="object-cover w-full h-40 aspect-square"
				height="100"
				src={coverMedia.responsiveImage.src}
				width="350"
			/>
		{/if}
	{:else}
		<img
			alt="Banner"
			class="object-cover w-full h-40 aspect-square"
			height="100"
			src="/placeholder.svg"
			width="350"
		/>
	{/if}

	<a href="/tutor/{tutor.slug}">
		<Card.Content class="p-4 mb-6">
			<div class="flex items-center mb-6 space-x-3">
				<Avatar.Root class="border-4 border-white w-14 h-14">
					<Avatar.Image alt={tutor.name} src={tutor.profilePicture?.responsiveImage?.src} />
					<Avatar.Fallback>{getInitials(tutor.name)}</Avatar.Fallback>
				</Avatar.Root>

				<div>
					<div class="flex-s-start">
						<div class="text-lg font-semibold text-gray-900">{tutor.name}</div>

						{#if "verified" in tutor && tutor.verified}
							<Tooltip.Root openDelay={100}>
								<Tooltip.Trigger class="ml-2"><SharpVerifired /></Tooltip.Trigger>

								{#if "verifiedDescription" in tutor && tutor.verifiedDescription}
									<Tooltip.Content side="bottom" class="max-w-[300px]">
										<StructuredText
											richText={tutor.verifiedDescription}
											elementClasses={{
												p: "text-sm font-medium",
											}}
										/>
									</Tooltip.Content>
								{:else}
									<p class="text-sm font-medium">
										{DEFAULT_VERIFIED_DESCRIPTION}
									</p>
								{/if}
							</Tooltip.Root>
						{/if}
					</div>

					<div class="flex items-center">
						<StarFillIcon class="text-yellow-400" />
						<span class="ml-1 mr-2 text-gray-900">{tutor.rating}</span>
						<span class="text-sm text-gray-500">({tutor.numberOfRatings})</span>
					</div>
				</div>
			</div>

			{#if withCTA}
				<Dialog.Root>
					<Dialog.Trigger let:builder asChild>
						<Button class="w-full mb-4 bg-brand-primary" builders={[builder]}>Book a lesson</Button>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Book a lesson</Dialog.Title>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			{/if}

			<p class="mb-6 text-lg font-medium text-gray-900">{tutor.summary}</p>

			<div class="space-y-4">
				<div class="flex items-center space-x-2 text-sm text-gray-600">
					<UserIcon class="w-5 h-5" />
					<span>{tutor.audiences.map(audience => deSlugify(audience)).join(", ")}</span>
				</div>

				<div class="flex items-center space-x-2 text-sm text-gray-600">
					<LayersIcon class="w-5 h-5" />
					<span>
						{tutor.levels.map(level => deSlugify(level)).join(", ")}
					</span>
				</div>

				<div class="flex items-center space-x-2 text-sm text-gray-600">
					<LocateIcon class="w-5 h-5" />
					<span>
						{tutor.city.name}
						({tutor.remoteStatus.map(status => deSlugify(status)).join(", ")})
					</span>
				</div>

				<div class="flex items-center space-x-2 text-sm text-gray-600">
					<BookOpen class="w-5 h-5" />

					{#if tutor.topics && tutor.topics.length > 0}
						<div class="gap-2 overflow-x-scroll flex-s-start">
							{#each tutor.topics as topic}
								<Badge class="bg-brand-primary">{topic.text}</Badge>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</Card.Content>
	</a>
</Card.Root>
