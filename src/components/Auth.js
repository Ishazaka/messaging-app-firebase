import React from 'react';
import  {auth, provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import '../styles/Auth.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function Auth({setIsAuth}) {

  const signInWithGoogle = async () => {
    try{
        const result =  await  signInWithPopup(auth, provider);
        cookies.set("auth-token" , result.user.refreshToken);
        setIsAuth(true)
     console.log(result)
    }catch(err){
        console.error(err)
    }

  }


  return (
    <div className='auth'>
  <p>Sign In with Google To Continue</p>
  <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Auth