import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import app from "../Auth/Firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserPayload,
  userPayload,
 
} from "../../Redux/PaylodeAction/PaylodeAction";

export const AuthContext = createContext();
const auth = getAuth(app);
const Provider = new GoogleAuthProvider()


const UserContext = ({ children }) => {
  const [loder, setLoder] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const userEmail = state?.user?.email;
  console.log(state);

  // sign up
  const signup = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logOut = () => {
    setLoder(true);
    return signOut(auth);
  };
  // log in
  const logIn = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google auth
  const google=()=>{
    return signInWithPopup(auth ,Provider)
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (creatures) => {
      setLoder(false);
      dispatch(userPayload(creatures));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    fetch(`https://store-ko-sserver.vercel.app/user?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => dispatch(GetUserPayload(data)));
  }, [userEmail , dispatch]);

  const authInfo = { loder, signup, logIn, logOut , auth , google };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
