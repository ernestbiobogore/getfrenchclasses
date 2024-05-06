<script lang="ts">
	import StructuredText from "$dato/StructuredText/index.svelte";
	import { Badge } from "$shadcn/badge";
	import { Accordion } from "bits-ui";
	import { tick } from "svelte";
	import ChevronRight from "~icons/lucide/chevron-right";
	import type { PageData } from "../../../course/[slug]/$types";

	export let syllabus: PageData["course"]["courseSyllabus"];

	let state: {
		id: string;
		value: null | string;
	} = {
		id: "",
		value: "",
	};

	const getReadableDate = (date: Date) => {
		return Intl.DateTimeFormat("en-US", {
			day: "numeric",
			month: "short",
		}).format(date);
	};
</script>

{#each syllabus as { week, startDate, endDate, modules, id } (id)}
	<div class="flex items-center mb-4">
		<Badge>WEEK {week}</Badge>

		<div class="flex-1 mx-4 border-gray-400 border-t border-dashed" />
		<span class="text-xs text-gray-500 uppercase">
			{getReadableDate(new Date(startDate))} — {getReadableDate(new Date(endDate))}
		</span>
	</div>

	<div>
		<div class="mb-2 font-bold text-lg">MODULES</div>

		<Accordion.Root class="border border-gray-300 rounded-lg">
			{#each modules as module}
				{@const isOpen = state.id === module.id && state.value === "open"}

				<Accordion.Item
					value={module.id}
					class="flex flex-col gap-6 p-2 sm:p-4 not-last:border-b border-gray-300"
				>
					<Accordion.Trigger
						on:click={async e => {
							// @ts-ignore
							const el = e.detail.currentTarget;
							await tick();
							const dataState = el.getAttribute("data-state");

							if (dataState === "open") {
								state.id = module.id;
								state.value = dataState;
							} else {
								state.id = "";
								state.value = "";
							}
						}}
						value={module.id}
						class="flex-s-start-start gap-2 sm:gap-4"
					>
						<!-- PROGRESS -->
						<div
							class="size-[40px] rounded-full flex-s-center border-2 border-gray-400 text-sm text-gray-6 font-medium"
						>
							0%
						</div>

						<div class="flex-1">
							<div class="flex-s-between mb-2">
								<div class="font-semibold">{module.title}</div>
								<button
									class="flex-s-start gap-1 text-gray-600 px-2.5 py-1 border border-gray-3 rounded-full"
								>
									<span class="text-[10px]"
										>{module.lessonsNumber} LESSON{module.lessonsNumber > 1 ? "S" : ""} · {module.projectsNumber}
										PROJECT{module.projectsNumber > 1 ? "S" : ""}</span
									>
									<div class="transition duration-150" class:rotate-90={isOpen}>
										<ChevronRight />
									</div>
								</button>
							</div>

							<div
								class="text-start text-gray-500 text-sm sm:text-base"
								class:line-clamp-1={!isOpen}
							>
								<StructuredText richText={module.description} />
							</div>
						</div>
					</Accordion.Trigger>

					<Accordion.Content>
						<div class="border border-gray-300 rounded-lg">
							{#each module.lessonsTitles as lesson}
								<div class="p-3 border-gray-300 not-last:border-b">
									<div class="uppercase text-xs text-gray-6 hidden sm:block">Lesson</div>
									<div class="font-semibold text-gray-7 text-sm sm:text-base">{lesson.text}</div>
								</div>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
{/each}
