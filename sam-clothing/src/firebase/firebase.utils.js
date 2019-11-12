 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth'

 const config = {
     apiKey: "AIzaSyCl-Ym3URXYz57BaSDHHPp5jlsAFTOgkvQ",
     authDomain: "sams-clothing.firebaseapp.com",
     databaseURL: "https://sams-clothing.firebaseio.com",
     projectId: "sams-clothing",
     storageBucket: "sams-clothing.appspot.com",
     messagingSenderId: "921944359125",
     appId: "1:921944359125:web:520f0f287d66f069b5e25c",
     measurementId: "G-3920F78T9H"
 }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({
     prompt: 'select_account'
 });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;