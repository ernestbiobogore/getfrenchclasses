<script lang="ts">
	import Circle1 from "$lib/images/circle1.png";
	import Circle2 from "$lib/images/circle2.png";
	import Triangle from "$lib/images/triangle.png";
</script>

<section class="container-base relative">
	<div class=" m-auto space-y-5 bg-night rounded-2xl h-96 w-full">
		<div class="p-12 flex flex-col gap-10 md:p-8 md:w-34rem">
			<h2 class="w-full text-white text-2xl sm:break-words sm:w-5/12 md:text-[2.75rem]/[3.3rem]">
				Empower your financial future, today.
			</h2>
			<a href="/" class="action-white w-fit">View our courses</a>
		</div>
		<img
			src={Circle1}
			alt="Circle 1"
			class="absolute size-16 bottom-3 left-20 md:left-[28rem] md:top-20 md:size-20 lg:left-[50rem]"
		/>
		<img
			src={Circle2}
			alt="Circle 2"
			class="absolute size-20 bottom-28 right-24 md:top-48 md:right-36 md:s-28 lg:right-48 lg:top-40"
		/>
		<img
			src={Triangle}
			alt="Triangle"
			class="absolute w-24 h-28 bottom-0 right-4 md:s-40 md:right-4"
		/>
	</div>
</section>
