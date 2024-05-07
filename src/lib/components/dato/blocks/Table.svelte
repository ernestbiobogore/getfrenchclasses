<script lang="ts">
	import type { TableBlockRecord } from "$lib/graphql/generated";
	import * as Table from "$shadcn/table";

	export let table: TableBlockRecord;
</script>

<Table.Root class="border-2 border-gray-500">
	{#if table.description}
		<Table.Caption>{table.description}</Table.Caption>
	{/if}

	<Table.Header class="bg-brand-primary">
		<Table.Row>
			{#each table.table.columns as column}
				<Table.Head class="font-bold text-white">{column}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each table.table.data as row}
			<Table.Row class="border-b-gray-500">
				{#each table.table.columns as column}
					<Table.Cell>{row[column]}</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
