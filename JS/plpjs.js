// side nav----



var plaSidenav=document.getElementById('plaSidediv');
plaSidenav.style.display='none';

var plaSideBar=document.getElementById('plaSidebarIcon');
plaSideBar.addEventListener('click',plaSidenavBar);

var plaSidepage=document.getElementById('plaSidediv');

function plaSidenavBar(){
    plaSidenav.style.display='flex';
    plaSidepage.classList.add('plasidebdy');
}


var plaSideBarExit=document.getElementById('plaSideExit');
plaSideBarExit.addEventListener('click',plaClose);

function plaClose(){
    plaSidenav.style.display='none';
    plaSidepage.classList.remove('plasidebdy');
}

var plasidecat=document.getElementById('plaSideNavList1');
var plasidehidecat=document.getElementById('plaNavcatlog');

plasidecat.addEventListener('click',plasidecatview)

function plasidecatview(){
    if( plasidehidecat.style.display =='none'){
        plasidehidecat.style.display='block';
    }
    else {
        plasidehidecat.style.display='none';
    }
}

// ---------------------------------Dynamic plp cart------------------


var products = ["Mint Leaves","Coriander","Spring Onion","Avocoda","Thyme","Dragon Fruit","Lemon Grass","Strawberry","Orange","Papaya","Pomegranate","Sapota","Avocoda","Grapes", "Tomato", "Watermelon", "Apple", "Carrot","Califlower","Banana","Beetroot","Bitter Guard","Blueberry","Onion","Bottle Guard","Cabbage","Curry Leaves","Capsicum","Coconut","Radish","Pumpkin","Potato","Cucumber","Dragon Fruit","Ginger","Green Chili","Kiwi Fruit","Mango","Lemon","Longan Fruit","Pear Fruit","Onion","Ridge Guard","Pumpkin","Snake Guard","Guava","Ridge Guard","Tendil","Snake Guard","Guava","Guava","Guava"];
var head=["All Fruits","All Fruits","Seasonal Special","Premium Fruits And Vegetables","Deal Of The Day","All Vegetables","Top Offers"];



    document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("dynamicContentContainer");

    // plp Repeated  6 container creating using for loop

    for (var i = 1; i <= 6; i++) {
        // Create plpcarthead
        var cartheadDiv = document.createElement("div");
        cartheadDiv.className = "plpcarthead";

        var headingDiv = document.createElement("div");
        headingDiv.className = "plpcartheading";

        var h1Heading = document.createElement("h1");
        h1Heading.id = "plpcarthtag";
        h1Heading.textContent = head[i];

        headingDiv.appendChild(h1Heading);

        var iconDiv = document.createElement("div");
        iconDiv.className = "plpcarticon";

        // var leftIcon = document.createElement("i");
        // leftIcon.className = "fa-solid fa-circle-arrow-left";
        // leftIcon.id = "plpcarticon";

        // var rightIcon = document.createElement("i");
        // rightIcon.className = "fa-solid fa-circle-arrow-right";
        // rightIcon.id = "plpcarticon";

        // iconDiv.appendChild(leftIcon);
        // iconDiv.appendChild(rightIcon);

        cartheadDiv.appendChild(headingDiv);
        // cartheadDiv.appendChild(iconDiv);

        // Create plpmaincatlistdiv
        var maincatlistDiv = document.createElement("div");
        maincatlistDiv.className = "plpmaincatlistdiv";


        // Repeat the content inside plpmaincatlistdiv 6 times
       
        for (var j = 1; j <= 6; j++) {
            var mainCardDiv = document.createElement("div");
            mainCardDiv.className = "plpmaincard";

            var img = document.createElement("img");
            img.id = "plpcartimg";
            
                img.src = "Assets/plpAssets/plp" +products[j*i+i+j]+ ".jpeg"; // plp cart image src get from product array
                img.alt = "Fresh Product " + j;
           

            var productName = document.createElement("h4");
            productName.id = "plpcartname";
            productName.textContent = " "+products[j*i+i+j] +" ";

            var price = document.createElement("h3");
            price.id = "plpcartprice";
            var spanPrice = document.createElement("span");
            spanPrice.id = "plpprice";
            spanPrice.textContent = "₹" + getRandomPrice(); // plp cart name get from product array
            var strikeThroughPrice = document.createElement("s");
            strikeThroughPrice.id = "plpnoprice";
            strikeThroughPrice.textContent = "₹" + (parseInt(spanPrice.textContent.slice(1)) + 20); // plp cart random discounted price

            var button = document.createElement("button");
            button.id = "plpcartbtn";
            button.textContent = "Add To Cart";

            price.appendChild(spanPrice);
            price.appendChild(strikeThroughPrice);
            mainCardDiv.appendChild(img);
            mainCardDiv.appendChild(productName);
            mainCardDiv.appendChild(price);
            mainCardDiv.appendChild(button);

            maincatlistDiv.appendChild(mainCardDiv);
        
            var plptoproduct = document.querySelectorAll('.plpmaincard');

            plptoproduct.forEach(function(element) {
            element.addEventListener('click', plptoproductfun);
});

function plptoproductfun() {
    window.location.href = "product_detail.html"; // Replace "index.html" with your desired destination page
}
        }
        
        // Append both plpcarthead and plpmaincatlistdiv to the container

        container.appendChild(cartheadDiv);
        container.appendChild(maincatlistDiv);
    }
});



// Function to get a random price to plp cart 

function getRandomPrice() {
    return Math.floor(Math.random() * 50) + 30; // Random price between 30 and 80
}

