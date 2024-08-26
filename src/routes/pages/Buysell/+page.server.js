// +page.server.js
import { fetchProducts } from '$lib/actions/firebase.js';

export async function load() {
    try {
        const products = await fetchProducts();
        return { products };
    } catch (error) {
        console.error("Error loading products:", error);
        return { products: [] }; // Return an empty array if fetching fails
    }
}
