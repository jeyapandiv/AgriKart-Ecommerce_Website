"use strict";

fetch("navBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".navBarCheckout").innerHTML += data;
  });

function cartIconPageNavigate(icon) {
  window.location.href = "cart.html";
}

function wishIconPageNavigate(icon) {
  window.location.href = "wishlist.html";
}

function navigationMain() {
  window.location.href = "index.html";
}

document.querySelector(".paymentDiv").classList.add("disNone");
// document.querySelector(".paymentReviewDiv").classList.remove("disNone");

let selectAddress = document.querySelector(".selectAddress");
let paymentSection = document.querySelector(".paymentDiv");

const processStatus = document.querySelector(".processNav").children;

processStatus[0].classList.add("fontWeight");

function navigatePayment(btn) {
  if (btn.innerText == "Use this address" || btn == "Use this address") {
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

let selectAddressList = document.querySelector(".addressList");
let createAddress = document.querySelector(".newAddressDiv");
let newAddForm = document.forms.newAddress;

function selectCreateNvAddBtn(btn) {
  if (btn.innerText == "Select Address") {
    btn.innerText = "Create Address";
    selectAddressList.classList.remove("disNone");
    createAddress.classList.add("disNone");
  } else {
    btn.innerText = "Select Address";
    selectAddressList.classList.add("disNone");
    createAddress.classList.remove("disNone");
  }
}

newAddForm.addEventListener("submit", () => {
  navigatePayment("Use this address");
});

var plaSidenav = document.getElementById("plaSidediv");
plaSidenav.style.display = "none";
var plaSidepage = document.getElementById("plaSidediv");

function plaSidenavBar() {
  plaSidenav.style.display = "Block";
  plaSidepage.classList.add("plasidebdy");
}

var plaSideBarExit = document.getElementById("plaSideExit");
plaSideBarExit.addEventListener("click", plaClose);

function plaClose() {
  plaSidenav.style.display = "none";
  plaSidepage.classList.remove("plasidebdy");
}

var plasidecat = document.getElementById("plaSideNavList1");
var plasidehidecat = document.getElementById("plaNavcatlog");

plasidecat.addEventListener("click", plasidecatview);

function plasidecatview() {
  if (plasidehidecat.style.display == "none") {
    plasidehidecat.style.display = "block";
  } else {
    plasidehidecat.style.display = "none";
  }
}
