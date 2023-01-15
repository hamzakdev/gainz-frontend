
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gainz-ecommerce.firebaseapp.com",
  projectId: "gainz-ecommerce",
  storageBucket: "gainz-ecommerce.appspot.com",
  messagingSenderId: "185254997202",    
  appId: "1:185254997202:web:c65c9ef02d41127b2b510b",
  measurementId: "G-EST1EJ6QC6"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app