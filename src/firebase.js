import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDenyOkQtxXfqNXj90p21mXhZk8du47uZw",
  authDomain: "mundochat-e9416.firebaseapp.com",
  projectId: "mundochat-e9416",
  storageBucket: "mundochat-e9416.appspot.com",
  messagingSenderId: "296599995832",
  appId: "1:296599995832:web:761130e2f45fbac5273b4d",
}).auth();
