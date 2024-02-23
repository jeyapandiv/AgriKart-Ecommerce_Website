"use strict"

fetch('navBar.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.navBarCheckout').innerHTML += data;
  });

document.querySelector('.paymentDiv').classList.add('disNone');
// document.querySelector('.confirmationDiv ').classList.add('disNone');
// document.querySelector('.orderList').classList.add('disNone');

let selectAddress = document.querySelector('.selectAddress');
let paymentSection = document.querySelector('.paymentDiv');

const processStatus = document.querySelector('.processNav').children;

processStatus[0].classList.add('fontWeight');

function navigatePayment(btn) {
    if (btn.innerText == "Use this address") {
        selectAddress.classList.add('disNone');
        paymentSection.classList.remove('disNone');
        processStatus[0].classList.remove('fontWeight');
        processStatus[2].classList.add('fontWeight');
    } 
    else if (btn.id == "navigateReview") {
        document.querySelector('.selectAddress').classList.add('disNone');
        document.querySelector('.paymentDiv').classList.add('disNone');
        document.querySelector('.confirmationDiv').classList.remove('disNone');
        processStatus[2].classList.remove('fontWeight')
        processStatus[4].classList.add('fontWeight')
        
    }
    else if ((btn.id == "confirmBtn1") || (btn.id == "confirmBtn2")) {
        document.querySelector('.selectAddress').classList.add('disNone');
        document.querySelector('.paymentDiv').classList.add('disNone');
        document.querySelector('.confirmationDiv ').classList.add('disNone');

    }

}
// if (!(selectAddress.style.display == "none")) {
//     processStatus.firstElementChild.classList.add('fontWeight');
// }

