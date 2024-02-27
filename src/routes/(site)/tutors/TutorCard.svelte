<script lang="ts" context="module">
	import type { TypeOptionValue, LevelOptionValue } from "./+page.svelte";
	export type Tutor = {
		name: string;
		short_description: string;
		rating: number;
		audience: TypeOptionValue[];
		levels: LevelOptionValue[];
		location: string;
		price: number;
	};
</script>

<script lang="ts">
	import * as Avatar from "$shadcn/avatar";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import * as Tooltip from "$shadcn/tooltip";

	import LayersIcon from "~icons/lucide/layers";
	import LocateIcon from "~icons/lucide/locate";
	import MessageCircleIcon from "~icons/lucide/message-circle";
	import PhoneIcon from "~icons/lucide/phone";
	import UserIcon from "~icons/lucide/user";
	import VideoIcon from "~icons/lucide/video";
	import StarFillIcon from "~icons/solar/star-bold";
	import SharpVerifired from "~icons/ic/sharp-verified";

	import { Button } from "$shadcn/button";
	import { goto } from "$app/navigation";

	export let tutor: Tutor;
	export let withVerifiedBadge = false;
	export let withCTA = false;
</script>

<Card.Root class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
	<img
		alt="Banner"
		class="w-full h-20 object-fill"
		height="100"
		src="/placeholder.svg"
		style="aspect-ratio: 1 / 1; object-fit: cover;"
		width="350"
	/>
	<Card.Content class="p-4">
		<div class="flex items-center space-x-3 mb-6">
			<Avatar.Root class="w-14 h-14 border-4 border-white">
				<Avatar.Image alt={tutor.name} src="/placeholder.svg?height=40&width=40" />
				<Avatar.Fallback>KL</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<div class="flex-s-start">
					<div class="font-semibold text-lg text-gray-900">{tutor.name}</div>

					{#if withVerifiedBadge}
						<Tooltip.Root openDelay={100}>
							<Tooltip.Trigger class="ml-2"><SharpVerifired /></Tooltip.Trigger>
							<Tooltip.Content side="bottom" class="max-w-[300px]"
								>One of our best tutors. Quality profile, experience in their field, verified
								qualifications and a great response time. Anna will be happy to arrange your first
								French lesson.</Tooltip.Content
							>
						</Tooltip.Root>
					{/if}
				</div>
				<div class="flex items-center">
					<StarFillIcon class="text-yellow-400" />
					<span class="ml-1 mr-2 text-gray-900">5.0</span>
					<span class="text-sm text-gray-500">(7)</span>
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

		<div class="text-lg font-medium mb-6 text-gray-900">
			{tutor.short_description}
		</div>
		<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
			<UserIcon class="w-5 h-5" />
			<span>{tutor.audience.join(", ")}</span>
		</div>
		<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
			<LayersIcon class="w-5 h-5" />
			<span>
				{tutor.levels.join(", ")}
			</span>
		</div>
		<div class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
			<LocateIcon class="w-5 h-5" />
			<span>{tutor.location}</span>
		</div>
		<div class="flex items-center justify-between">
			<div class="text-xl font-semibold text-blue-600">${tutor.price}/hr</div>
			<div class="flex-s-center gap-2 text-lg text-gray-600">
				<PhoneIcon />
				<VideoIcon />
				<MessageCircleIcon />
			</div>
		</div>
	</Card.Content>
</Card.Root>
