<script lang="ts" context="module">
	export type CTAProps = {
		/** src of the video to display */
		video: string;
		heading: string;
		subtext: string;
		buttonText: string;
		buttonSubtext: string;
		peopleImages?: Avatar[];
	};
</script>

<script lang="ts">
	import AvatarsGroup, { type Avatar } from "$lib/components/AvatarsGroup.svelte";
	import { onScreenTransition } from "$lib/utils";

	export let props: CTAProps;
	export let ctaAction: () => void;

	let ctaDummy: HTMLDivElement;
</script>

<div class="relative">
	<!-- DARKENED BACKGROUND -->
	<div
		bind:this={ctaDummy}
		class="fixed size-full z-10 left-0 top-0 bg-black/50"
		style="opacity:0; display:none;"
	></div>
	<article
		use:onScreenTransition={{
			onEnter(node) {
				ctaDummy.style.display = "block";
				ctaDummy.style.opacity = "1";
				node.style.zIndex = "100";
			},
			onExit(node) {
				ctaDummy.style.display = "none";
				ctaDummy.style.opacity = "0";
				node.style.zIndex = "0";
			},
		}}
		class="relative bg-white w-full flex flex-col md:flex-row justify-between items-center"
	>
		<!-- LEFT HAND -->
		<div class="bg-red-200 flex-1 self-stretch">
			<div class="h-full bg-blue-200">
				<video class="h-full object-fill" src={props.video} autoplay>
					<track kind="captions" />
				</video>
			</div>
		</div>

		<!-- RIGHT HAND -->
		<div class="flex-1 py-8 px-4">
			<div
				class="text-[#5E62D0] text-center max-w-[380px] mx-auto flex flex-col items-center gap-6"
			>
				<div class="font-bold text-lg lg:text-xl">
					{props.heading}
				</div>

				<p class="text-center text-lg font-semibold max-w-[30ch]">
					{props.subtext}
				</p>

				<div>
					<button
						class="bg-savoy-blue text-center px-8 py-2 mx-auto rounded-lg"
						on:click={ctaAction}
					>
						<p class="text-white tracking-tight font-bold leading-tight max-w-[17ch]">
							{props.buttonText}
						</p>
					</button>

					<div class="flex-s-center gap-[10px] mt-1">
						<AvatarsGroup avatars={props?.peopleImages || []} size={20} />

						<p class="text-[10px] text-start leading-tight max-w-[30.8ch]">
							{props.buttonSubtext}
						</p>
					</div>
				</div>
			</div>
		</div>
	</article>
</div>
