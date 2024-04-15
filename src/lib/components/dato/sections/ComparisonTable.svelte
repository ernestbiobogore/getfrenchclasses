<script lang="ts">
	import Heading from "$dato/blocks/Heading.svelte";
	import type { ComparisonSectionRecord } from "$lib/graphql/generated";
	import Badge from "$shadcn/badge/badge.svelte";
	import { ScrollArea } from "$shadcn/scroll-area";
	import CheckCircle from "~icons/lucide/check-circle";
	import XCircle from "~icons/lucide/x-circle";

	export let record: ComparisonSectionRecord;

	$: comparisons = record.comparison?.comparisons;
	$: companies = comparisons?.flatMap(({ companies }) => companies);
	$: uniqueCompanies = Array.from(
		new Map(companies?.map(company => [company.id, company])).values()
	);

	type CompanyFeature = {
		companyId: string;
		hasFeature: boolean;
	};

	type Feature = {
		feature: string;
		companies: CompanyFeature[];
	};

	type Comparison = {
		feature: string;
		hasFeature: boolean;
		companies: {
			id: string;
			name: string;
			paid: boolean;
			logo: {
				url: string;
				alt: string;
			};
		}[];
	};

	type FeatureMap = {
		[key: string]: Feature;
	};

	$: uniqueFeatures = Object.values(
		(comparisons || []).reduce<FeatureMap>((acc, comparison: Comparison) => {
			const { feature, hasFeature, companies } = comparison;
			const companyFeatures: CompanyFeature[] = companies.map(company => ({
				companyId: company.id,
				hasFeature,
			}));

			if (!acc[feature]) {
				acc[feature] = {
					feature,
					companies: companyFeatures,
				};
			} else {
				acc[feature].companies.push(...companyFeatures);
			}

			return acc;
		}, {})
	) satisfies Feature[];
</script>

<div class="my-10 container-base">
	<div class="p-5 space-y-4 bg-white shadow-lg rounded-2xl md:p-10">
		<Badge>Compare</Badge>

		<div class="sm:hidden">
			<Heading
				heading={record.comparison?.heading}
				class="text-left"
				contentClass="text-left mx-[inherit]"
			/>
		</div>

		<ScrollArea orientation="horizontal">
			<table>
				<thead>
					<tr>
						<th class="sm:min-w-[30rem] min-w-[12rem]">
							<div class="hidden sm:block">
								<Heading
									heading={record.comparison?.heading}
									class="text-left"
									contentClass="text-left mx-[inherit] font-normal"
								/>
							</div>
						</th>

						{#each uniqueCompanies as company (company.id)}
							<th>
								<div class="p-2 py-4 md:px-4 min-w-max">
									<img
										class="size-[80px] md:size-[95px] rounded-t-xl"
										src={company.logo.url}
										alt={company.logo.alt || company.name}
									/>
									<Badge class="w-full justify-center rounded-b-xl rounded-t-none py-1.5"
										>{company.paid ? "Paid" : "Free"}</Badge
									>
								</div>
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each uniqueFeatures as { feature, companies } (feature)}
						<tr>
							<td class="font-bold">{feature}</td>

							{#each companies as { companyId, hasFeature } (companyId)}
								<td class="p-3">
									<div class="text-2xl flex-s-center md:text-4xl">
										{#if hasFeature}
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
