<script lang="ts">
	export let label: string;
</script>

<div class="relative py-10">
	<div class="flex items-center">
		<div class="h-[2px] w-[15vw] bg-gray-500 mr-1 lg:w-[25%]" />
		<div class="bg-gray-500 rounded-full size-4 flex items-center justify-center mr-2"></div>
		<p class="text-gray-500 text-">{label}</p>
	</div>
</div>
