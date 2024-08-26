<script>
    import { onMount } from 'svelte';
    import { fetchProducts } from '$lib/actions/firebase.js';
  
    let products = [];
    let isLoading = true;

    // Fetch products from Firebase on component mount
    onMount(() => {
        fetchProducts((fetchedProducts) => {
            products = fetchedProducts;
            isLoading = false; // Stop loading when data is fetched
            console.log('Fetched products:', products);
        });
    });
</script>

<div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold text-center mb-5">Product List</h1>

    {#if isLoading}
        <div class="text-center py-20">
            <div class="loader">Loading...</div>
        </div>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#if products.length}
                {#each products as product}
                    <div class="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.imageUrl || 'placeholder-image-url.jpg'} alt={product.name} class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h2 class="text-lg font-semibold">{product.name}</h2>
                            <p class="text-gray-500">Price: ₹{product.price}</p>
                            <p class="text-gray-500">{product.kg} Kg</p>
                            <p class="text-gray-400 text-sm">ID: {product.id}</p>
                            <p class="text-gray-400 text-sm">Date: {product.date}</p>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="text-center text-gray-500">No products available.</p>
            {/if}
        </div>
    {/if}
</div>

<style>
    .loader {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-top: 4px solid #3498db;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
