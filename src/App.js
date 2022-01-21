import React from "react";
import './App.css';
import Header from "./Header.js";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBujvGvg1bisJFfFjYyj3NCib_jhNxGh_E",
  authDomain: "tinder-clone-5cf0d.firebaseapp.com",
  projectId: "tinder-clone-5cf0d",
  storageBucket: "tinder-clone-5cf0d.appspot.com",
  messagingSenderId: "588223984353",
  appId: "1:588223984353:web:8e59883e72807c6e7dfda0"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
       
       <Header />
       <TinderCards />
       <SwipeButtons />
    </div>
  );
}

export default App;
