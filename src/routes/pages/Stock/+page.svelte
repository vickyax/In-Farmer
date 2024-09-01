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
        if (!arrivalDate) return;

        const promises = [];
        const startDate = new Date(arrivalDate);

        for (let i = 0; i < 10; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() - i);
            promises.push(fetchDataForDate(date));
        }

        const results = await Promise.all(promises);
        data = results.flat().sort((a, b) => a.date - b.date);

        drawChart();
    }

    function drawChart() {
        const width = 600;
        const height = 400;
        const margin = { top: 40, right: 20, bottom: 50, left: 60 };

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

        svgElement.selectAll('*').remove();

        // Add gridlines
        svgElement.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            // @ts-ignore
            .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickSize(-height + margin.top + margin.bottom).tickFormat(''))
            .selectAll('.tick line')
            .style('stroke', 'lightgray');

        svgElement.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(${margin.left},0)`)
            // @ts-ignore
            .call(d3.axisLeft(y).ticks(5).tickSize(-width + margin.left + margin.right).tickFormat(''))
            .selectAll('.tick line')
            .style('stroke', 'lightgray');

        // Draw the line with animation
        const path = svgElement.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line);

        const totalLength = path.node().getTotalLength();

        path.attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);

        // Add axes
        svgElement.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat('%d %b')));

        svgElement.append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(5));

        // Add axis labels
        svgElement.append('text')
            .attr('x', -(height / 2))
            .attr('y', margin.left / 3)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .attr('class', 'axis-label')
            .text('Price (₹)');

        svgElement.append('text')
            .attr('x', width / 2)
            .attr('y', height - margin.bottom / 3)
            .attr('text-anchor', 'middle')
            .attr('class', 'axis-label')
            .text('Date');

        // Add tooltip
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svgElement.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("r", 4)
            .attr("cx", d => x(d.date))
            .attr("cy", d => y(d.price))
            .attr("fill", "steelblue")
            .attr("opacity", 0)
            .transition()
            // @ts-ignore
            .delay((d, i) => i * 200)  // Delay to create a staggered animation
            .duration(500)
            .attr("opacity", 1)
            .on("mouseover", (event, d) => {
                tooltip.transition().duration(200).style("opacity", .9);
                // @ts-ignore
                tooltip.html(`Date: ${d3.timeFormat("%d %b %Y")(d.date)}<br/>Price: ₹${d.price}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => {
                tooltip.transition().duration(500).style("opacity", 0);
            });
    }

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

<div class="center items-center relative">
    <svg bind:this={svg} class="mt-4"></svg>
</div>

<style>
    .axis-label {
        font-size: 12px;
        fill: #333;
    }

    .tooltip {
        position: absolute;
        text-align: center;
        width: auto;
        height: auto;
        padding: 8px;
        font: 12px sans-serif;
        background: lightsteelblue;
        border: 0px;
        border-radius: 8px;
        pointer-events: none;
    }

    .grid .tick line {
        stroke: lightgray;
        stroke-opacity: 0.7;
        shape-rendering: crispEdges;
    }
</style>
