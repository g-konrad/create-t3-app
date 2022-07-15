<script lang="ts">
  import { spring } from "svelte/motion";

  let count = 0;

  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  function modulo(n: number, m: number) {
    // handle negative numbers
    return ((n % m) + m) % m;
  }
</script>

<div class="flex border-y border-black/10 my-4 mx-0">
  <button
    class="flex items-center justify-center p-0 border-0 touch-manipulation w-8 text-3xl bg-transparent text-[color:var(--text-color)] hover:bg-[color:var(--text-color)]"
    on:click={() => (count -= 1)}
    aria-label="Decrease the counter by one"
  >
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5" />
    </svg>
  </button>

  <div class="w-32 h-16 relative text-center overflow-hidden">
    <div
      class="absolute w-full h-full"
      style="transform: translate(0, {100 * offset}%)"
    >
      <strong
        class="absolute font-normal text-6xl flex w-full h-full text-[color:var(--accent-color)] items-center justify-center select-none -top-full"
        aria-hidden="true">{Math.floor($displayed_count + 1)}</strong
      >
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button
    on:click={() => (count += 1)}
    aria-label="Increase the counter by one"
  >
    <svg class="w-1/4 h-1/4" aria-hidden="true" viewBox="0 0 1 1">
      <path
        class="stroke-[color:var(--text-color)] stroke-2"
        style="vector-effect: non-scaling-stroke"
        d="M0,0.5 L1,0.5 M0.5,0 L0.5,1"
      />
    </svg>
  </button>
</div>
