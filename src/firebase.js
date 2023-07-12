import React from 'react'
import firebase from 'firebase/compact/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDvQel61tn1_t-dFCTRgyllNOadYH66S8",
    authDomain: "insta-clone-b6c91.firebaseapp.com",
    projectId: "insta-clone-b6c91",
    storageBucket: "insta-clone-b6c91.appspot.com",
    messagingSenderId: "546907562238",
    appId: "1:546907562238:web:2a15828ef662ccdcad85af"
  };

  const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const storage = firebase.storage()

const db = app.firestore()


 

export {auth,db,storage}