<script lang="ts">
	export let currentPage: number;
	export let maxPages: number;
	export let basePath: string;
</script>

<div class="container-base space-y-8 py-16">
	<div class="flex justify-center">
		<div class="flex gap-4 flex-wrap">
			{#if currentPage > 1}
				<a href="{basePath}-{currentPage - 1}" class="w-fit hover:underline">Previous</a>
			{/if}

			{#each { length: maxPages } as _, i}
				{#if i + 1 === currentPage}
					<span class="w-fit font-bold underline">{i + 1}</span>
				{:else}
					<a href="{basePath}-{i + 1}" class="w-fit hover:underline">{i + 1}</a>
				{/if}
			{/each}

			{#if currentPage < maxPages}
				<a href="{basePath}-{currentPage + 1}" class="w-fit hover:underline">Next</a>
			{/if}
		</div>
	</div>
</div>
