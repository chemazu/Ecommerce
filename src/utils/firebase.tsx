

//firebase SDK
import { initializeApp } from "firebase/app";

//firestore for database
import { getFirestore ,collection, addDoc} from "firebase/firestore";

//get authentication
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//analytics
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCgUnsPaHZpVW_we6RGHq8MPOk8p-PJWcc",
    authDomain: "chemazu-ecommerce.firebaseapp.com",
    projectId: "chemazu-ecommerce",
    storageBucket: "chemazu-ecommerce.appspot.com",
    messagingSenderId: "233678618539",
    appId: "1:233678618539:web:e1e4866fe160dac3101cee",
    measurementId: "G-FZFBCREQER",
  };

  //intializing firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

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
  const createUser = (email:string,password:string)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  }
  
export default app
export {createUser,addData}