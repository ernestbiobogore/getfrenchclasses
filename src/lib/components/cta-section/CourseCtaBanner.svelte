<script lang="ts">
	import ImageWithCallout from "$lib/components/ImageWithCallout.svelte";
	import CTAImg from "$lib/images/ctaImg.png";
	import { Button } from "$shadcn/button";
	import type { PageData } from "../../../routes/(site)/course/[slug]/$types";

	export let course: PageData["course"];
</script>

{#if course.ctaBannerTitle && course.ctaBannerButton && course.ctaBannerImages && course.ctaBannerMidActions}
	<section
		class="relative overflow-hidden bg-night"
		style="background: linear-gradient(261deg, #5e62d1 10%, #FFF 100%);"
	>
		<div class="container-base px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
			<div class="absolute inset-0 z-0">
				<img
					alt="A pattern of wavy dots"
					src={CTAImg}
					decoding="async"
					data-nimg="fill"
					class="size-full object-cover object-center"
				/>

				<div class="absolute inset-0 max-md:hidden">
					<div
						class="max-w-4xl w-full mx-auto flex-s-between-end h-full max-xl:pb-10 xl:flex-s-between"
						style:--sze="130px"
					>
						<ImageWithCallout
							heroImage={course.ctaBannerImages?.[0]}
							class="text-xs bottom-5 translate-x-[58%] xl:text-end xl:-translate-x-[88%] "
						/>
						<ImageWithCallout
							heroImage={course.ctaBannerImages?.[0]}
							class="text-xs bottom-5 text-end -translate-x-[88%] xl:text-start xl:translate-x-[60%]"
						/>
					</div>
				</div>
			</div>

			<div class="relative m-auto text-gray-900 rounded-2xl w-full">
				<div class="flex flex-col gap-10 items-center">
					<h2 class="text-center">{course.ctaBannerTitle}</h2>
					<div class="flex-s-center gap-4">
						{#each course.ctaBannerMidActions as { link, text }, i}
							<span class:hidden={!(i !== 0)}>|</span>
							<a href={link} class="underline font-medium">{text}</a>
						{/each}
					</div>

					{#if course.ctaBannerButton}
						<Button href={course.ctaBannerButton.link} class="w-fit"
							>{course.ctaBannerButton.text}</Button
						>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/if}
