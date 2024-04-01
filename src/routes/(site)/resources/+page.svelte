<script lang="ts">
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import * as Card from "$shadcn/card";
	import * as Pagination from "$shadcn/pagination";
	import { mediaQuery } from "svelte-legos";
	import ChevronLeft from "~icons/lucide/chevron-left";
	import ChevronRight from "~icons/lucide/chevron-right";
	import ResourcesSearchFilter from "./ResourcesSearchFilter.svelte";

	export let data;

	const isDesktop = mediaQuery("(min-width: 768px)");

	$: perPage = $isDesktop ? 3 : 8;
	$: siblingCount = $isDesktop ? 1 : 0;
</script>

<svelte:head>
	<title>Free language learning resources</title>
</svelte:head>

<section class="container-base p-3 space-y-5 md:py-20 md:text-center">
	<h1>Free language learning resources</h1>
	<p>Explore our comprehensive range of language resources</p>
</section>

<div class="container-base py-6 md:py-8 lg:py-10 grid md:grid-cols-[200px_1fr] gap-6 md:gap-8">
	<ResourcesSearchFilter />

	<div class="space-y-10">
		{#if data.allResources && data.allResources.length > 0}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.allResources as resource (resource.id)}
					<Card.Root>
						<img
							alt={resource.featuredImage?.responsiveImage?.alt || resource.title}
							class="w-full h-48 object-cover rounded-t-md"
							height="200"
							src={resource.featuredImage?.responsiveImage?.src || "/placeholder.svg"}
							style="aspect-ratio: 300/200; object-fit: cover;"
							width="300"
						/>
						<Card.Header>
							<Card.Title>
								<a href="/resources/{resource.slug}">{resource.title}</a>
							</Card.Title>
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

		<Pagination.Root count={data.resourcesCount} {perPage} {siblingCount} let:pages let:currentPage>
			<Pagination.Content class="pl-0">
				<Pagination.Item>
					<Pagination.PrevButton>
						<ChevronLeft class="h-4 w-4" />
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
							<Pagination.Link {page} isActive={currentPage == page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton>
						<span class="hidden sm:block">Next</span>
						<ChevronRight class="h-4 w-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</div>
</div>
