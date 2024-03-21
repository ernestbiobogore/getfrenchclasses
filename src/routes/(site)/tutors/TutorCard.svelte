<script lang="ts">
	import * as Avatar from "$shadcn/avatar";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import * as Tooltip from "$shadcn/tooltip";

	import SharpVerifired from "~icons/ic/sharp-verified";
	import LayersIcon from "~icons/lucide/layers";
	import LocateIcon from "~icons/lucide/locate";
	import MessageCircleIcon from "~icons/lucide/message-circle";
	import PhoneIcon from "~icons/lucide/phone";
	import UserIcon from "~icons/lucide/user";
	import VideoIcon from "~icons/lucide/video";
	import StarFillIcon from "~icons/solar/star-bold";

	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { type VideoFileField } from "$lib/graphql/generated/schema";
	import { Button } from "$shadcn/button";
	import { type FormattedSingleTutor, type FormattedTutorMeta } from "./types";
	import { DEFAULT_VERIFIED_DESCRIPTION, deSlugify } from "./utils.client";

	export let tutor: FormattedTutorMeta | FormattedSingleTutor;
	export let withCTA = false;

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map(word => word[0])
			.join("");
	};

	$: coverMedia = "coverMedia" in tutor ? (tutor.coverMedia as VideoFileField) : undefined;
</script>

<Card.Root class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
	{#if coverMedia}
		<video class="w-full h-20" src={coverMedia.video.mp4Url} controls>
			<track kind="captions" />
		</video>
	{:else}
		<img
			alt="Banner"
			class="w-full h-20 object-fill"
			height="100"
			src="/placeholder.svg"
			style="aspect-ratio: 1 / 1; object-fit: cover;"
			width="350"
		/>
	{/if}

	<a href="/tutors/{tutor.slug}">
		<Card.Content class="p-4">
			<div class="flex items-center space-x-3 mb-6">
				<Avatar.Root class="w-14 h-14 border-4 border-white">
					<Avatar.Image alt={tutor.name} src={tutor.profilePicture?.responsiveImage?.src} />
					<Avatar.Fallback>{getInitials(tutor.name)}</Avatar.Fallback>
				</Avatar.Root>

				<div>
					<div class="flex-s-start">
						<div class="font-semibold text-lg text-gray-900">{tutor.name}</div>

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
						<Button class="w-full mb-4" builders={[builder]}>Book a lesson</Button>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Book a lesson</Dialog.Title>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			{/if}

			<p class="text-lg font-medium mb-6 text-gray-900">{tutor.summary}</p>

			<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
				<UserIcon class="w-5 h-5" />
				<span>{tutor.audiences.map(audience => deSlugify(audience)).join(", ")}</span>
			</div>

			<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
				<LayersIcon class="w-5 h-5" />
				<span>
					{tutor.levels.map(level => deSlugify(level)).join(", ")}
				</span>
			</div>

			<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
				<LocateIcon class="w-5 h-5" />
				<span>
					{tutor.location}
					({tutor.remoteStatus.map(status => deSlugify(status)).join(", ")})
				</span>
			</div>

			<div class="flex items-center justify-between">
				<div class="text-xl font-semibold text-blue-600">${tutor.rate}/hr</div>
				<div class="flex-s-center gap-2 text-lg text-gray-600">
					<PhoneIcon />
					<VideoIcon />
					<MessageCircleIcon />
				</div>
			</div>
		</Card.Content>
	</a>
</Card.Root>
