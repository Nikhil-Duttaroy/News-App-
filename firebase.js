// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2JUXEvq4kmBLTRrdWVRtyCzKdj9n06qA",
  authDomain: "test-5581f.firebaseapp.com",
  databaseURL: "https://test-5581f-default-rtdb.firebaseio.com",
  projectId: "test-5581f",
  storageBucket: "test-5581f.appspot.com",
  messagingSenderId: "417274605151",
  appId: "1:417274605151:web:10c4dd1f828f31742735ea",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
