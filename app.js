import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import { getAuth, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js"
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA73znh-qVvyLiMhEsLWPvz7EVgu6U3FXc",
  authDomain: "hackathone-70e27.firebaseapp.com",
  projectId: "hackathone-70e27",
  storageBucket: "hackathone-70e27.appspot.com",
  messagingSenderId: "855403724571",
  appId: "1:855403724571:web:349c7597e2e49575b4ddbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


let loginBtn = document.getElementById('loginBtn')
let lg_btn = document.getElementById('lg_btn')
// let inputValues = document.getElementsByClassName('inputValues')
let email = document.getElementById('email');
let password = document.getElementById('password')

loginBtn?.addEventListener('click', handleLogin)
lg_btn?.addEventListener('click' ,handlelogout)

async function handleLogin() {
    try {
      const res= await signInWithEmailAndPassword(auth, email.value, password.value)
      console.log(res.user)
      window.location = "./Dashboard/index.html"
    } catch (error) {
      const errorCode = error.code
      console.log(errorCode)
    }
  }

async function handlelogout(){
    console.log(errorCode)
       await signOut(auth)
      window.location = "../index.html"
}