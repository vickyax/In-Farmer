<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    let svg;
    let selectedCommodity = 'Tomato';
    let selectedState = 'Tamil Nadu';
    let selectedDistrict = 'Coimbatore';
    let arrivalDate;
    let data = [];

    const apiKey = import.meta.env.VITE_AGRI_DATA_KEY;
    const baseURL = 'https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24';

    // Helper function to fetch data for a specific date
    async function fetchDataForDate(date) {
        const formattedDate = d3.timeFormat('%d/%m/%Y')(date);
        const response = await fetch(
            `${baseURL}?api-key=${apiKey}&format=json&limit=1&filters[State.keyword]=${selectedState}&filters[District.keyword]=${selectedDistrict}&filters[Commodity.keyword]=${selectedCommodity}&filters[Arrival_Date]=${formattedDate}`
        );
        const jsonData = await response.json();
        return jsonData.records.map(item => ({
            date: d3.timeParse('%d/%m/%Y')(item.Arrival_Date),
            price: parseFloat(item.Modal_Price)
        }));
    }

    async function fetchData() {
        if (!arrivalDate) {
            return;
        }

        const promises = [];
        const startDate = new Date(arrivalDate);

        // Get data for the past 10 days including the selected arrival date
        for (let i = 0; i < 10; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() - i);
            promises.push(fetchDataForDate(date));
        }

        // Resolve all promises
        const results = await Promise.all(promises);

        // Flatten the array of results
        data = results.flat().sort((a, b) => a.date - b.date);

        drawChart();
    }

    function drawChart() {
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([margin.left, width - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.price)]).nice()
            .range([height - margin.bottom, margin.top]);

        const line = d3.line()
            // @ts-ignore
            .x(d => x(d.date))
            // @ts-ignore
            .y(d => y(d.price));

        const svgElement = d3.select(svg)
            .attr('width', width)
            .attr('height', height);

        svgElement.selectAll('*').remove(); // Clear previous content

        svgElement.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('d', line);

        svgElement.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat('%d %b'))); // Show day of month

        svgElement.append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
    }

    // Fetch data when component mounts
    onMount(fetchData);
</script>

<div class="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 items-right">
    <div class="space-y-2">
        <label for="commodity" class="block text-sm font-medium text-gray-700">Commodity:</label>
        <input type="text" id="commodity" bind:value={selectedCommodity} on:change={fetchData} class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

        <label for="state" class="block text-sm font-medium text-gray-700">State:</label>
        <input type="text" id="state" bind:value={selectedState} on:change={fetchData} class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

        <label for="district" class="block text-sm font-medium text-gray-700">District:</label>
        <input type="text" id="district" bind:value={selectedDistrict} on:change={fetchData} class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

        <label for="arrival-date" class="block text-sm font-medium text-gray-700">Arrival Date:</label>
        <input type="date" id="arrival-date" bind:value={arrivalDate} on:change={fetchData} class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>

</div>
<div class="flex flex-col items-center">
    <svg bind:this={svg} class="mt-4"></svg>
</div>
