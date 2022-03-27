import React from "react";
import logo from "./logo.svg";
import "./App.css";

//firebase SDK
import { initializeApp } from "firebase/app";
//firestore for database
import { getFirestore ,collection, addDoc} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
import { async } from "@firebase/util";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCgUnsPaHZpVW_we6RGHq8MPOk8p-PJWcc",
    authDomain: "chemazu-ecommerce.firebaseapp.com",
    projectId: "chemazu-ecommerce",
    storageBucket: "chemazu-ecommerce.appspot.com",
    messagingSenderId: "233678618539",
    appId: "1:233678618539:web:e1e4866fe160dac3101cee",
    measurementId: "G-FZFBCREQER",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  // console.log(app);
  const addData = async ()=>{
    // console.log("first")
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return <div className="App">
    <button onClick={addData}>Add Data</button>
  </div>;
}

export default App;
