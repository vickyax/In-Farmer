<script lang="ts">
  export let primary = true;
  export let secondary = false;
  export let green = false;
  export let blue = false;
  export let center = true;
  export let onClick: () => void = () => {};;

  if (secondary) primary = false;
</script>

<div class:flex={center} class="items-center justify-center">
  <button
    on:click={onClick}
    class={`
      ${primary ? 'text-gray-800 bg-white' : ''}
      ${secondary ? 'text-gray-50 gradient' : ''}
      ${green ? 'text-gray-50 greeny' : ''}
      ${blue ? 'text-white bluey' : ''}
      mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
    `}
  >
    <slot>Click me!</slot>
  </button>
</div>

<style>
  .gradient {
    @apply bg-gradient-to-r from-pink to-yellow;
  }
  .greeny{
    @apply bg-gradient-to-r from-lime-500 to-green-300;
    
  }
  .bluey{
    @apply bg-gradient-to-r from-indigo-700 to-blue-500;

  }
</style>
