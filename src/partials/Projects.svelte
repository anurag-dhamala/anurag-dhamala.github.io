<script>
  import IndividualProject from "@/partials/IndividualProject.svelte";
</script>

<div class="mx-auto max-w-screen-lg py-6">
  <div class="mb-6 text-2xl font-bold">
    <div class="flex items-baseline justify-between">
      <div>
        Recent <span class="bg-gradient-to-br bg-clip-text text-green-800"
          >Projects</span
        >
      </div>
      <div class="text-sm">
        <a href="/demo/astro-boilerplate/posts">View all projects →</a>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    <IndividualProject />
    <IndividualProject />
    <IndividualProject />
  </div>
</div>
