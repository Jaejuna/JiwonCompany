import React from 'react';
//have to check out what useRef is 
import { useRef, useState } from 'react';
import { logout, login, signup, useAuth } from "../env/config";

const SignUp = () => {
  const [ loading, setLoading] = useState(false);
  const currentUser = useAuth();

  //used useRef to get value from front realtime I guess
  const emailRef = useRef();
  const passwordRef = useRef();

  //async & await 'cause it's calling api (he said have to search for it)
  //signup password have to be longer than 6 chars
  async function handleSignUp(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Sign up fail!");
    }
    setLoading(false);
  }

  async function handleLogin(){
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Login fail!");
    }
    setLoading(false);
  }

  async function handleLogout(){
    setLoading(true);
    try {
        logout();
    }catch{
        alert('logout fail!');
    }
    setLoading(false);
  }

  // currentUser? for the delay from server delivering email data 
  
    return (
        <>
            <div>
                <div>Currently logged in as : {currentUser?.email}</div>
                <input placeholder='Email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <button disabled={loading || currentUser } onClick={handleSignUp}>Sign Up</button>
            <button disabled={loading || currentUser } onClick={handleLogin}>Log In</button>
            <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
        </>
    );
};

export default SignUp;