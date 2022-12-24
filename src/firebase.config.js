import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdfsHmhvZcWoDIsMW1qii9DDzl1OMUeZk",
  authDomain: "restaurant-food-delivery-b0c0f.firebaseapp.com",
  databaseURL:
    "https://restaurant-food-delivery-b0c0f-default-rtdb.firebaseio.com",
  projectId: "restaurant-food-delivery-b0c0f",
  storageBucket: "restaurant-food-delivery-b0c0f.appspot.com",
  messagingSenderId: "676666979568",
  appId: "1:676666979568:web:aef4b8b71a3017ab48fe35",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
