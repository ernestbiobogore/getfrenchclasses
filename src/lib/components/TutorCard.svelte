<script lang="ts" context="module">
	import type { TypeOptionValue, LevelOptionValue } from "$routes/(site)/tutors/+page.svelte";
	export type Tutor = {
		name: string;
		short_description: string;
		rating: number;
		audience: TypeOptionValue[];
		levels: LevelOptionValue[];
		location: string;
		price?: number;
		lessons: string[];
	};
</script>

<script lang="ts">
	import * as Avatar from "$shadcn/avatar";
	import * as Card from "$shadcn/card";
	import * as Dialog from "$shadcn/dialog";
	import * as Tooltip from "$shadcn/tooltip";

	import LayersIcon from "~icons/lucide/layers";
	import LocateIcon from "~icons/lucide/locate";
	import UserIcon from "~icons/lucide/user";
	import StarFillIcon from "~icons/solar/star-bold";
	import SharpVerifired from "~icons/ic/sharp-verified";
	import BookOpen from "~icons/lucide/book-open";

	import { Button } from "$shadcn/button";
	import { Badge } from "$shadcn/badge";
	import { addOverflowShadow } from "$lib/utils";

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
	<Card.Content class="p-4 flex flex-col gap-4">
		<div class="flex items-center gap-3">
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

		<div class="text-lg font-medium text-gray-900">
			{tutor.short_description}
		</div>
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<UserIcon class="w-5 h-5" />
			<span>{tutor.audience.join(", ")}</span>
		</div>
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<LayersIcon class="w-5 h-5" />
			<span>
				{tutor.levels.join(", ")}
			</span>
		</div>
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<LocateIcon class="w-5 h-5" />
			<span>{tutor.location}</span>
		</div>
		<div class="flex items-center gap-2 w-full text-gray-600">
			<div class="">
				<BookOpen class="w-5 h-5" />
			</div>
			<div
				use:addOverflowShadow={{ style: "inset -5px 0 5px -5px rgba(0, 0, 0, 0.2)" }}
				class="text-xs flex-1 flex overflow-x-auto gap-1 py-1 pr-2"
			>
				{#each tutor?.lessons as lesson}
					<Badge variant="secondary" class="text-xs">{lesson}</Badge>
				{/each}
			</div>
		</div>
	</Card.Content>
</Card.Root>
