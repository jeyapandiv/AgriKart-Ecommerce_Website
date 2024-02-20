var LoginCondainer = document.getElementById("LoginmaincondinerCall");
var ForgetPWordCondainer = document.getElementById("forgetloginContainerCall");
var continueBtn = document.getElementById("forgetBtn");
var ConnformCondainer = document.getElementById("confarmpasswordConntainerCall");
var OTPCondainer = document.getElementById("OTPmaincondainerCall");
var ResertPword = document.getElementById("reesertBtn");
var VerifyEmailSpan = document.getElementById("verifyEmail");
var VerifyPwordSpan = document.getElementById("VerifyPword");
var SignUpBtn = document.getElementById("singinBTn");



var EmailInput = document.getElementById("mailDetailes");
var PwordInput = document.getElementById("pwordDetailes");



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
SignUpBtn.addEventListener("click",(e)=>{

    e.preventDefault()

var EmailInputValue = EmailInput.value 
var PwordInputValue = PwordInput.value 
 
    if(EmailInputValue.length < 1){
        VerifyEmailSpan.classList.add("verifyemailviewVisible");
        EmailInput.classList.add("loginBorder")
    }

    if(PwordInputValue.length < 1){
        VerifyPwordSpan.classList.add("verifypwordviewVisibble");
        PwordInput.classList.add("loginBorder");
    }



EmailInput.addEventListener("focus",()=>{
    VerifyEmailSpan.classList.remove("verifyemailviewVisible");
    EmailInput.classList.remove("loginBorder")
});

PwordInput.addEventListener("focus",()=>{
    VerifyPwordSpan.classList.remove("verifypwordviewVisibble");
    PwordInput.classList.remove("loginBorder");
});
})



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
    