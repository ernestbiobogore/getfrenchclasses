<script lang="ts">
  import Masonry from "$lib/components/Masonry.svelte";

  type Testimonial = {
    id: string;
    author: string;
    content: string;
    rotate?: string;
  };

  const testimonials: Testimonial[] = [
    {
      id: crypto.randomUUID(),
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      rotate: /*tw*/ "lg:-rotate-[4deg]",
    },

    {
      id: crypto.randomUUID(),
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. .",
      rotate: /*tw*/ "lg:rotate-2",
    },

    {
      id: crypto.randomUUID(),
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      rotate: /*tw*/ "lg:-rotate-6",
    },

    {
      id: crypto.randomUUID(),
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. adipisicing elit. Quisquam, voluptatum.",
      rotate: /*tw*/ "lg:rotate-1",
    },
  ];
</script>

<section class="container-base py-20">
  <h2 class="text-center">What people say</h2>

  <br />

  <div>
    <Masonry gridGap="20px">
      {#each testimonials as testimonial}
        <div class="bg-pink-200 p-4 {testimonial.rotate}">
          <div class="flex-s-start gap-2">
            <div class="size-[28px] bg-red-600 rounded-full">
              <img src="" alt="" />
            </div>
            <div class="">{testimonial.author}</div>
          </div>

          <p>
            {testimonial.content}
          </p>
        </div>
      {/each}
    </Masonry>
  </div>
</section>
