// --------------------------FAIREBASE LOGIN SETUP ----------------------


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCrsO7wk0lqUfnOlwaeBSDXyicVHgJFF_c",
    authDomain: "dckap-agricart-2024.firebaseapp.com",
    projectId: "dckap-agricart-2024",
    storageBucket: "dckap-agricart-2024.appspot.com",
    messagingSenderId: "135220583467",
    appId: "1:135220583467:web:dbaf745d728c6ef1a31e6e"
  };

  import { getFirestore, collection, doc, setDoc, getDocs ,getDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import {getAuth ,signInWithEmailAndPassword , sendPasswordResetEmail , GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var auth = getAuth(app)
var db = getFirestore();
var ref = collection(db,"user")
var provider = new GoogleAuthProvider();
auth.languageCode = 'en';


var LoginCondainer = document.getElementById("LoginmaincondinerCall");
var ForgetPWordCondainer = document.getElementById("forgetloginContainerCall");
var continueBtn = document.getElementById("forgetBtn");
var SignUpBtn = document.getElementById("singinBTn");
var GoogleIcon = document.getElementById("GoogleIcon");

var RegEmail = document.getElementById("mailDetailes");
var RegPassword = document.getElementById("pwordDetailes");
var ForgetEmail = document.getElementById("forgetinput");


var ForgetNavPara = document.getElementById("ForgetNav");
var backTOLoginPara = document.getElementById("forgetbackpageLink");
var continueBtn = document.getElementById("forgetBtn");


ForgetNavPara.addEventListener("click",()=>{

    LoginCondainer.classList.remove("ContainerView");
    ForgetPWordCondainer.classList.add("ContainerView");

});

backTOLoginPara.addEventListener('click',()=>{

    ForgetPWordCondainer.classList.remove("ContainerView");
    LoginCondainer.classList.add("ContainerView");

});
continueBtn.addEventListener("click",()=>{

  
})


// -----------------------------------------SIGNUP BUTTON ------------------------------------------------------------


// ----------------------------------------------------------CONFORMPASSWORD BUTTON - -----------------------



    

SignUpBtn.addEventListener("click",()=>{
console.log("Test")
signInWithEmailAndPassword(auth,RegEmail.value,RegPassword.value)
.then(async(credential)=>{
    alert("SUCESSFULLY LOGINED")
    console.log(credential.user);
    localStorage.setItem("usercollation",JSON.stringify(credential.user));
    location.href = "index.html"
})
.catch((err)=>{
    alert("INVALID USER")
})

})

var ForgetPword = () =>{

    sendPasswordResetEmail(auth,ForgetEmail.value)
    .then(()=>{
    alert("A Password Reset Link has sent to your email");
    LoginCondainer.classList.add("ContainerView");
    ForgetPWordCondainer.classList.remove("ContainerView");

    })
    .catch((error)=>{
        console.log(error.code);
        console.log(error.message)
    })
}

continueBtn.addEventListener("click",ForgetPword)


var googleSign = ()=>{

    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user.email,user.uid)
    localStorage.setItem( "usercollation" ,JSON.stringify(user.email,user.uid))
      location.href = "index.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
}
GoogleIcon.addEventListener("click",googleSign);
