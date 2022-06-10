// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWpGWWGTpi1jenOjncpe-BzWKDbRqRW9I",
  authDomain: "projetouni-d6cd0.firebaseapp.com",
  projectId: "projetouni-d6cd0",
  storageBucket: "projetouni-d6cd0.appspot.com",
  messagingSenderId: "251836812036",
  appId: "1:251836812036:web:4c68a59be250d54f645e51",
  measurementId: "G-Y2JN781V16"
};

// Initialize Firebase
const app = initializeApp (firebaseConfig,"default");

export default app;