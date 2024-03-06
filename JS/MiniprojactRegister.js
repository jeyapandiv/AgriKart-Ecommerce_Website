// ------------------------------FAIRBASE ------------------------------------
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

  import { getFirestore, collection, doc, setDoc, getDocs, updateDoc, addDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import {getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

var auth = getAuth(app);
var db = getFirestore();

var ref = collection(db,"user")
var getData = await getDocs(ref)
var id = getData.size

// ------------CONTAINERS --------------------------------------

var     ResgisterContainer = document.getElementById("RegistermaincondainerCall");
var     OTPConadiner = document.getElementById("OTPmaincondainerCall");

// -------------------------------INPUT TAGS ---------------------------------------

var RegFirstName = document.getElementById("fisrstName");
var RegSecodName = document.getElementById("lastname");
var RegContNum = document.getElementById("Continfo");
var RegEmail = document.getElementById("emailinfo");
var RegPassword = document.getElementById("pwordinfo");
var RegBtn = document.getElementById("RegisterBtn");
var InputTag = document.querySelectorAll("input");
var RegFormSubmit = document.getElementById("RegisterSingnupForm");


// --------------------------------(SPAN TAG)- ALERT MESSAGE TAG----------------------------

var RegFirstNameAlert = document.getElementById("RegNameAlert");
var RegLastNameAlert = document.getElementById("RegLastAlert");
var RegContactAlert = document.getElementById("RegContAlert");
var RegEmailAlert = document.getElementById("RegEmailAlert");
var RegPwordAlert = document.getElementById("RegPwordAlert");

// ------------------------------------ALERT Function ---------------------------------


RegFormSubmit.addEventListener("submit",async(event)=>{

    event.preventDefault();
    
var trimFn = RegFirstName.value.trim()
var trimsnmae = RegSecodName.value.trim()
var trimCont = RegContNum.value.trim()
var trimEm = RegEmail.value.trim()
var trimPwo = RegPassword.value.trim()



if(!(trimFn=="" || trimCont=="" || trimEm=="" || trimPwo=="")){

    var RegEmailValue = RegEmail.value.trim();
    var onetimepword = Math.floor(Math.random() * 1000000);

    var emailcont = `
                     <h1> Verification code </h1><br><br>
                          <h3>  Please use the verification code below to sign in.</h3>
                          <h1> OTP : ${onetimepword} </h1> 
                          <h3>If you didn’t request this, you can ignore this email.</h3>
                     `;

    Email.send({

        SecureToken: "a6aa1f14-cdbb-4150-b0e3-922df97b535e",
        To: RegEmailValue,
        From: "dckapagricart2024@gmail.com",
        Subject: "This is the subject",
        Body: emailcont

    }).then(
        message => {
            if (message === "OK") {
                alert("OTP send your email :" + RegEmailValue)
                console.log(onetimepword)

                ResgisterContainer.classList.remove("ConTainerView");
                OTPConadiner.classList.add("ConTainerView")


                var MailVerfy = document.getElementById("MailverifyBtn");

                MailVerfy.addEventListener("click", () => {

                    var otbNum1 = document.getElementById("otbum1").value;

                    var OTPInnerValue = otbNum1 ;

                    console.log(OTPInnerValue)

                    if (onetimepword == OTPInnerValue) {

                        alert("Email addresss verified")

                        location.href = "Login.html"
                    }
                    else {
                        alert("Invalid OTP")

                    }
                })

            }
        }
    );

    }

// --------------------------------REGEXP ----------------------

if(trimFn==""){

    RegFirstName.classList.add("RegborderAlert");
}

if(trimCont==""){
    RegContNum.classList.add("contAlertBox");
}

if(trimEm==""){
    RegEmail.classList.add("emailAlretBox"); 
}

if(trimPwo==""){

    RegPassword.classList.add("pssworAlertBox");
}
// ----------------------------------FAIRBASE TRIGGER SESSION------------------------------------------------------


    createUserWithEmailAndPassword(auth,RegEmail.value,RegPassword.value)
.then(async(credentials)=>{   
    
    let ref = doc(db,"user",credentials.user.uid)
       await setDoc(ref,{
        FirstName:RegFirstName.value,
        LastName:RegSecodName.value,
        contact:RegContNum.value,
        email:RegEmail.value,
        password:RegPassword.value
       
         });
    
})
.catch((err)=>{
    alert(err.message)
    
});


});


// ------------------------------------FIRST NAME -----------------------------------------------

RegFirstName.addEventListener("change",()=>{

   var RegFirstNameValue = RegFirstName.value.trim()
    var RegNumtest= /\d/ig;
    var RegNumResult = RegNumtest.test(RegFirstNameValue);

if(RegNumResult){
    RegFirstNameAlert.classList.add("RegContainerView");
    RegFirstName.classList.add("RegborderAlert");
}else{

    RegFirstNameAlert.classList.remove("RegContainerView");
    RegFirstName.classList.remove("RegborderAlert");
}

})

// --------------------------------------SECOND NAME ------------------------------------------

// RegSecodName.addEventListener('change',()=>{

//     var RegSecodNameValue =  RegSecodName.value.trim()
// var Reg2NDNameNumTest = /\d/ig;
// var Reg2NDNameNumResult = Reg2NDNameNumTest.test(RegSecodNameValue);

// if( Reg2NDNameNumResult){
    
//     RegLastNameAlert.classList.add("SecondNameView");
//     RegSecodName.classList.add("secondnameAlert");
// }
// else{

//     RegLastNameAlert.classList.remove("SecondNameView");
//     RegSecodName.classList.remove("secondnameAlert");
// }
// })

// // ---------------------------------------------------------CONTACT REGEXP------------------------

RegContNum.addEventListener("change", () => {

    RegContNum.classList.remove("contAlertBox");
    var RegContNumValue = RegContNum.value.trim();
    var Contact = /\d/ig;
    var MustContact = RegContNumValue.length;
    var RegContactTest = Contact.test(RegContNumValue);

    if (!(RegContactTest && MustContact == 10)) {
        RegContactAlert.classList.add("RegAlertView");
        RegContNum.classList.add("contAlertBorder");
    } else {
        RegContactAlert.classList.remove("RegAlertView");
        RegContNum.classList.remove("contAlertBorder");
    }
});

//------------------------------------------------------EMAIL VALIDATION---------------------------------------

var EmailToolTip = document.getElementById("EmailToolTipCall");

RegEmail.addEventListener("keyup", () => {
    RegEmail.classList.remove("emailAlretBox"); 
    EmailToolTip.classList.add("emilTooltipView")
    var RegEmailValue = RegEmail.value.trim();
    var SpicalCharacter = /@+\w/gi;
    var LetterMust = /[a-z]/g;
    var COM = /\.com$/gi; 
    var capital = /[A-Z]/g
    var Flack = false;

    var SpicalCharacterResult = SpicalCharacter.test(RegEmailValue);
    var LetterMustResult = LetterMust.test(RegEmailValue);
    var comResult = COM.test(RegEmailValue);

    var spcialchar = document.getElementById("emailCharLI");
    var EmailAlpha = document.getElementById("emailAlphaLI");
    var EndCondition = document.getElementById("emailEndLI");
    var EmailCaptial = document.getElementById("emailCaptial")

  
if(SpicalCharacterResult){
    spcialchar.classList.remove("fa-user-xmark");
    spcialchar.classList.add("fa-user-check");
}
else {
    spcialchar.classList.add("fa-user-xmark");
    spcialchar.classList.remove("fa-user-check");
}
if(LetterMustResult){
    EmailAlpha.classList.remove("fa-user-xmark")
    EmailAlpha.classList.add("fa-user-check");
}

else {
    EmailAlpha.classList.add("fa-user-xmark")
    EmailAlpha.classList.remove("fa-user-check");
}
if(comResult){
    EndCondition.classList.remove("fa-user-xmark");
    EndCondition.classList.add("fa-user-check");
}
else{
    EndCondition.classList.add("fa-user-xmark");
    EndCondition.classList.remove("fa-user-check");
}

if(!(RegEmailValue.match(capital))){
    var Flack = true;
    EmailCaptial.classList.remove("fa-user-xmark");
    EmailCaptial.classList.add("fa-user-check");
}
else{
    EmailCaptial.classList.add("fa-user-xmark");
    EmailCaptial.classList.remove("fa-user-check"); 
}

if(spcialchar.classList.contains("fa-user-check") &&EmailAlpha.classList.contains("fa-user-check")  &&  
EndCondition.classList.contains("fa-user-check") && EmailCaptial.classList.contains("fa-user-check")){
console.log("hi")

    EmailToolTip.classList.remove("emilTooltipView")
}

});

// ------------------------------Tool Tip------------------------------------

var PwordToolTip = document.getElementById("PwordToolTip");

RegPassword.addEventListener("keyup",()=>{
    RegPassword.classList.remove("pssworAlertBox");
    PwordToolTip.classList.add("ToolTipView");
    var RegPassWordValue = RegPassword.value.trim()
    
    var PwordNumMust = /[0-9]/gi;
    var PwordLetterMust = /[a-z]/gi
    var PwordSpcialChhar = /\W/gi
    
    var PwordNumMustResult = PwordNumMust.test(RegPassWordValue)
    var PwordLetterMustResult = PwordLetterMust.test(RegPassWordValue)
    var PwordSpcialChharResult = PwordSpcialChhar.test(RegPassWordValue)



var NumLi = document.getElementById("NumChcekLi");
var SpcialLi = document.getElementById("SpacialLi");
var Alpha = document.getElementById("AlphaLi");

var NumSpan = document.getElementById("NumCheckSpan");
var SpciaSpan = document.getElementById("SpcailSpan");
var AlphaSpan = document.getElementById("AlphaSpan")
var LengSpan = document.getElementById("Length");

if(PwordNumMustResult){
    NumLi.classList.remove("fa-user-xmark");
    NumLi.classList.add("fa-user-check");
}
else{
    NumLi.classList.add("fa-user-xmark");
    NumLi.classList.remove("fa-user-check");
}
if(PwordLetterMustResult){
    Alpha.classList.remove("fa-user-xmark")
    Alpha.classList.add("fa-user-check")
}
else{
    Alpha.classList.add("fa-user-xmark")
    Alpha.classList.remove("fa-user-check")
}
  
if(PwordSpcialChharResult){
    SpcialLi.classList.remove("fa-user-xmark")
    SpcialLi.classList.add("fa-user-check")
}
else{
    SpcialLi.classList.add("fa-user-xmark")
    SpcialLi.classList.remove("fa-user-check")
}
if(RegPassWordValue.length >= 8){
    LengSpan.classList.add("fa-user-check");
    LengSpan.classList.remove("fa-user-xmark")
}
else{
    LengSpan.classList.remove("fa-user-check");
    LengSpan.classList.add("fa-user-xmark") 
}
if(  NumLi.classList.contains("fa-user-check") &&Alpha.classList.contains("fa-user-check") &&  
SpcialLi.classList.contains("fa-user-check") &&  LengSpan.classList.contains("fa-user-check")){
    
    PwordToolTip.classList.remove("ToolTipView");
   
}

  })

