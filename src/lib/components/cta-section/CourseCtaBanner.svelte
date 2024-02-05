<script lang="ts">
	import CTAImg from "$lib/images/ctaImg.png";
</script>

<section class="relative overflow-hidden bg-night">
	<div class="container-base px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
		<div class="absolute inset-0 z-0">
			<img
				alt="A pattern of wavy dots"
				src={CTAImg}
				decoding="async"
				data-nimg="fill"
				class="size-full object-cover object-center"
			/>
		</div>

		<div class="m-auto text-white rounded-2xl w-full">
			<div class="flex flex-col gap-10 items-center">
				<h2 class="text-center">Product Strategy for Designers</h2>
				<div class="flex-s-center gap-4">
					<a href="/" class="underline font-medium">Get reimbursed</a>
					<span>|</span>
					<a href="/" class="underline font-medium">Bulk purchases</a>
				</div>
				<a href="/" class="action-white w-fit">Enroll Now</a>
			</div>
		</div>
	</div>
</section>
