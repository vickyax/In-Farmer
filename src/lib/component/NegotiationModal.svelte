<!-- src/lib/components/NegotiationModal.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';

    export let product = {}; // Passed product details
    export let showModal = false; // Control visibility of the modal

    let negotiationPrice = ''; // Store the negotiation price input

    const dispatch = createEventDispatcher();

    // Function to handle negotiation
    function handleNegotiate() {
        if (negotiationPrice) {
            const negotiatedProduct = {
                ...product,
                negotiationPrice
            };
            dispatch('negotiate', negotiatedProduct); // Dispatch an event with negotiated product data
            negotiationPrice = ''; // Clear the input field
            showModal = false; // Close the modal
        }
    }

    // Function to close the modal
    function closeModal() {
        showModal = false;
    }
</script>

{#if showModal}
<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-1/3 modal-overlay">
        <h2 class="text-xl font-semibold mb-4 text-white text-opacity-[50%]">Negotiate Price for {product.name}</h2>
        <input 
            type="number" 
            placeholder="Enter your price" 
            bind:value={negotiationPrice} 
            class="p-2 w-full border rounded-md mb-4"
        />
        <div class="flex justify-end">
            <button class="bg-gray-300 px-4 py-2 mr-2 rounded-md" on:click={closeModal}>Cancel</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md" on:click={handleNegotiate}>Negotiate</button>
        </div>
    </div>
</div>
{/if}

<style>
    /* Optional styles for modal background */
    .modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
