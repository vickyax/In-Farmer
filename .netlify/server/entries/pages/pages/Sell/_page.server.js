import { f as fetchProducts } from "../../../../chunks/firebase.js";
async function load() {
  try {
    const products = await fetchProducts();
    return { products };
  } catch (error) {
    console.error("Error loading products:", error);
    return { products: [] };
  }
}
export {
  load
};
