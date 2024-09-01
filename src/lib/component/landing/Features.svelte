<script>
  import { t } from "$lib/i18n";
</script>
<section class="bg-white border-b py-8">
  <div class="container max-w-5xl mx-auto m-8">
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{$t("guide")}</h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div class="flex flex-wrap">
      <div class="w-5/6 sm:w-1/2 p-6">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
          {$t("slogan4")}
        </h3>
        <p class="text-gray-600 mb-8">
          {$t("slogan3")}
    
          <button
                class="flex text-center justfy-center items-center mx-auto lg:mx-0 hover:underline bg-green-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out"
            >
            {$t("start")}
            </button>
          <br/>{$t("team")}
          <br />
          <br />
          {$t("help")}
          <a class="text-pink-500 underline" href="https://">{$t("link")}</a>
        </p>
      </div>
      <div class="w-full sm:w-1/2 p-6">
        <img class="w-full object-cover" src="cartoonpic1.png" alt="hero" />
      </div>
    </div>
    <div class="flex flex-wrap flex-col-reverse sm:flex-row">
      <div class="w-full sm:w-1/2 p-6 mt-6">
        <img class="w-full object-cover" src="cartoonpic2.jpg" alt="hero" />
      </div>
      <div class="w-full sm:w-1/2 p-6 mt-6">
        <div class="align-middle">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            {$t("trade")}
          </h3>
          <p class="text-gray-600 mb-8">
            {$t("treg")}
            <br />
            <br />
           
              {$t("info")}
            <a class="text-pink-500 underline" href="https://">{$t("link")}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>