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
    } else {
      btn.innerText = "Select Address";
      selectAddressList.style.display = "none";
      totalCard2.style.display = "none";
      totalCard1.style.display = "flex";
      createAddress.style.display = "flex";
    }
  }
  
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
  


  // ------------- creating order product details using local storage --------------

const checkoutData = JSON.parse(localStorage.getItem('checkout'));
console.log(checkoutData)

// const cartItemsContainer = document.getElementById('cart-things-2');


// if (Array.isArray(cartData)) {

//     cartData.forEach(product => {
      
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('item');

        
//         itemDiv.innerHTML = `
//             <img class="product-img" src="${product.ProductImage}" alt="${product.ProductName}">
//             <div class="item-details">
//                 <h3 class="product-name">${product.ProductName}</h3>
//                 <p class="product-price">${product.ProductPrice}</p>
//                 <p class="product-weight">${product.ProductWeight}</p>
//             </div>
//             <div class="end">
//                 <input class="product-qty" type="number" value="${product.ProductQty}">
//                 <i class="fa-solid fa-trash delete-icon"></i>
//             </div>
//         `;

        
//         cartItemsContainer.appendChild(itemDiv);
//     });
// } else {
   
//     console.log('No cart data found in local storage.');
// }
  
