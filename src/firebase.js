import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
        apiKey: "AIzaSyCF9AiFbQWPZDl-bi2Sv3_XDIXZrp_cbVk",
        authDomain: "svelte-todo-a9211.firebaseapp.com",
        databaseURL: "https://svelte-todo-a9211.firebaseio.com",
        projectId: "svelte-todo-a9211",
        storageBucket: "svelte-todo-a9211.appspot.com",
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
