<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    let svg;

    onMount(() => {
        const data = [10, 20, 30, 25, 35, 45, 55];

        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };

        const x = d3.scaleLinear().domain([0, data.length - 1]).range([margin.left, width - margin.right]);
        const y = d3.scaleLinear().domain([0, d3.max(data)]).nice().range([height - margin.bottom, margin.top]);

        const line = d3.line()
            .x((d, i) => x(i))
            // @ts-ignore
            .y(d => y(d));

        const svgElement = d3.select(svg)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        svgElement.append('path')
            .data([data])
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            // @ts-ignore
            .attr('d', line);

        svgElement.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(data.length));

        svgElement.append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
    });
</script>

<svg bind:this={svg}></svg>
