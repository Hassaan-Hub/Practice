import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged ,
    sendEmailVerification 
} 
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTYO_2j7fmlTSofaHTmkpta1ckM7B4Hro",
    authDomain: "my-first-project-d9a04.firebaseapp.com",
    projectId: "my-first-project-d9a04",
    storageBucket: "my-first-project-d9a04.firebasestorage.app",
    messagingSenderId: "857518158920",
    appId: "1:857518158920:web:6f6bd4d1bb37062fe1547d",
    measurementId: "G-2BVM55BVS7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged ,
    sendEmailVerification 
 }