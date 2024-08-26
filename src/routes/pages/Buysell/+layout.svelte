<script>
    import { addProduct, uploadImage } from '$lib/actions/firebase.js';
    import { goto } from '$app/navigation';
    // Reactive variables
    let name = '';
    let id = '';
    let price = '';
    let kg='';
    let date = '';
    let imageFile; // Store the selected file
    let successMessage = ''; // Message to show if the product is added successfully
    let errorMessage = ''; // Message to show if there is an error
    let isLoading = false; // Loading state

    // Function to handle adding a new product
    async function handleAddProduct() {
        successMessage = '';
        errorMessage = '';
        isLoading = true;
        
        if (imageFile) {
            try {
                const imageUrl = await uploadImage(imageFile); // Upload image and get the URL
                const product = {
                    name,
                    id,
                    kg,
                    price,
                    date,
                    imageUrl // Include image URL
                };
                await addProduct(product);
                successMessage = 'Product added successfully!';
                // Clear input fields after adding the product
                name = '';
                id = '';
                price = '';
                kg='';
                date = '';
                imageFile = null;
            } catch (error) {
                console.error("Error adding product:", error);
                errorMessage = 'Error adding product. Please try again.';
            } finally {
                isLoading = false;
            }
        } else {
            console.error("Please select an image.");
            errorMessage = 'Please select an image.';
            isLoading = false;
        }
    }

    // Handle file input change
    function handleFileChange(event) {
        imageFile = event.target.files[0];
    }
</script>

<main class="container mx-auto py-10">
    <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-5"
    on:click={() => goto('/pages/Stock')}>Stock Value</button>
    <h1 class="text-3xl font-bold text-center mb-5 ">Add Product</h1>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <input bind:value={name} placeholder="Product Name" class="border p-2 mb-4 block w-full rounded" />
        <input bind:value={id} placeholder="Product ID" class="border p-2 mb-4 block w-full rounded" />
        <input bind:value={price} placeholder="Price" class="border p-2 mb-4 block w-full rounded" />
        <input bind:value={kg} placeholder="kg" class="border p-2 mb-4 block w-full rounded" />
        <input type="date" bind:value={date} class="border p-2 mb-4 block w-full rounded" />
        <input type="file" on:change={handleFileChange} class="border p-2 mb-4 block w-full rounded" /> <!-- File input for image upload -->
        
        <button on:click={handleAddProduct} class="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600" disabled={isLoading}>
            {#if isLoading}
                Adding Product...
            {:else}
                Add Product
            {/if}
        </button>

        <!-- Success and error messages -->
        {#if successMessage}
            <p class="text-green-500 mt-4 text-center">{successMessage}</p>
        {/if}
        {#if errorMessage}
            <p class="text-red-500 mt-4 text-center">{errorMessage}</p>
        {/if}
    </div>
    <slot/>
</main>

<style>
    input {
        display: block;
        margin-bottom: 10px;
    }
</style>
