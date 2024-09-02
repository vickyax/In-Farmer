<script>
    import { onMount } from 'svelte';
    import { fetchProducts } from '$lib/actions/firebase.js';
    import { t } from '$lib/i18n';
    import Button from '$lib/component/landing/components/Button.svelte';
    import Nav from '$lib/component/landing/Nav.svelte';
    import NegotiationModal from '$lib/component/NegotiationModal.svelte'; // Import the NegotiationModal component

    let products = [];
    let isLoading = true;
    let searchQuery = ''; // Search query binding
    let selectedProductType = ''; // To store selected product type from dropdown
    let filteredProducts = []; // To hold filtered products
    let showModal = false; // Modal visibility
    let currentProduct = {}; // Product currently being negotiated
    let negotiatedProducts = []; // Store negotiated products

    // Fetch products from Firebase on component mount
    onMount(() => {
        fetchProducts((fetchedProducts) => {
            products = fetchedProducts;
            isLoading = false; // Stop loading when data is fetched
            filterProducts(); // Initial filtering
            console.log('Fetched products:', products);
        });
    });

    // Reactive statement to filter products based on searchQuery and selectedProductType
    $: filterProducts = () => {
        filteredProducts = products.filter(product => {
            const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSelectedType = selectedProductType ? product.name.toLowerCase() === selectedProductType.toLowerCase() : true;
            return matchesSearchQuery && matchesSelectedType;
        });
    };

    // Function to open negotiation modal for a specific product
    function openNegotiationModal(product) {
        currentProduct = product;
        showModal = true;
    }

    // Function to handle negotiated product
    function handleNegotiatedProduct(event) {
        negotiatedProducts = [...negotiatedProducts, event.detail];
    }
</script>

<div class="container mx-auto py-10 bg-gradient-to-r from-indigo-500 to-blue-500">
    <Nav/>
    <br><br><br><br>
    <h1 class="text-3xl font-bold text-center mb-5 text-white">{$t("itl")}</h1>
    
    <!-- Search Input -->
    <div class="text-center mb-5">
        <input 
            type="text" 
            placeholder="Search for products..." 
            bind:value={searchQuery}
            class="p-2 rounded-lg border border-gray-300 w-2/3 md:w-1/3"
            on:input={filterProducts}
        />
    </div>

    <!-- Select Dropdown for Product Types -->
    <div class="text-center mb-5">
        <select 
            bind:value={selectedProductType} 
            class="p-2 rounded-lg border border-gray-300 w-2/3 md:w-1/3"
            on:change={filterProducts}
        >
            <option value="">All Products</option>
            <option value="apples">Apples</option>
            <option value="mangos">Mangos</option>
            <option value="green grapes">Green Grapes</option>
            <option value="dark grapes">Dark Grape</option>
            <option value="water melon">Watermelon</option>
        </select>
    </div>

    {#if isLoading}
        <div class="text-center py-20">
            <div class="loader">Loading...</div>
        </div>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#if filteredProducts.length}
                {#each filteredProducts as product}
                    <div class="bg-white shadow-md rounded-lg overflow-hidden p-2">
                        <img src={product.imageUrl || 'placeholder-image-url.jpg'} alt={product.name} class="w-full h-60 object-cover">
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
                            <button  on:click={() => openNegotiationModal(product)}><Button green>Buy</Button></button>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="text-center text-gray-500">No products found.</p>
            {/if}
        </div>
    {/if}

    <!-- Negotiation Modal Component -->
    <NegotiationModal
        bind:showModal={showModal}
        product={currentProduct}
        on:negotiate={handleNegotiatedProduct}
    />

    <!-- List of Negotiated Products -->
    {#if negotiatedProducts.length}
        <div class="bg-white shadow-md rounded-lg mt-10 p-5">
            <h2 class="text-xl font-semibold mb-4">Negotiated Products</h2>
            <ul>
                {#each negotiatedProducts as product}
                    <li class="mb-2">
                        {product.name} - Original Price: ₹{product.price}, Negotiated Price: ₹{product.negotiationPrice}
                    </li>
                {/each}
            </ul>
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
