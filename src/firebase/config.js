import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIM0RG2igyJfCuO3IOvaIo5AqBh-a7Fsc",
  authDomain: "cooking-ninja-site-b41bc.firebaseapp.com",
  projectId: "cooking-ninja-site-b41bc",
  storageBucket: "cooking-ninja-site-b41bc.appspot.com",
  messagingSenderId: "491963441662",
  appId: "1:491963441662:web:594d0198e88694241c60af"
};

// init firebae

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };