<script lang="ts" context="module">
	export type Testimonial = {
		id: string;
		author: string;
		content: string;
		rotate?: string;
	};
</script>

<script lang="ts">
	import Masonry from "$lib/components/Masonry.svelte";

	export let testimonials: Testimonial[] = [
		{
			id: crypto.randomUUID(),
			author: "John Doe",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			rotate: /*tw*/ "lg:-rotate-[4deg]",
		},

		{
			id: crypto.randomUUID(),
			author: "John Doe",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			rotate: /*tw*/ "lg:rotate-2",
		},

		{
			id: crypto.randomUUID(),
			author: "John Doe",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			rotate: /*tw*/ "lg:-rotate-6",
		},

		{
			id: crypto.randomUUID(),
			author: "John Doe",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. adipisicing elit. Quisquam, voluptatum.",
			rotate: /*tw*/ "lg:rotate-1",
		},
	];
</script>

<Masonry gridGap="24px">
	{#each testimonials as testimonial}
		<div class="card {testimonial.rotate}">
			<div class="flex-s-start gap-2">
				<div class="bg-red-600 rounded-full">
					<img class="rounded-full" src="" alt="" width="32" height="32" />
				</div>
				<div class="">{testimonial.author}</div>
			</div>

			<p>
				{@html testimonial.content}
			</p>
		</div>
	{/each}
</Masonry>

<style>
	.card {
		@apply rounded-lg space-y-2 bg-[#FFECEF] p-4;
		border: 1px solid #415462;
		box-shadow:
			25px 25px 0px 0px rgba(255, 240, 245, 0.1),
			20px 20px 0px 0px rgba(255, 192, 203, 0.3),
			15px 15px 0px 0px rgba(255, 182, 193, 0.5),
			10px 10px 0px 0px rgba(255, 105, 180, 0.7),
			5px 5px 0px 0px rgba(247, 54, 249, 0.7);
	}
</style>
