

//firebase SDK
import { initializeApp } from "firebase/app";

//firestore for database
import { getFirestore ,collection, addDoc} from "firebase/firestore";

//get authentication
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";


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

//intialize sign in with google
const provider = new GoogleAuthProvider();


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
  
 
  const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  
export default app
export {createUser,addData,signInWithGoogle}