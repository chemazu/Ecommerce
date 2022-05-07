import * as React from "react";
import app from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { AuthContextType, Api } from "../@types/auth.d";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = React.createContext<AuthContextType | null>(null);
const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const auth = getAuth();
  // const [currentUser, setCurrentUser] = React.useState<Api>(JSON.parse(localStorage.getItem(("LoggedIn")) || '{}'));
  const [loading, setLoading] = React.useState(true);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const addData = async (
    dbname: string,
    data: { name: any; email: any; uid: string; creationTime: any }
  ) => {
    try {
      const docRef = await addDoc(collection(db, dbname), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signup = async (name: string, email: any, password: any) => {
    try {
      const data = (await createUserWithEmailAndPassword(auth, email, password))
        .user;
      const { uid, metadata } = data;
      const { creationTime } = metadata;
      addData("user", { name, email, uid, creationTime });
      localStorage.setItem("LoggedIn", JSON.stringify(uid));
      return data;
    } catch (e) {
      console.error("Error in Registering customer ", e);
    }
  };

  async function login(email: any, password: any) {
    try {
      const data = (await signInWithEmailAndPassword(auth, email, password))
        .user;
      const { uid } = data;
      localStorage.setItem("LoggedIn", JSON.stringify(uid));
      return data;
    } catch (e) {
      console.error("Error in Registering customer ", e);
    }
  }
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.

        const { displayName, email, uid, photoURL, metadata } = result.user;
        const { creationTime } = metadata;

        addData("users", { name: displayName, email, uid, creationTime });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  function logout() {
    localStorage.removeItem("LoggedIn");
    return signOut(auth);
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { signup, loading, login, logout, signInWithGoogle };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
