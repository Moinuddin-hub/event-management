import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword ,signInWithEmailAndPassword
,signOut,onAuthStateChanged,updateProfile} from "firebase/auth";
import { auth } from '../../firebaseConfig';

export const AuthContext=createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState({})
  const [waiting,setWaiting]=useState(true)

// GoogleLogin
const googleLogin=()=>{
    setWaiting(true)
   return signInWithPopup(auth, googleProvider);
}
// SingUp
const singUp=(email,password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}
// Login
const singIn=(email,password)=>{
 return  signInWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
      setUser(user);
      setWaiting(false)
  });
},[])
// LogOut
const logOut = () => {
  return signOut(auth)
}
// UpdateProfile
const UpdateProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
  })
}

const AuthInfo={
googleLogin,
singUp,
singIn,
user,
logOut,
UpdateProfile,
waiting,


}




    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;