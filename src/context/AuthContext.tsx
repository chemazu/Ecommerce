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
  const [currentUser, setCurrentUser] = React.useState<Api>({ uid: "" });
  const [loading, setLoading] = React.useState(true);
  const db = getFirestore(app);
  const addData = async (name: string, data: { name: string; email: any,uid:string,creationTime:any }) => {
    console.log(data.email);
    try {
      const docRef = await addDoc(collection(db, name), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signup = async (name: string, email: any, password: any) => {
    const data = await (
      await createUserWithEmailAndPassword(auth, email, password)
    ).user;
    const { uid, metadata } = data
    const { creationTime } = metadata;
    addData("user", { name, email,uid,creationTime });
    return data;
  };
  function getLoggedIn(item:string){
    console.log(item)
    return item
  }
  function login(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    localStorage.removeItem("LoggedIn");
    return signOut(auth);
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { signup, currentUser, loading, login, logout,getLoggedIn };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
