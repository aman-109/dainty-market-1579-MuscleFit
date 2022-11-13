import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import { useEffect } from "react";
import { auth } from "../Pages/firebase-config";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    email: "amanmandjasdjl@gmail.com",
    photoURL: "https://www.jefit.com/images/noProfilePic220.png",
  });
  /* console.log(user.email) */
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function facebookSignIn() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUp, logIn, logOut, googleSignIn, facebookSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
