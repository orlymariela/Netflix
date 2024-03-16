import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase"
import { setDoc, doc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';

const AuthCotenxt = createContext()
export function AuthCotenxtProvider({children}){
    const [user, setUser] = useState({})

    function signUp(email, password){
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })

    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);

    }
    function logOut() {
        return signOut(auth);
      }    

    useEffect(()=> {
        const unSuscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        });
        return () =>{
            unSuscribe()

        } 

    })


    return (
        <AuthCotenxt.Provider value={{signUp,logOut, logIn, user}}>
            {children}
        </AuthCotenxt.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthCotenxt)

}