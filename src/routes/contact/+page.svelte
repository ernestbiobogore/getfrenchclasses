<script>
	import { Mail, User, MessageSquare } from 'lucide-svelte';
</script>

<section class="py-12 text-center">
	<h1>Here to help you.</h1>
	<p class="text-sm py-7">
		Fill out the form below and we will get back to you as soon as possible.
	</p>
	<div class="form p-7">
		<form method="" class=" flex flex-col gap-5 m-auto md:w-1/2">
			<div class="flex flex-row bg-white rounded-md gap-4 p-2 items-center">
				<User color="grey" class="w-4 h-4" />
				<input type="text" placeholder="Enter your name" class="text-xs" />
			</div>
			<div class="flex flex-row bg-white rounded-md gap-4 p-2 items-center">
				<Mail color="grey" class="w-4 h-4" />
				<input name="email" placeholder="Enter your Email" class="text-xs" />
			</div>

			<div class="flex flex-row bg-white rounded-md gap-4 p-2">
				<MessageSquare color="grey" class="w-4 h-4" />
				<textarea cols="25" rows="4" placeholder="Example Text" class="text-xs" />
			</div>

			<button type="submit" class="bg-black text-white p-2 rounded-lg text-right self-end"
				>Submit Form</button
			>
		</form>
	</div>
</section>

<section class="py-24 container-base">
	<div class="text-center space-y-5">
		<h2 class="tracking-normal">Our most frequently asked questions.</h2>
		<p class="text-sm">
			If we have not been able to answer your question and you do not want to fill out a form, you
			can contact us through the methods below.
		</p>
	</div>
	<div>
		<div>
			<Mail />
		</div>
	</div>
</section>
