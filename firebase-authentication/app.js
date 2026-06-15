import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
}
    from "./firebase.js";

const sEmail = document.getElementById('sEmail');
const sPassword = document.getElementById('sPassword');
const signupBtn = document.getElementById('signup');

signupBtn.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, sEmail.value, sPassword.value)
        .then((res) => {
            const user = res.user;
            console.log(user);
            sEmail.value = '';
            sPassword.value = '';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            sEmail.value = '';
            sPassword.value = '';
        });
})



const lEmail = document.getElementById('lEmail');
const lPassword = document.getElementById('lPassword');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, lEmail.value, lPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            lEmail.value = '';
            lPassword.value = '';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            lEmail.value = '';
            lPassword.value = '';
        });
})





onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in");

        console.log("Email:", user.email);
        console.log("UID:", user.uid);

        // optional provider info
        user.providerData.forEach((profile) => {
            console.log("Provider:", profile.providerId);
            console.log("Name:", profile.displayName);
        });
    } else {
        console.log('No user login');
    }
});



const vEmailBtn = document.getElementById('vEmailBtn');

vEmailBtn.addEventListener('click', () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log(true);
        });
})