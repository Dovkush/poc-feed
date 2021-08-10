import React, { useEffect, useState } from 'react'
import { fbApp } from '../../utils/fbApp';
export const AuthContext=React.createContext();

function AuthProvider(props) {
    const [currentUser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);
    function signUp(email,password){
      return  fbApp.auth().createUserWithEmailAndPassword(email,password);
    }
    function logOut(){
     return fbApp.auth().signOut();
    }
    function logIn(email,password){
      return fbApp.auth().signInWithEmailAndPassword(email,password);
    }
    useEffect(()=>{
        let unsub=fbApp.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsub;
    })
    let value={
        currentUser,
        signUp,
        logOut,
        logIn,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading&&props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
