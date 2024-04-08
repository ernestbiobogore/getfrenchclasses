<script lang="ts">
	import { goto } from "$app/navigation";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Badge } from "$lib/components/shadcn/ui/badge";
	import { RESOURCES_PER_PAGE } from "$lib/constants";
	import * as Card from "$shadcn/card";
	import * as Pagination from "$shadcn/pagination";
	import { queryParam } from "sveltekit-search-params";
	import ChevronLeft from "~icons/lucide/chevron-left";
	import ChevronRight from "~icons/lucide/chevron-right";
	import ResourcesSearchFilter from "./ResourcesSearchFilter.svelte";
	import { selectedTopic } from "./stores";

	export let data;
	$: displayedResources = data.allResources.filter(resource => {
		if ($selectedTopic) {
			return resource.topics.some(topic => topic.slug === $selectedTopic);
		}

		return true;
	});

	const pageParam = queryParam("page", {
		encode: (value: number) => value.toString(),
		decode: (value: string | null) => (value ? parseInt(value) : null),
		defaultValue: 1,
	});
</script>

<svelte:head>
	<title>Free language learning resources</title>
</svelte:head>

<section class="p-3 space-y-5 container-base md:py-20 md:text-center">
	<h1>Free language learning resources</h1>
	<p>Explore our comprehensive range of language resources</p>
</section>

<div class="container-base py-6 md:py-8 lg:py-10 grid md:grid-cols-[200px_1fr] gap-6 md:gap-8">
	<ResourcesSearchFilter />

	<div class="space-y-10">
		{#if displayedResources && displayedResources.length > 0}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each displayedResources as resource (resource.id)}
					<Card.Root>
						<img
							alt={resource.featuredImage?.responsiveImage?.alt || resource.title}
							class="object-cover w-full h-48 rounded-t-md"
							height="200"
							src={resource.featuredImage?.responsiveImage?.src || "/placeholder.svg"}
							style="aspect-ratio: 300/200; object-fit: cover;"
							width="300"
						/>
						<Card.Header>
							<Card.Title>
								<a href="/resources/{resource.slug}">{resource.title}</a>
							</Card.Title>

							<div class="flex items-center gap-2">
								{#each resource.topics as topic}
									<Badge class="justify-center text-xs bg-brand-primary w-fit">
										{topic.name}
									</Badge>
								{/each}
							</div>
						</Card.Header>
						{#if resource.summary}
							<Card.Content>
								<StructuredText
									richText={resource.summary}
									elementClasses={{
										p: "text-sm text-gray-500 dark:text-gray-400",
									}}
								/>
							</Card.Content>
						{/if}
					</Card.Root>
				{/each}
			</div>
		{/if}

		<Pagination.Root count={data.resourcesCount} perPage={RESOURCES_PER_PAGE} let:pages>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton on:click={() => goto(`/resources?page=${($pageParam || 1) - 1}`)}>
						<ChevronLeft class="w-4 h-4" />
						<span class="hidden sm:block">Previous</span>
					</Pagination.PrevButton>
				</Pagination.Item>

				{#each pages as page (page.key)}
					{#if page.type === "ellipsis"}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link
								{page}
								isActive={$pageParam === page.value}
								on:click={() => {
									$selectedTopic = undefined;
									goto(`/resources?page=${page.value}`);
								}}
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton on:click={() => goto(`/resources?page=${($pageParam || 1) + 1}`)}>
						<span class="hidden sm:block">Next</span>
						<ChevronRight class="w-4 h-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</div>
</div>
