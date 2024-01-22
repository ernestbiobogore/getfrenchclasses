<script lang="ts">
  import { flyAndScale } from "$lib/utils";
  import { Popover } from "bits-ui";
</script>

<header class="bg-indigo-6 py-2 md-py-4">
  <p class="text-(11px center white) md-text-sm">
    Get a free starter guide when you sign up for any of our <a href="/" class="fw-bold underline"
      >courses</a
    >.
  </p>
</header>

<nav class="py flex-s-between px-5">
  <a href="/" class="text-xs font-bold md-text-xl">Get French Classes</a>

  <Popover.Root>
    <Popover.Trigger class="md-hidden">
      <div class="i-lucide-align-justify text-xl"></div>
      <span class="sr-only">Open Popover</span>
    </Popover.Trigger>

    <Popover.Content
      class="w-full max-w-[229px] bg-white rounded-xl"
      transition={flyAndScale}
      sideOffset={8}
    >
      <div class="flex flex-col">
        <a class="px-2 py-1 not-last-b-b b-b-gray-2" href="/">Courses</a>
        <a class="px-2 py-1 not-last-b-b b-b-gray-2" href="/about">About</a>
        <a class="px-2 py-1 not-last-b-b b-b-gray-2" href="/">FAQ's</a>
        <a class="px-2 py-1 not-last-b-b b-b-gray-2" href="/blog">Blog</a>
        <a class="px-2 py-1 not-last-b-b b-b-gray-2" href="/contact">Contact</a>
      </div>
    </Popover.Content>
  </Popover.Root>

  <a href="/" class="text-xs action-base">Get Started</a>
</nav>
