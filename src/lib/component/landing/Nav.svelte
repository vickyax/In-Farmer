<script lang="ts">
  import { goto } from '$app/navigation';
  import { clickOutside, clickOutsideAction } from '$lib/actions/clickOutside';
  import Button from './components/Button.svelte';
  import { t, locale, locales } from "$lib/i18n";
  import { page } from '$app/stores';
  import farmer from '$lib/farmer.png';
  let y: number;
  let navFloat = false;
  $: navFloat = y > 10;

  let showMenu = false;
  const toggleMenu = () => (showMenu = !showMenu);
  let hambugerEl;

  const onClickOutsideAction = ({ target }) => {
    if (!hambugerEl.contains(target)) showMenu = false;
  };
  const onClickOutside = ({ detail: { event: { target } } }) => {
    if (!hambugerEl.contains(target)) showMenu = false;
  };

  const navigateTo = (url: string) => {
    goto(url);
  };
</script>

<svelte:window bind:scrollY={y} />

<!--Nav-->
<nav
  id="header"
  class={`
  fixed w-full z-30 top-0 text-white
  ${navFloat ? 'bg-white' : ''}
  `}
>
  <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="pl-4 flex items-center">
      <button
        class:text-gray-800={navFloat}
        class:text-white={!navFloat}
        class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl cursor-pointer"
        on:click={() => navigateTo('/')}
      >
        <img
          src={farmer}
          alt="Farmer Icon"
          class="h-8 inline"
        />
        {$t("page.title")}
        
      </button>
    </div>
    <div bind:this={hambugerEl} class="block lg:hidden pr-4">
      <button
        on:click={toggleMenu}
        id="nav-toggle"
        class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>{$t("menu")}</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class:hidden={!showMenu}
      class="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 text-center"
      id="nav-content"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <button class="inline-block py-2 px-4 text-black font-bold no-underline">{$t("login")}</button>
        </li>
        <li class="mr-3">
          <button
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >{$t("services")}</button
          >
        </li>
        <li class="mr-3">
          <button
            class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >{$t("faq")}</button
          >
        </li>
        <li class="mr-3">
          <p><select bind:value={$locale}>
            {#each locales as l}
              <option value={l}>{l}</option>
            {/each}
          </select></p
          >
        </li>
      </ul>
      <button  on:click={() => navigateTo('/pages/Transport')}  class="mx-[2px]">
      <Button>{$t("transport")}
      </Button>
    </button>
      <div class="mx-[2px]">
      <Button onClick={() => navigateTo('/pages/Buy')} secondary={navFloat} center={false}>{$t("buy")}</Button>
      </div>
      <div class="mx-[2px]">
      <Button onClick={() => navigateTo('/pages/Sell')} secondary={navFloat} center={false}>{$t("sell")}</Button>
      </div>
     
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
