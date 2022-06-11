import React, { createContext, useState, useEffect } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, listenAuth);
  }, []);

  const listenAuth = async (userState) => {
    setUser(auth.currentUser);
    setLoading(false);
  };

  
  const signIn = async ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log('Firebase authentication response:', userCredential.user);
        setUser(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("firebase auth error", errorCode, errorMessage);
      });
  };

  const signOut = async () => {
    signOutFirebase(auth)
      .then(() => {
        console.log("signOut");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("firebase auth error", errorCode, errorMessage);
      });
  };

  const register = async ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log(user);
       // banco(password, user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("firebase auth error", errorCode, errorMessage);
      });
  };

  return (
    <UsuarioContext.Provider value={{ register ,user, loading, signIn, signOut }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };

