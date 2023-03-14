import React, { createContext, useState } from "react";


export const AuthContext = createContext();


const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);
  const [loding, setLoding] = useState(true);
  const [usersType, setUsersType] = useState(true);
  // sign up
  // const signup=(email , password)=>{
  //   setLoder(true)
  //   return createUserWithEmailAndPassword(auth , email , password)
  // }
  // sign out
  // const logOut=()=>{
  //   setLoder(true)
  //   return signOut(auth)
  // }
  // log in
  // const logIn=(email , password)=>{
  //   setLoder(true)
  //   return signInWithEmailAndPassword(auth , email , password)
  // }
  // login with google
  // const loginGoogle=()=>{
  //   setLoder(true)
  //   return signInWithPopup(auth , provider)
  // }

  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChanged(auth , creatures =>{
  //     setLoder(false)
  //     setUser(creatures)
  //   })
  //   return ()=>{
  //     unsubscribe()
  // }
  // },[])

  const authInfo = { user, loder, loding, setLoding, setUsersType };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
