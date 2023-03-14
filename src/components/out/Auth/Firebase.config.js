// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyFZvR6dr0GEBKCTxUQUhIKjpbeFiBt04",
  authDomain: "storeko-1.firebaseapp.com",
  projectId: "storeko-1",
  storageBucket: "storeko-1.appspot.com",
  messagingSenderId: "1088854790237",
  appId: "1:1088854790237:web:4218c9e1e6a6e4986a3db4",
  measurementId: "G-129T2X865P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;