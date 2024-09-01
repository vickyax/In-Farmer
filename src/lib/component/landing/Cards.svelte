
<script lang="ts">
	import Card from './components/Card.svelte';
	import {t} from '$lib/i18n';
</script>

<section class="bg-white border-b py-8">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{$t("farm")}</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>

    <Card content1={$t("fin")} content2={$t("scheme")} btn={$t("See")}/>

    <Card content1={$t("ct")} content2={$t("avl")} btn={$t("Offers")}/>

    <Card content1={$t("lf")} content2={$t("lfa")} btn={$t("Learn")}/>

  </div>
</section>
