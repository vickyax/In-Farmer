<script lang="ts">
	import Button from './Button.svelte';
  export let content1: string = 'Default content';
  export let content2: string = 'Default content';
  export let btn: string = 'Default content';
</script>

<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
  <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="flex flex-wrap no-underline hover:no-underline">

      <div class="w-full font-bold text-xl text-gray-800 px-6">{content1}</div>
      <br/>
      <p class="text-gray-800 text-base px-6 mb-5">
        <br/>
       {content2}
      </p>
    </a>
  </div>
  <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
    <Button secondary>{btn}</Button>
  </div>
</div>