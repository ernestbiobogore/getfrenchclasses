<script lang="ts">
	import * as Dialog from "$shadcn/dialog";
	import ProgressBar from "./ProgressBar.svelte";
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { Button, buttonVariants } from "$shadcn/button";
	import { Input } from "$shadcn/input";
	import { Label } from "$shadcn/label";

	let steps = ["Name", "Email & Phone", "Company", "Confirmation"];
	let currentActive = 1;
	let progressBar: ProgressBar;
	let formData = {
		name: "",
		email: "",
		phone: "",
		company: "",
	};

	$: activeStep = steps[currentActive - 1];

	function handleSubmit() {
		console.log("Your form data => ", formData);
	}
</script>

<Dialog.Root onOpenChange={open => !open && (currentActive = 1)}>
	<Dialog.Trigger let:builder asChild>
		<Button builders={[builder]}>Download Now</Button>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Download The Free Grammar Tips</Dialog.Title>
		</Dialog.Header>

		<div class="grid gap-4 py-4">
			<ProgressBar {steps} bind:currentActive bind:this={progressBar} />

			<form class="grid gap-4" on:submit|preventDefault={handleSubmit}>
				{#if activeStep === "Name"}
					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input type="text" id="name" bind:value={formData.name} />
					</div>
				{/if}

				{#if activeStep === "Email & Phone"}
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input type="email" id="email" bind:value={formData.email} />
					</div>
					<div class="space-y-2">
						<Label for="phone">Phone</Label>
						<Input type="tel" id="phone" bind:value={formData.phone} />
					</div>
				{/if}

				{#if activeStep === "Company"}
					<div class="space-y-2">
						<Label for="company">Company</Label>
						<Input type="text" id="company" bind:value={formData.company} />
					</div>
				{/if}

				{#if activeStep === "Confirmation"}
					<div>
						<p>Confirmation</p>
						<p>Thank you for downloading the free grammar tips</p>
					</div>
				{/if}

				<Dialog.Footer class="mt-8 max-sm:gap-2">
					<Button
						variant="outline"
						disabled={currentActive === 1}
						on:click={() => progressBar.handleProgress(-1)}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						class="sm:!mr-auto"
						disabled={currentActive === steps.length}
						on:click={() => progressBar.handleProgress(1)}
					>
						Next
					</Button>

					{#if activeStep === "Confirmation"}
						<DialogPrimitive.Close type="submit" class={buttonVariants()}
							>Download</DialogPrimitive.Close
						>
					{/if}
				</Dialog.Footer>
			</form>
		</div>
	</Dialog.Content>
</Dialog.Root>
