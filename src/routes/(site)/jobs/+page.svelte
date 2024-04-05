<script lang="ts">
	import { goto } from "$app/navigation";
	import StructuredText from "$lib/components/dato/StructuredText/index.svelte";
	import { Badge } from "$shadcn/badge";
	import * as Card from "$shadcn/card";
	import * as Select from "$shadcn/select";
	import { Separator } from "$shadcn/separator";

	export let data;

	$: uniqueJobTypes = Array.from(
		new Map(data.jobs.flatMap(job => job.jobType).map(jobType => [jobType, jobType])).values()
	);
</script>

<svelte:head>
	<title>Careers at GetFrenchclasses</title>
</svelte:head>

<section class="container-sm p-3 space-y-5 md:py-20">
	<h1>Join The Team</h1>
	<p>We're looking for talented individuals who are passionate about teaching French.</p>
</section>

<section class="py-20 bg-white">
	<div class="container-sm">
		<div class="flex flex-col gap-5 max-w-lg">
			{#if data.modularPage.modularContent[0]}
				<h2>
					{data.modularPage.modularContent[0].heading?.heading}
				</h2>

				<StructuredText richText={data.modularPage.modularContent[0].heading?.subheading} />
			{/if}
		</div>

		<Separator class="my-20" />

		<div class="flex flex-col gap-5">
			<h2>Open Positions</h2>

			<Select.Root
				onSelectedChange={obj => {
					if (obj?.value) {
						const encodedValue = encodeURIComponent(String(obj.value));
						goto(`/jobs/?type=${encodedValue}`, {
							noScroll: true,
						});
					}
				}}
			>
				<Select.Trigger class="w-[180px]">
					<Select.Value placeholder="Any Type" />
				</Select.Trigger>

				<Select.Content>
					{#each uniqueJobTypes as jobType}
						{#if jobType}
							<Select.Item value={jobType} label={jobType}>
								{jobType}
							</Select.Item>
						{/if}
					{/each}
				</Select.Content>
			</Select.Root>

			<div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
				{#if data.jobs && data.jobs.length > 0}
					{#each data.jobs as job}
						<Card.Root>
							<a href="/jobs/{job.slug}">
								<Card.Header>
									<Card.Title class="mb-2">{job.title}</Card.Title>
									<Card.Description class="flex gap-2">
										<Badge class="rounded-md" variant="outline">{job.location}</Badge>
										<Badge class="rounded-md" variant="outline">{job.jobType}</Badge>
									</Card.Description>
								</Card.Header>
							</a>
						</Card.Root>
					{/each}
				{:else}
					<p>No jobs found</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.max-w-lg {
		:global(p) {
			@apply my-4;
		}
	}
</style>
