
// -------------------------------INPUT TAGS ---------------------------------------

var RegFirstName = document.getElementById("fisrstName");
var RegSecodName = document.getElementById("lastname");
var RegContNum = document.getElementById("Continfo");
var RegEmail = document.getElementById("emailinfo");
var RegPassword = document.getElementById("pwordinfo");
var RegBtn = document.getElementById("RegisterBtn");
var InputTag = document.querySelectorAll("input");

console.log(RegPassword);
// --------------------------------(SPAN TAG)- ALERT MESSAGE TAG----------------------------

var RegFirstNameAlert = document.getElementById("RegNameAlert");
var RegLastNameAlert = document.getElementById("RegLastAlert");
var RegContactAlert = document.getElementById("RegContAlert");
var RegEmailAlert = document.getElementById("RegEmailAlert");
var RegPwordAlert = document.getElementById("RegPwordAlert");

// ------------------------------------ALERT Function ---------------------------------


RegBtn.addEventListener("click",(event)=>{


    event.preventDefault();

 var   RegFirstNameValue = RegFirstName.value.trim();
 var   RegSecodNameValue = RegSecodName.value.trim();
 var   RegContNumValue = RegContNum.value.trim();
 var   RegEmailValue = RegEmail.value.trim();
 var   RegPassWordValue = RegPassword.value

 
// -----------------------------RegExp---------------------------------------------------


// -----------FIRST NAME VALID SESION-----------------------------------------------------

   
    var RegNumtest= /\d/ig;
    var RegNumResult = RegNumtest.test(RegFirstNameValue);

if(RegNumResult){
    RegFirstNameAlert.classList.add("RegfnameView");
    RegFirstName.classList.add("RegborderAlert");
};

RegFirstName.addEventListener("focus",()=>{

    RegFirstNameAlert.classList.remove("RegfnameView");
    RegFirstName.classList.remove("RegborderAlert");
})

// -------------------SECOND NAME VALID----------------------------------------


var Reg2NDNameNumTest = /\d/ig;
var Reg2NDNameNumResult = Reg2NDNameNumTest.test(RegSecodNameValue);

if( Reg2NDNameNumResult){

    RegLastNameAlert.classList.add("SecondNameView");
    RegSecodName.classList.add("secondnameAlert");
};
RegSecodName.addEventListener("focus",()=>{
    RegLastNameAlert.classList.remove("SecondNameView");
    RegSecodName.classList.remove("secondnameAlert");
});     
// ---------------------------------------CONTACT VALID--------------------------------


var Contact = /\d/ig
var MustContact = /\d{10,10}/gi
var RegContactTest = Contact.test(RegContNumValue);
var RegMustContactResult = MustContact.test(RegContNumValue);

if(RegContactTest && RegMustContactResult){
     
    return;
}
else{

    RegContactAlert.classList.add("RegAlertView");
    RegContNum.classList.add("contAlertBorder");
}

RegContNum.addEventListener("focus",()=>{

    RegContactAlert.classList.remove("RegAlertView");
    RegContNum.classList.remove("contAlertBorder");
});

// --------------------------EMAIL VALIDATION---------------------------------------------------

var SpicalCharacter = /@/gi;
var NumMust = /[0-9]/gi;
var LetterMust = /[a-zA-Z]/g;

var SpicalCharacterResult = SpicalCharacter.test(RegEmailValue);
var NumMustResult = NumMust.test(RegEmailValue);
var LetterMustResult = LetterMust.test(RegEmailValue);

// console.log(SpicalCharacterResult,NumMustResult,LetterMustResult);

if(SpicalCharacterResult && NumMustResult && LetterMustResult){

    return;
}
else{
    RegEmail.classList.add("emaillBoderAlert");
    RegEmailAlert.classList.add("emailAlertView");
};
RegEmail.addEventListener("focus",()=>{
    RegEmail.classList.remove("emaillBoderAlert");
    RegEmailAlert.classList.remove("emailAlertView");
});
// -------------------------PASSWORD VAIDDITION-----------------------------------------------


var PwordNumMust = /[0-9]/gi;
var PwordLetterMust = /[a-z]/gi
var PwordSpcialChhar = /\W/gi

var PwordNumMustResult = PwordNumMust.test(RegPassWordValue)
var PwordLetterMustResult = PwordLetterMust.test(RegPassWordValue)
var PwordSpcialChharResult = PwordSpcialChhar.test(RegPassWordValue)

if(PwordNumMustResult && PwordLetterMustResult && PwordSpcialChharResult){
    return;
}

else{
    RegPwordAlert.classList.add("RegPWordView");
    RegPassword.classList.add("PWordBorderAlertMessage");
}

RegPassword.addEventListener("focus",()=>{
    RegPwordAlert.classList.remove("RegPWordView");
    RegPassword.classList.remove("PWordBorderAlertMessage");
})

});