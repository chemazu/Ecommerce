import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = React.createContext({})

export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider(children:any) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // function signup(email:any, password:any) {
  //     return createUserWithEmailAndPassword(email, password)
  //   }

  function signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;

        if (user.uid) {
          alert(`Hi ${firstName},your account has been created`);

          //get the data for the user
          const { uid, metadata } = user;

          // get the creation time of the account
          const { creationTime } = metadata;

          //add user to db
          //   addData("users", {
          //     displayName: `${firstName} ${lastName}`,
          //     email,
          //     uid,
          //     creationTime,
          //   });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  const value = {
    currentUser,
    // login,
    signup,
    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
