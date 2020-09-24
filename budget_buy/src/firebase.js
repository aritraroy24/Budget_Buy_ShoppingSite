import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCAb_Upi7R3qUPTJiF4CAeSZ6VeJdmRThA",
  authDomain: "budgetbuy-3f9e4.firebaseapp.com",
  databaseURL: "https://budgetbuy-3f9e4.firebaseio.com",
  projectId: "budgetbuy-3f9e4",
  storageBucket: "budgetbuy-3f9e4.appspot.com",
  messagingSenderId: "79288221771",
  appId: "1:79288221771:web:b797b3d1c65b5ed0950dce",
  measurementId: "G-X6QR6MZHNF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };