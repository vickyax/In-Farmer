<script lang="ts">
  import { clickOutside, clickOutsideAction } from '$lib/actions/clickOutside'
  import Button from './components/Button.svelte'

  let y: number
  let navFloat = false
  $: navFloat = y > 10

  let showMenu = false
  const toggleMenu = () => (showMenu = !showMenu)
  let hambugerEl

  const onClickOutsideAction = ({ target }) => {
    if (!hambugerEl.contains(target)) showMenu = false
  }
  const onClickOutside = ({ detail: { event: { target } } }) => {
    if (!hambugerEl.contains(target)) showMenu = false
  }
</script>

<svelte:window bind:scrollY={y} />
<!--Nav-->
<nav
  id="header"
  class={`
  fixed w-full z-30 top-0 text-white
  ${navFloat && 'bg-white'}
  `}
>
  <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="pl-4 flex items-center">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a
        class:text-gray-800={navFloat}
        class:text-white={!navFloat}
        class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="#"
      >
        <img
          src="farmer.png"
          alt="Farmer Icon"
          class="h-8 inline" 
        />
         In-Farmer
      </a>
    </div>
    <div bind:this={hambugerEl} class="block lg:hidden pr-4">
      <button
        on:click={toggleMenu}
        id="nav-toggle"
        class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <!-- use:clickOutsideAction={onClickOutsideAction} -->
    <!-- use:clickOutside on:clickOutside={onClickOutside} -->
    <div
   
      class:hidden={!showMenu}
      class="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Login</a>
        </li>
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            href="#">Services</a
          >
        </li>
        <li class="mr-3">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            href="#">FAQs</a
          >
        </li>
      </ul>
      <button
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Transport
      </button>
      <Button secondary={navFloat} center={false}>Buy/Sell</Button>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>

<!-- Optional Styles -->
<style>
  /* Additional styling can be added here if needed */
</style>
