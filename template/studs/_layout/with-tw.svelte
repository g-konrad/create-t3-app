<script lang="ts">
  import "../app.css";
</script>

<main class="flex flex-col flex-1 w-full max-w-5xl my-0 mx-auto p-4 box-border">
  <slot />
</main>

<footer class="flex flex-col justify-center items-center p-10 sm:px-0 sm:py-10">
  <p>
    visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to
    learn SvelteKit
  </p>
</footer>
