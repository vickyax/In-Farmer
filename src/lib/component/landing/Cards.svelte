<script lang="ts">
	import Card from './components/Card.svelte';
</script>

<section class="bg-white border-b py-8">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Get your own Farm</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>

    <Card content1={"Get Financial support"} content2={"Learn more about Micro-Irrigation, PM kisan, Krishi Udan Scheme, and many more..."} btn={"See"}/>

    <Card content1={"Contact Land Owners"} content2={"Check the available land offers posted on the website and contact land owners for the purchase"} btn={"Offers"}/>

    <Card content1={"Learn Farming"} content2={"Learn about farming, finance and new technologies used in modern farming with our free exclusive course materials"} btn={"Learn"}/>

  </div>
</section>
