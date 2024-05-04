<script lang="ts">
	import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
	import ArrowRight from "~icons/lucide/arrow-right";

	import { getSampleAvatars } from "$lib/utils";
	import { Button } from "$shadcn/button";

	export let data;
</script>

<div class="md:flex-[0.7] lg:flex-[0.5] relative">
	<div class="bg-white shadow-lg rounded-xl overflow-hidden sticky top-[5.75rem]">
		<!--  -->
		<div class="w-full bg-red-400 aspect-video">
			<!-- NOTE: TEMPORARY -->
			<div class="size-full flex-s-center">Image / Video</div>
		</div>

		<div class="px-5 py-4">
			<div class="mb-1 flex-s-between">
				<div class="font-semibold">${data.course.price} USD</div>

				<div class="flex-s-start">
					<AvatarsGroup avatars={getSampleAvatars()} size={20} />
					<p class="text-xs">{data.course.numberOfEnrolledStudents} enrolled.</p>
				</div>
			</div>
			<div class="text-sm">
				<a href="/" class="font-medium underline">Get reimbursed</a>
				<span>|</span>
				<a href="/" class="font-medium underline">Bulk purchases</a>
			</div>

			<div class="py-6">
				<Button variant="brand" href="/" class="w-full">Enroll</Button>
			</div>

			<div>
				<p class="text-xs font-medium text-gray-400 uppercase">CTA subtext</p>
				<p class="text-sm text-gray-800">Main Text</p>

				<div class="relative w-full mt-3">
					<input
						class="flex-1 w-full py-3 pl-3 text-sm border rounded-lg pr-14"
						type="text"
						placeholder="Your email"
					/>
					<div class="absolute top-0 right-0 h-full pr-1 flex-s-center">
						<button class="bg-night px-3 flex-s-center rounded-lg h-[80%] text-xl text-white">
							<ArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
