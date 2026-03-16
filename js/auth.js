import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail

} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.signupUser=function(){

let email=document.getElementById("signupEmail").value;
let pass=document.getElementById("signupPass").value;

createUserWithEmailAndPassword(auth,email,pass)

.then(()=>{

document.getElementById("signupMsg").innerHTML="Signup successful";

setTimeout(()=>{

window.location="login.html";

},1500)

})

.catch(e=>alert(e.message))

}

window.loginUser=function(){

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,pass)

.then(()=>{

document.getElementById("msg").innerHTML="Login successful";

setTimeout(()=>{

window.location="dashboard.html";

},1500)

})

.catch(e=>alert(e.message))

}

window.resetPassword=function(){

let email=document.getElementById("resetEmail").value;

sendPasswordResetEmail(auth,email)

.then(()=>{

document.getElementById("resetMsg").innerHTML="Reset email sent"

})

.catch(e=>alert(e.message))

}
