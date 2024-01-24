<script lang="ts" context="module">
  //
</script>

<script lang="ts">
  import SyllabusSection from "./SyllabusSection.svelte";
</script>

<section class="container-base py-20">
  <h2 class="text-center">Course Syllabus</h2>

  <br />

  <div class="max-w-2xl mx-a flex|col gap-8">
    <SyllabusSection />
    <SyllabusSection week={2} start="feb 12" end="feb 18" />
  </div>
</section>
