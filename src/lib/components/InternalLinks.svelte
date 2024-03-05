<script lang="ts" context="module">
	export type Section = {
		title: string;
		links: {
			label: string;
			path: string;
		}[];
	};
</script>

<script lang="ts">
	export let basePath: string;
	export let sections: Section[] = [];
</script>

<div class="container-base pt-20">
	<nav class=" grid gap-4 sm:grid-cols-2">
		{#each sections as section}
			<div class="bg-white p-4 shadow-xl rounded-xl space-y-2">
				<h3 class="font-medium">{section.title}</h3>
				<div class="grid grid-cols-3">
					{#each section.links as link}
						<a class="font-medium" href="{basePath}{link.path}">{link.label}</a>
					{/each}
				</div>
			</div>
		{/each}
	</nav>
</div>
