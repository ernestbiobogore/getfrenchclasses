<script lang="ts">
	import * as Card from "$lib/components/shadcn/ui/card";
	import * as Pagination from "$lib/components/shadcn/ui/pagination";
	import ChevronRight from "~icons/lucide/chevron-right";
	import ChevronLeft from "~icons/lucide/chevron-left";
	import ResourcesSearchFilter from "./ResourcesSearchFilter.svelte";
	import { mediaQuery } from "svelte-legos";

	const isDesktop = mediaQuery("(min-width: 768px)");
	let resources = [...Array(4)];
	let count = 20;

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
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each resources as _}
				<Card.Root>
					<img
						alt="Article"
						class="w-full h-48 object-cover rounded-t-md"
						height="200"
						src="/placeholder.svg"
						style="aspect-ratio: 300/200; object-fit: cover;"
						width="300"
					/>
					<Card.Header>
						<Card.Title>
							<a href="/resources/grammar-tips"
								>Professional Services Guide to Connection in the Age of AI</a
							>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Learn the intricacies of French grammar and improve your language skills.
						</p>
					</Card.Content>
				</Card.Root>
			{/each}

			<Card.Root>
				<img
					alt="Article"
					class="w-full h-48 object-cover rounded-t-md"
					height="200"
					src="/placeholder.svg"
					style="aspect-ratio: 300/200; object-fit: cover;"
					width="300"
				/>
				<Card.Header>
					<Card.Title>
						<a href="/resources/grammar-tips">French Vocabulary for Beginners</a>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Start your French language journey with these essential vocabulary words.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<img
					alt="Article"
					class="w-full h-48 object-cover rounded-t-md"
					height="200"
					src="/placeholder.svg"
					style="aspect-ratio: 300/200; object-fit: cover;"
					width="300"
				/>
				<Card.Header>
					<Card.Title>
						<a href="/resources/grammar-tips">German Pronunciation Guide</a>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Improve your German pronunciation with this comprehensive guide.
					</p>
				</Card.Content>
			</Card.Root>
		</div>

		<Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
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
