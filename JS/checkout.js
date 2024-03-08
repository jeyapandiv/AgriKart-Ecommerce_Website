"use strict";

// -------------- fetching navbar-------------


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


// ------------- creating order product details using local storage --------------


const checkoutData = JSON.parse(localStorage.getItem("checkout"));
console.log(checkoutData);

let subTotalPriceAdd = document.querySelectorAll("#subTotalPriceAdd");
let toatlPriceAdd = document.querySelectorAll("#toatlPriceAdd");
let paymetImage = document.querySelectorAll("#paymetImage");
let addPrdName = document.querySelectorAll("#addPrdName");
let addPrdQty = document.querySelectorAll("#addPrdQty");
let addPrdPrice = document.querySelector("#addPrdPrice");
let toatlPricePayment = document.querySelectorAll("#toatlPricePayment");

let qtyPr = parseInt(checkoutData[0].ProductQty);
let totalValuepr = parseInt(checkoutData[0].ProductPrice.slice(1));

let totalValue = 0;
totalValue += qtyPr * totalValuepr;

subTotalPriceAdd[0].innerText = `₹ ${totalValue}`;
toatlPriceAdd[0].innerText = `₹ ${totalValue}`;
subTotalPriceAdd[1].innerText = `₹ ${totalValue}`;
subTotalPriceAdd[2].innerText = `₹ ${totalValue}`;
toatlPriceAdd[1].innerText = `₹ ${totalValue}`;

paymetImage[0].src = checkoutData[0].ProductImage;
paymetImage[1].src = checkoutData[0].ProductImage;
addPrdName[0].innerHTML = checkoutData[0].ProductName;
addPrdName[1].innerHTML = checkoutData[0].ProductName;
addPrdQty[0].innerHTML = checkoutData[0].ProductQty;
addPrdQty[1].innerHTML = checkoutData[0].ProductQty;
addPrdPrice.innerHTML = `₹ ${totalValue}`;
toatlPricePayment[0].innerText = `₹ ${totalValue+60}`;
toatlPricePayment[1].innerText = `₹ ${totalValue+60}`;



// ---------------checkout process navigations-----------------



document.querySelector(".paymentDiv").classList.add("disNone");

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
};



let addressListEl = document.querySelector(".addressList");

let selectAddressList = document.querySelector(".addressList");
selectAddressList.style.display = "none";
let totalCard1 = document.querySelector(".totalCard1");
let createAddress = document.querySelector(".newAddressDiv");
let totalCard2 = document.querySelector(".totalCard2");
totalCard2.style.display = "none";
let newAddForm = document.forms.newAddress;

function selectCreateNvAddBtn(btn) {
  if (btn.innerText == "Select Address") {
    btn.innerText = "Create Address";
    selectAddressList.style.display = "block";
    totalCard2.style.display = "flex";
    totalCard1.style.display = "none";
    createAddress.style.display = "none";

    addressListEl.innerHTML =     `<div class="addressDefault">
                                      <div class="addressSelection">
                                        <input type="radio" name="addressSelectRadio">
                                        <p class="address-name">Name, 111A, Bbbbbb Street, Coc Nagar, Dddd City, Eeee
                                            State
                                            - 123 123, India.</p>
                                      </div>
                                      <div class="actionsAddress">
                                        <p class="edit-address">Edit address</p>
                                        <p class="remove-address">Remove address</p>
                                      </div>
                                    </div>`;
  } else {
    btn.innerText = "Select Address";
    selectAddressList.style.display = "none";
    totalCard2.style.display = "none";
    totalCard1.style.display = "flex";
    createAddress.style.display = "flex";
  }
}

// ---------------new address submission ---------------

newAddForm.addEventListener("submit", () => {
  event.preventDefault();

  selectAddress.classList.add("disNone");
  paymentSection.classList.remove("disNone");
  processStatus[0].classList.remove("fontWeight");
  processStatus[2].classList.add("fontWeight");
});

// ----------- side nav ------------

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

