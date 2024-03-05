<script lang="ts">
	import Badge from "$shadcn/badge/badge.svelte";
	import CheckCircle from "~icons/lucide/check-circle";
	import XCircle from "~icons/lucide/x-circle";

	import { ScrollArea } from "$shadcn/scroll-area";

	type Competitor = {
		logo: string;
		name: string;
		paid: boolean;
	};

	const competitors: Competitor[] = [
		{
			logo: "/placeholder.svg",
			name: "Competitor 1",
			paid: true,
		},
		{
			logo: "/placeholder.svg",
			name: "Competitor 2",
			paid: false,
		},
		{
			logo: "/placeholder.svg",
			name: "Competitor 3",
			paid: true,
		},
		{
			logo: "/placeholder.svg",
			name: "Competitor 4",
			paid: false,
		},
	];

	const features = [
		{
			name: "Feature 1",
			competitor1: true,
			competitor2: false,
			competitor3: true,
			competitor4: false,
		},
		{
			name: "Feature 2",
			competitor1: false,
			competitor2: true,
			competitor3: false,
			competitor4: true,
		},
		{
			name: "Feature 3",
			competitor1: true,
			competitor2: true,
			competitor3: false,
			competitor4: false,
		},
		// Add more features here
	];
</script>

<div class="container-base my-10">
	<div class="bg-white shadow-lg rounded-2xl p-5 md:p-10">
		<Badge>Compare</Badge>

		<div class="text-start md:hidden py-4 space-y-2">
			<h2>Why Choose Us over the others?</h2>
			<div class="text-sm font-normal">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex necessitatibus aut ut iure
				praesentium ullam reprehenderit deserunt numquam vitae.
			</div>
		</div>

		<ScrollArea orientation="horizontal">
			<table>
				<thead>
					<tr>
						<th class="min-w-[120px]">
							<div class="text-start max-md:hidden space-y-2">
								<h2>Why Choose Us over the others?</h2>
								<div class="text-sm font-normal leading-relaxed">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex necessitatibus
									aut ut iure praesentium ullam reprehenderit deserunt numquam vitae.
								</div>
							</div>
						</th>

						{#each competitors as competitor}
							<th>
								<div class="p-2 py-4 md:px-4 min-w-max">
									<img
										class="size-[80px] md:size-[95px] rounded-t-xl"
										src={competitor.logo}
										alt={competitor.name}
									/>
									<!-- <div>{competitor.name}</div> -->
									<Badge class="w-full justify-center rounded-b-xl rounded-t-none py-1.5"
										>{competitor.paid ? "Paid" : "Free"}</Badge
									>
								</div>
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each features as feature}
						<tr>
							<td class="font-bold">{feature.name}</td>
							{#each competitors as competitor}
								<td class="p-3">
									<div class="flex-s-center text-2xl md:text-4xl">
										{#if feature[competitor.name.toLowerCase().replace(" ", "")]}
											<CheckCircle class="text-green-500" />
										{:else}
											<XCircle class="text-red-500" />
										{/if}
									</div>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</ScrollArea>
	</div>
</div>
