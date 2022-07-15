<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Counter from "$lib/counter.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
  <h1 class="w-full">
    <span class="block relative w-full h-0 welcome-p">
      <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img
          class="block absolute w-full h-full top-0"
          src="svelte-welcome.png"
          alt="Welcome"
        />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</section>
