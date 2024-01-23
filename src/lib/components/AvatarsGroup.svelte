<script lang="ts" context="module">
  export type Avatar = {
    src: string;
    alt: string;
  };
</script>

<script lang="ts">
  export let avatars: Avatar[] = [];
  export let size = 32;
  export let loading: "lazy" | "eager" = "eager";

  const margin = size / 3;
</script>

<div class="flex">
  <!-- People images -->
  {#each avatars as avatar, i}
    <img
      class="rd-full b-2 b-white first-ml-0!"
      src={avatar.src}
      alt={avatar.alt}
      width={size}
      height={size}
      {loading}
      style="margin-left: -{margin}px;"
    />
  {/each}
</div>
