<script>
	import { Mail, User, MessageSquare } from 'lucide-svelte';
</script>

<section class="py-12">
	<h1>Here to help you</h1>
	<p>Fill out the form below and we will get back to you</p>
	<div class="form">
		<form method="POST">
			<div>
				<User />
				<input type="text" placeholder="Enter your name" />
			</div>
			<div>
				<Mail />
				<input name="email" placeholder="Enter your Email" />
			</div>

			<div>
				<MessageSquare />
				<textarea cols="25" rows="4" placeholder="Example Text" />
			</div>

			<button type="submit">Submit</button>
		</form>
	</div>
</section>

<section>
	<div>
		<h2>Our most frequently asked questions.</h2>
		<p>
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
