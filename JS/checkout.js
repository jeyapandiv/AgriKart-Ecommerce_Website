"use strict";

fetch("navBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".navBarCheckout").innerHTML += data;
  });

function cartIconPageNavigate() {
  window.location.href = "cart.html";
}

function navigationMain() {
  window.location.href = "index.html";
}

document.querySelector(".paymentDiv").classList.add("disNone");
// document.querySelector('.paymentReviewDiv ').classList.add('disNone');
// document.querySelector('.orderList').classList.add('disNone');

let selectAddress = document.querySelector(".selectAddress");
let paymentSection = document.querySelector(".paymentDiv");

const processStatus = document.querySelector(".processNav").children;

processStatus[0].classList.add("fontWeight");

function navigatePayment(btn) {
  if (btn.innerText == "Use this address") {
    selectAddress.classList.add("disNone");
    paymentSection.classList.remove("disNone");
    processStatus[0].classList.remove("fontWeight");
    processStatus[2].classList.add("fontWeight");
  } else if (btn.id == "navigateReview") {
    document.querySelector(".selectAddress").classList.add("disNone");
    document.querySelector(".paymentDiv").classList.add("disNone");
    document.querySelector(".paymentReviewDiv").classList.remove("disNone");
    processStatus[2].classList.remove("fontWeight");
    processStatus[4].classList.add("fontWeight");
  } else if (btn.id == "confirmBtn1" || btn.id == "confirmBtn2") {
    document.querySelector(".selectAddress").classList.add("disNone");
    document.querySelector(".paymentDiv").classList.add("disNone");
    document.querySelector(".paymentReviewDiv ").classList.add("disNone");
  }
}
// if (!(selectAddress.style.display == "none")) {
//     processStatus.firstElementChild.classList.add('fontWeight');
// }


var plaSidenav = document.getElementById('plaSidediv');
plaSidenav.style.display = 'none';

// var plaSideBar = document.getElementById('navMenuIcon');
// plaSideBar.addEventListener('click', plaSidenavBar);

var plaSidepage = document.getElementById('plaSidediv');

function plaSidenavBar() {
    plaSidenav.style.display = 'Block';
    plaSidepage.classList.add('plasidebdy');
}


var plaSideBarExit = document.getElementById('plaSideExit');
plaSideBarExit.addEventListener('click', plaClose);

function plaClose() {
    plaSidenav.style.display = 'none';
    plaSidepage.classList.remove('plasidebdy');
}

var plasidecat = document.getElementById('plaSideNavList1');
var plasidehidecat = document.getElementById('plaNavcatlog');

plasidecat.addEventListener('click', plasidecatview)

function plasidecatview() {
    if (plasidehidecat.style.display == 'none') {
        plasidehidecat.style.display = 'block';
    }
    else {
        plasidehidecat.style.display = 'none';
    }
}