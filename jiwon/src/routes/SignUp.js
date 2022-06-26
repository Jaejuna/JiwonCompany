import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const firebase = require('firebase');
const firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
const Ui = () => (
    new firebaseui.auth.AuthUI(firebase.auth())
);

const SignUp = () => {
    return (
        <>
            <div>
                <Ui/>
                This is SignUp
            </div>
        </>
    );
};

export default SignUp;