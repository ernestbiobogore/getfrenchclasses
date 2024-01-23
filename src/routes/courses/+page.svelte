<script>
  import CourseCard from "$lib/components/CourseCard.svelte";
  import Circle1 from "$lib/images/circle1.png";
  import Circle2 from "$lib/images/circle2.png";
  import Triangle from "$lib/images/triangle.png";

  export let data;
  $: ({ allCourses } = data);
</script>

<svelte:head>
  <title>All our Courses - GetFrenchClasses</title>
</svelte:head>

<section class="p-3 md:py-20 container-base text-center space-y-5">
  <h2 class="tracking-tight text-7xl">
    Courses to guide to you to a <br /> stronger financial future.
  </h2>
  <p>Explore our comprehensive range of financial courses</p>
</section>

<section class="gap-8 container-base py-7">
  <div class="grid gap-8 md-grid-cols-2 lg-grid-cols-3">
    {#each allCourses as course}
      <CourseCard {course} />
    {/each}
  </div>
</section>

<section class="container-base relative">
  <div class=" m-auto space-y-5 bg-night rounded-2xl h-96 w-full">
    <div class="p-12 flex flex-col gap-10 md-(p-8 w-34rem)">
      <h2 class="text-(white 2xl) sm-(break-words w-5/12) md-(text-2.75rem/3.3rem w-full)">
        Empower your financial future, today.
      </h2>
      <a href="/" class="action-white w-fit">View our courses</a>
    </div>
    <img
      src={Circle1}
      alt="Circle 1"
      class="absolute s-16 bottom-3 left-20 md-(left-28rem top-20 s-20) lg-left-50rem"
    />
    <img
      src={Circle2}
      alt="Circle 2"
      class="absolute s-20 bottom-28 right-24 md-(top-48 right-36 s-28) lg-(right-48 top-40)"
    />
    <img
      src={Triangle}
      alt="Triangle"
      class="absolute w-24 h-28 bottom-0 right-4 md-(s-40 right-4)"
    />
  </div>
</section>
