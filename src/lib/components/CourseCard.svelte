<script lang="ts">
  import AvatarsGroup from "$lib/components/AvatarsGroup.svelte";
  import type { getAllCourses } from "$lib/graphql/queries/courses";
  import { getSampleAvatars } from "$lib/utils";

  export let course: Awaited<ReturnType<typeof getAllCourses>>[number];
  const updatedCourse = {
    ...course,
    seo: course.seo[0]?.seoBlock,
  };
</script>

<div class="p-8 space-y-4 bg-white rounded-2xl">
  <img
    src={updatedCourse.seo?.image?.url}
    alt={updatedCourse.seo?.image?.alt}
    width="310"
    height="210"
    loading="lazy"
    class="w-22.5rem h-13.125rem rounded-xl bg-purple-600"
  />

  <h3>
    <a href="/courses/{updatedCourse.slug}" class="hover-underline">{updatedCourse.name}</a>
  </h3>

  <div class="flex-s-between">
    <div class="flex-s-center gap-2">
      <div class="i-lucide-clock text-gray-4" />
      <p class="text-(xs gray-5)">{updatedCourse.duration} hours</p>
    </div>

    <div class="flex-s-center gap-2">
      <div class="i-lucide-pen-square text-gray-4" />
      <p class="text-(xs gray-5)">{updatedCourse.numberOfSections} sections</p>
    </div>

    <div class="flex-s-center gap-2">
      <div class="i-lucide-bar-chart text-gray-4" />
      <p class="text-(xs gray-5)">{updatedCourse.level} level</p>
    </div>
  </div>

  <p>
    {updatedCourse.seo?.description}
  </p>

  <p>
    <span class="text-2xl">$ {updatedCourse.price} USD</span>
  </p>

  <div class="flex justify-between">
    <a href="/courses/{updatedCourse.slug}" class="text-xs action-base w-fit">Read More</a>

    <div class="flex items-center gap-2">
      <AvatarsGroup avatars={getSampleAvatars()} loading="lazy" />
      <p class="text-xs">{updatedCourse.numberOfEnrolledStudents} enrolled.</p>
    </div>
  </div>
</div>
