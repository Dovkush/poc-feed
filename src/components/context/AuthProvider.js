import React, { useState } from 'react'
export const AuthContext=React.createContext();
function AuthProvider(props) {
    const [currentUser,setCurrentUser]=useState();
    
    function signUp(email,password){
       
    }
    function logOut(){

    }
    function logIn(email,password){

    }
    let value={
        currentUser,
        signUp,
        logOut,
        logIn,
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
