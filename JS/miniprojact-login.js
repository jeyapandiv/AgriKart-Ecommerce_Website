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

  import { getFirestore, collection, doc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import {getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var auth = getAuth(app)













var LoginCondainer = document.getElementById("LoginmaincondinerCall");
var ForgetPWordCondainer = document.getElementById("forgetloginContainerCall");
var continueBtn = document.getElementById("forgetBtn");
var ConnformCondainer = document.getElementById("confarmpasswordConntainerCall");
var OTPCondainer = document.getElementById("OTPmaincondainerCall");
var ResertPword = document.getElementById("reesertBtn");
var VerifyEmailSpan = document.getElementById("verifyEmail");
var VerifyPwordSpan = document.getElementById("VerifyPword");
var SignUpBtn = document.getElementById("singinBTn");



var RegEmail = document.getElementById("mailDetailes");
var RegPassword = document.getElementById("pwordDetailes");



var ForgetNavPara = document.getElementById("ForgetNav");

var backTOLoginPara = document.getElementById("forgetbackpageLink");

var  ResetPWordBtn = document.getElementById("reesertBtn");

var continueBtn = document.getElementById("forgetBtn");

var VerfyBtn = document.getElementById('verifyBtn');

ForgetNavPara.addEventListener("click",()=>{

    LoginCondainer.classList.remove("ContainerView");
    ForgetPWordCondainer.classList.add("ContainerView");

});

backTOLoginPara.addEventListener('click',()=>{

    ForgetPWordCondainer.classList.remove("ContainerView");
    LoginCondainer.classList.add("ContainerView");

});

continueBtn.addEventListener("click",()=>{

    LoginCondainer.classList.remove("ContainerView");
    ForgetPWordCondainer.classList.remove("ContainerView");
    OTPCondainer.classList.add("ContainerView");
    ResertPword
});

VerfyBtn.addEventListener("click",()=>{

    LoginCondainer.classList.remove("ContainerView");
    ForgetPWordCondainer.remove("ContainerView");
    OTPCondainer.classList.remove("ContainerView");
    ConnformCondainer.classList.add("ContainerView");
});



// -----------------------------------------SIGNUP BUTTON ------------------------------------------------------------


// ----------------------------------------------------------CONFORMPASSWORD BUTTON - -----------------------

var FirstPword = document.getElementById("newpasswordinput");
var SecondpWORD = document.getElementById('conformpwordinput');

var ComFormAlert = document.getElementById("conformPwordAlert");

ConnformCondainer.addEventListener("keyup",()=>{

var SecondpWORDValue = FirstPword.value.trim()
var FirstPwordVlaue = SecondpWORD.value.trim()



console.log(SecondpWORDValue,FirstPwordVlaue);


console.log(ComFormAlert)

if(!(SecondpWORDValue == FirstPwordVlaue)){

    FirstPword.classList.add("BorederInputColor")
    SecondpWORD.classList.add("BorederInputColor")
    ComFormAlert.classList.add("View")

}
else{

    FirstPword.classList.remove("BorederInputColor")
    SecondpWORD.classList.remove("BorederInputColor")
    ComFormAlert.classList.remove("View")
}

});

ResertPword.addEventListener("click",()=>{

    LoginCondainer.classList.add("ContainerView");
    ForgetPWordCondainer.remove("ContainerView");
    OTPCondainer.classList.remove("ContainerView");
    ConnformCondainer.classList.remove("ContainerView");
    
    console.log("hi")
    })
    

SignUpBtn.addEventListener("click",()=>{
     
signInWithEmailAndPassword(auth,RegEmail.value,RegPassword.value)
.then((credential)=>{
    alert("SUCESSFULLY LOGINED")
    location.href = "index.html"
})
.catch((err)=>{
    alert("INVALID USER")
})

})