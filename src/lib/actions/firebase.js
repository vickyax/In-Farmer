// src/lib/actions/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    databaseURL: "https://farmer-bea99-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "gs://farmer-bea99.appspot.com"
};

// Initialize Firebase app if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get a reference to the database
const db = getDatabase(app);
const storage = getStorage(app);

// Reference to the 'Products' node in the database
export const productsRef = ref(db, "Products");

// Function to add a new product to the database
export const addProduct = (product) => push(productsRef, product);

// Function to upload an image to Firebase Storage and return the URL
export const uploadImage = async (file) => {
    const imageRef = storageRef(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
};

// Function to fetch products from the database
export const fetchProducts = (callback) => {
    if (typeof callback !== 'function') {
        console.error('Callback is not a function');
        return;
    }

    onValue(productsRef, (snapshot) => {
        const products = snapshot.val();
        if (products) {
            callback(Object.values(products)); // Convert object to array
        } else {
            callback([]);
        }
    });
};
