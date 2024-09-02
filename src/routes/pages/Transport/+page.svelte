<script>
    import { onMount } from 'svelte';
    import { fetchProducts } from '$lib/actions/firebase.js';
    import Button from '$lib/component/landing/components/Button.svelte';
    import { t } from '$lib/i18n';
    import Nav from '$lib/component/landing/Nav.svelte';

    let products = [];
    let cart = [];
    let isLoading = true;

    // Fetch products from Firebase on component mount
    onMount(() => {
        fetchProducts((fetchedProducts) => {
            products = fetchedProducts;
            isLoading = false; // Stop loading when data is fetched
            console.log('Fetched products:', products);
        });
    });

    // Function to add a product to the cart
    function addToCart(product) {
        cart = [...cart, product]; // Adds the selected product to the cart array
        console.log('Cart:', cart); // Debug log to check if the product is added
    }
</script>

<div class="container mx-auto py-10 bg-gradient-to-r from-indigo-500 to-blue-500 relative">
    <Nav/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 class="text-3xl font-bold text-center mb-5 text-white">Orders List</h1>

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
                            <div class="text-gray-400 text-sm">
                                Rating: 
                                <span class="star-rating">
                                    <!-- Rating Stars -->
                                    {#each Array(5) as _, i}
                                        <i class={
                                            i + 1 <= product.rating ? 'fas fa-star text-yellow-500' : 
                                            (i + 0.5 < product.rating ? 'fas fa-star-half-alt text-yellow-500' : 
                                            'far fa-star text-yellow-500')
                                        }></i>
                                    {/each}
                                </span> {product.rating}
                            </div>
                            <button on:click={() => addToCart(product)}><Button blue>Take Order</Button></button>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="text-center text-gray-500">No Orders available.</p>
            {/if}
        </div>
    {/if}

    <!-- Cart Element -->
    <div class="fixed top-[120px] right-1 bg-white shadow-lg rounded-lg  sm:px-[20px] outline outline-2">
        <h2 class="lg:text-xl font-bold ">My orders</h2>
        {#if cart.length > 0}
            <ul>
                {#each cart as item}
                    <li class="border-b py-2">
                        <p class="font-semibold">{item.name}</p>
                        <p class="text-sm text-gray-500">Price: ₹{item.price}</p>
                        <p class="text-sm text-gray-500">{item.kg} Kg</p>
                    </li>
                {/each}
            </ul>
        {:else}
            <p class="text-gray-500">Your orders are empty.</p>
        {/if}
    </div>
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
