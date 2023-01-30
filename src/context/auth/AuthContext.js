/**
@file AuthContextProvider.js
@author
@desc A React component that provides authentication context using Firebase.
@requires React, createContext, useState, useEffect
@requires firebase/auth signInWithEmailAndPassword, onAuthStateChanged
@requires auth from "../../firebase"
@requires Spinner from "../../components/Spinner"
*/

import React, { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Spinner from "../../components/Spinner";

console.log(auth);

/**
@constant AuthContext
@desc The context object that will be passed to child components.
*/
export const AuthContext = createContext();

/**
@function AuthContextProvider
@param {object} props
@desc The main component that provides authentication context to its children.
@returns {JSX.Element}
*/
export function AuthContextProvider({ children }) {
  const signIn = async (email, pwd) => {
    /** 
 Signs in the user with email and password using Firebase authentication.
 @function signIn
 @param {string} email
 @param {string} pwd
 @returns {void}
*/
    await signInWithEmailAndPassword(auth, email, pwd);
  };
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  /**
@effect
@desc Listens to changes in authentication state using Firebase and updates the current user.
*/
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  if (loadingData) {
    return <Spinner />;
  }

  const value = {
    signIn,
    currentUser,
  };

  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
