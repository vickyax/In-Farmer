import { getApps, initializeApp, getApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  databaseURL: "https://farmer-bea99-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "gs://farmer-bea99.appspot.com"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
getStorage(app);
ref(db, "Products");
const fetchProducts = (callback) => {
  {
    console.error("Callback is not a function");
    return;
  }
};
export {
  fetchProducts as f
};
