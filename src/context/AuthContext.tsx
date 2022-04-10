import * as React from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebase"
import { AuthContextType, Api } from '../@types/auth.d';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  
} from "firebase/auth";
 
export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = React.useState< Api>({uid:""});
  const [loading, setLoading] = React.useState(true)
  const db = getFirestore(app);

  const addData = async (name: string, data: {name:string,email:any}) => {
    console.log(data.email)
    try {
      const docRef = await addDoc(collection(db, name), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signup = async(name:string ,email:any, password:any) =>{
    const data = await (await createUserWithEmailAndPassword(auth,email, password)).user
    addData("user",{name,email})
    return data
  } 

  function login(email:any, password:any) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout() {
    localStorage.removeItem('LoggedIn');
    return signOut(auth)
  }

  React.useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user:any)=>{
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  },[])

  // function resetPassword(email:any) {
  //   return sendPasswordResetEmail(auth,email)
  // }

  // function updateEmail(email:any) {
  //   return updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }
 
 

  // const updateTodo = (id: number) => {
  //   todos.filter((todo: ITodo) => {
  //     if (todo.id === id) {
  //       todo.status = true;
  //       setTodos([...todos]);
  //     }
  //   });
  // };
 
 

  return <AuthContext.Provider value={{ signup,currentUser,loading,login,logout }}>  {!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
