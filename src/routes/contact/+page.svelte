<script>
	import { Mail, User, MessageSquare, Phone, MapPin } from 'lucide-svelte';
	import Accordion from '$lib/components/ui/Accordion.svelte';
	const addBorderNone = () => {
		let input = document.getElementById('myInput');
		// @ts-ignore please check this out?
		input.classList.add('border-none');
	};
</script>

<section class="py-12 text-center">
	<h1>Here to help you.</h1>
	<p class="text-sm py-7">
		Fill out the form below and we will get back to you as soon as possible.
	</p>
	<div class="form p-7">
		<form method="" class=" flex flex-col gap-5 m-auto md:w-1/2 lg:w-1/3">
			<div class="flex flex-row bg-white rounded-md gap-4 p-2 md:p-4 items-center">
				<User color="grey" class="w-4 h-4" />
				<input
					id="myInput"
					on:focus={addBorderNone}
					type="text"
					placeholder="Enter your name"
					class="text-xs border-none"
				/>
			</div>
			<div class="flex flex-row bg-white rounded-md gap-4 p-2 md:p-4 items-center">
				<Mail color="grey" class="w-4 h-4" />
				<input
					id="myInput"
					name="email"
					placeholder="Enter your Email"
					class="text-xs border-none"
				/>
			</div>

			<div class="flex flex-row bg-white rounded-md gap-4 p-2 md:p-4">
				<MessageSquare color="grey" class="w-4 h-4" />
				<textarea cols="25" rows="4" placeholder="Example Text" class="text-xs border-none" />
			</div>

			<button type="submit" class="bg-black text-white p-2 rounded-lg text-right self-end"
				>Submit Form</button
			>
		</form>
	</div>
</section>

<section class="py-24 px-12 md:flex flex-row gap-16">
	<div class="md:w-1/2">
		<div class="text-center space-y-5">
			<h2 class="tracking-normal">Our most frequently asked questions.</h2>
			<p class="text-sm">
				If we have not been able to answer your question and you do not want to fill out a form, you
				can contact us through the methods below.
			</p>
		</div>
		<div class="py-4 flex flex-col items-center md:flex-row justify-evenly flex-start">
			<button class="flex flex-row items-center gap-4 border-2 p-6 bg-white rounded-lg">
				<Mail color="#5e62d1" />
				<a href="mailto:info.learn.com" class="whitespace-pre-line text-left text-xs">
					<span>info.learn.com</span>
					Email our support team
				</a>
			</button>

			<button class="flex flex-row items-center gap-4 border-2 p-6 bg-white rounded-lg">
				<Phone color="#5e62d1" />
				<a href="tel:+1-8000-808" class="whitespace-pre-line text-left text-xs">
					<span>+1-800-080-8</span>
					Call our support team
				</a>
			</button>

			<button class="flex flex-row items-center gap-4 border-2 p-6 bg-white rounded-lg">
				<MapPin color="#5e62d1" />
				<a href="mailto:info.learn.com" class="whitespace-pre-line text-left text-xs">
					<span>Miami. Fl</span>
					Contact our support team
				</a>
			</button>
		</div>
	</div>

	<div class=" text-center space-y-11 md:w-1/2">
		<div class="mx-auto">
			<Accordion
				itemIds={Array.from({ length: 5 }, (_, i) => `item-${i + 1}`)}
				titles={Array.from(
					{ length: 5 },
					(_) => `Lorem ipsum dolor sit amet consectetur. Fermentum.`
				)}
				contents={Array.from(
					{ length: 5 },
					(_) =>
						`Lorem ipsum dolor sit amet consectetur. Bibendum in ultrices ornare ut. Mattis nisl`
				)}
			/>
		</div>
	</div>
</section>
