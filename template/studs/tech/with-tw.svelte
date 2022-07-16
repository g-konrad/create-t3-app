<script lang="ts">
  export let name: string
  export let description: string
  export let documentation: string
</script>

<div class="hover:scale-105 cursor-pointer duration-500 flex flex-col justify-center items-center text-center rounded shadow-xl border-2 border-gray-500 h-full w-full p-6">
  <h2 class="text-lg text-gray-700">{name}</h2>
  <p class="text-sm text-gray-600">{description}</p>
  <a
    class="text-sm text-amber-500 underline decoration-dotted underline-offset-2 cursor-pointer mt-3"
    href={documentation}
    target="_blank"
    rel="noreferrer"
  >
    Documentation
  </a>
</div>
