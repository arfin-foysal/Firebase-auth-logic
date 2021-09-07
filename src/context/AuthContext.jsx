import React,{ useContext,useEffect,useState  } from "react";
import "../firebase"
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,onAuthStateChanged}
   from "firebase/auth"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

 
 export function AuthProvider({children}) {
   const [loding, setloding] = useState(true)
   const [currentUser, setcurrentUser] = useState()

   
   useEffect(() => {
     const auth=getAuth()
   const =  onAuthStateChanged(auth,(user)=>{
       setcurrentUser(user)
       setloding(false)
     })
    return unsubscribe  ;     
   }, [])



  //  signup
  async function signup(email,password,username) {
    const auth=getAuth();
    await createUserWithEmailAndPassword(auth,email,password)

    await updateProfile(auth.currentUser,{displayName:username
    
    })
   const user= auth.currentUser;
   setcurrentUser({
     ...user,
   })
    
  }

  // login

  function login(email,password) {
   const auth=getAuth();
   return signInWithEmailAndPassword(auth,email,password) 
  }

  function logout() {
    const auth=getAuth()
    return signOut(auth)
  }

  const value={
    currentUser,
    signup,
    login,
    logout
  }

   return (
     <div>
       <AuthContext value={value}>
         { !loding && children}
       </AuthContext>
     </div>
   )
 }
 

 



