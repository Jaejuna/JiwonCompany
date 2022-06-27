import React from 'react';
//have to check out what useRef is 
import { useRef, useState } from 'react';
import { signup } from "../env/config";

const SignUp = () => {
  const [ loading, setLoading] = useState(false);

  //used useRef to get value from front realtime I guess
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Sign up fail!");
    }
    setLoading(false);
  }

  // watch the vid from 10:38
  
    return (
        <>
            <div>
                <input placeholder='Email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <button disabled={loading} onClick={handleSignUp}>Sign Up</button>
        </>
    );
};

export default SignUp;