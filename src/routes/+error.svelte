<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="pt-24 pb-6 space-y-8 container-base">
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</section>
