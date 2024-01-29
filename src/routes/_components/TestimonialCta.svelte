<script lang="ts" context="module">
	export type Author = {
		name: string;
		avatar: string;
		title: string;
		companies: string[];
	};
</script>

<script lang="ts">
	import CarbonQuotes from "~icons/carbon/quotes";
	import { cn } from "$lib/utils";

	export let author: Author;
	export let quote = "";
	export let video = "";
</script>

<section class="container-base py-10">
	<div
		class="p-5 flex flex-col gap-5 md:p-8 md:gap-8 lg:p-12"
		style="border-radius: 20px;
background: linear-gradient(261deg, #FFEFE9 75%, #FFF 100%);
box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);"
	>
		<!-- QUOTE / VIDEO & AUTHOR -->
		<div class="flex flex-col gap-6 md:flex-row lg:gap-8">
			<div class={cn("rounded-2xl bg-white flex-1", quote && "pt-2 px-4 pb-8")}>
				{#if quote}
					<CarbonQuotes class="text-2xl text-orange-600 mb-2 md:text-6xl" />
					<p class="text-lg font-medium tracking-normal md:text-2xl md:pl-4 lg:text-4xl/[3rem]">
						{@html quote}
					</p>
				{:else if video}
					<video class="size-full rounded-xl" src={video} controls>
						<track kind="captions" />
					</video>
				{/if}
			</div>

			<div class="flex md:flex-col md:flex-[0.2]">
				<div>
					<img class="rounded-full max-lg:h-[80%]" src={author.avatar} alt={author.name} />
				</div>

				<div>
					<div class="font-medium text-lg">{author.name}</div>
					<div class="text-[#3EAED0]">
						<p class="font-medium text-lg">{author.title}</p>

						{#each author.companies as company}
							<p>{company}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-4 md:flex-row">
			<div class="flex-1">
				<h3 class=" md:text-4xl">Generate high quality, search optimised articles</h3>
			</div>

			<div class="space-y-4 flex-1">
				<ul class="pl-0 text-sm leading-loose">
					<li>Get articles built on a proven content strategy</li>
					<li>Get high quality articles in minutes, not weeks</li>
					<li>We handle all the prompting for you</li>
				</ul>

				<!-- CTA -->
				<a href="/" class="action-base w-full text-lg text-center rounded-xl"
					>Uncover your current French level</a
				>
			</div>
		</div>
	</div>
</section>
