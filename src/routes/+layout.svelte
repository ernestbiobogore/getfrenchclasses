<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "../app.css";
  import "uno.css";

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

<nav class="py flex-s-between container-base sticky top-0 z-10 bg-magnolia b-b">
  <a href="/" class="text-xs font-bold md-text-xl">Get French Classes</a>

  <!-- MENU BUTTON / MENU -->
  <Popover.Root>
    <Popover.Trigger class="md-hidden">
      <div class="i-lucide-align-justify text-xl"></div>
      <span class="sr-only">Open Popover</span>
    </Popover.Trigger>

    <Popover.Content
      class="w-full max-w-229px bg-white rounded-xl z-10 shadow-2xl"
      transition={flyAndScale}
      sideOffset={16}
    >
      <!-- NOTE: :uno: prefix temporarily removed because it's buggy in dev -->
      <div class="flex flex-col [&_a]-(px-3 py-2 b-b-gray-2)">
        <a class="b-b" href="/courses">Courses</a>
        <a class="b-b" href="/about">About</a>
        <a class="b-b" href="/#faq">FAQ's</a>
        <a class="b-b" href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </Popover.Content>
  </Popover.Root>

  <!-- NOTE: :uno: prefix temporarily removed because it's buggy in dev -->
  <div class="hidden [&_a]-(px-3 py-2 fw-medium rounded-lg) md-block">
    <a class="hover-bg-gray-3" href="/courses">Courses</a>
    <a class="hover-bg-gray-3" href="/about">About</a>
    <a class="hover-bg-gray-3" href="/#faq">FAQ's</a>
    <a class="hover-bg-gray-3" href="/blog">Blog</a>
    <a class="hover-bg-gray-3" href="/contact">Contact</a>
  </div>

  <a href="/" class="text-xs action-base">Get Started</a>
</nav>

<slot />

<footer class="pt-24 pb-6 space-y-8 container-base">
  <div class="flex flex-col gap-8 sm:gap-0 sm:flex-row pt-8 border-t-[0.5px] border-t-[#999]">
    <div class="space-y-5 basis-9/12">
      <a href="/" class="font-bold">Get French Classes</a>
      <p class="text-sm sm:w-4/12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto inventore repellendus
        perferendis illum autem, deserunt dignissimos aut.
      </p>

      <div class="flex gap-2 text-2xl">
        <div class="i-lucide-instagram" />
        <div class="i-bi-facebook" />
        <div class="i-bi-twitter" />
        <div class="i-bi-youtube" />
        <div class="i-bi-linkedin" />
      </div>
    </div>
    <div class="flex gap-5 md:gap-20 basis-3/12 flex-col md:flex-row">
      <div class="space-y-4">
        <p class="font-bold">Company</p>
        <ul class="space-y-2 text-sm">
          <li>Courses</li>
          <li>Features</li>
          <li>FAQs</li>
          <li>Reviews</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div class="space-y-4">
        <p class="font-bold">Account</p>
        <ul class="space-y-2 text-sm">
          <li>Login</li>
          <li>Sign Up</li>
          <li>Reset Password</li>
        </ul>
      </div>

      <div class="space-y-4">
        <p class="font-bold">Resources</p>
        <ul class="space-y-2 text-sm">
          <li>Login</li>
          <li>Sign Up</li>
          <li>Reset Password</li>
        </ul>
      </div>
    </div>
  </div>

  <div>
    <p class="text-xs">© 2023 Get French Classes.</p>
  </div>
</footer>
