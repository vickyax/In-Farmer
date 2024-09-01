import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
import "d3";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg;
  let selectedCommodity = "Tomato";
  let selectedState = "Tamil Nadu";
  let selectedDistrict = "Coimbatore";
  let arrivalDate;
  return `<div class="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 items-right"><div class="space-y-2"><label for="commodity" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1nzy8bc">Commodity:</label> <input type="text" id="commodity" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${add_attribute("value", selectedCommodity, 0)}> <label for="state" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1pwhmho">State:</label> <input type="text" id="state" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${add_attribute("value", selectedState, 0)}> <label for="district" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-qygrmu">District:</label> <input type="text" id="district" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${add_attribute("value", selectedDistrict, 0)}> <label for="arrival-date" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1400v6l">Arrival Date:</label> <input type="date" id="arrival-date" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"${add_attribute("value", arrivalDate, 0)}></div></div> <div class="flex flex-col items-center"><svg class="mt-4"${add_attribute("this", svg, 0)}></svg></div>`;
});
export {
  Page as default
};
