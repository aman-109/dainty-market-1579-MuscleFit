import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyDPW6T6BBFpJBjaLbJYsM8gk-OK4o8l37k",
    authDomain: "authentication-musclefit.firebaseapp.com",
    projectId: "authentication-musclefit",
    storageBucket: "authentication-musclefit.appspot.com",
    messagingSenderId: "800267254422",
    appId: "1:800267254422:web:c1f7385d82398b38b060b7"
  };
  
const app=initializeApp(firebaseConfig);  
export const auth=getAuth(app)
export default app


// const provider=new GoogleAuthProvider();


//  export const signInwithGoogle=()=>{

//   signInWithPopup(auth,provider).then((result)=>{
//     console.log(result)
    
//   }).catch((error)=>{
//     console.log(error)
//   })
  
 


