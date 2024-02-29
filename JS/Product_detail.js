var smallImages = document.querySelectorAll('.small-Img');
var featuredImage = document.getElementById('featured-image');

let product = document.querySelector(".product-container")


let smallImagess = document.querySelector(".related-items-div")


// --------------------------------------
function storeProductDetails(btn) {
    // Extracting product details
    const productName = document.querySelector('.product-name').innerText;
    const productWeight = document.querySelector('.product-weight').innerText;
    const productPrice = document.querySelector('.product-price').innerText;
    const productQty = document.querySelector('.product-qty').value;
    const productImg = document.querySelector('.product-img').src; // Assuming you want the src attribute

    // Creating product detail object
    const productDetails = {
        ProductName: productName,
        ProductQty: productQty,
        ProductImage: productImg,
        ProductPrice: productPrice,
        ProductWeight: productWeight,
    };

    // Check if "cart" exists in local storage
    if (localStorage.getItem('cart')) {
        // Parse the existing cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart'));

        // Add the new product details to the cart array
        cart.push(productDetails);

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log('cart-pushed')
        // console.log(cart);
    } else {
        // If the cart does not exist, create a new cart array with the product
        localStorage.setItem('cart', JSON.stringify([productDetails]));
        // console.log('cart-created')
        // console.log(cart)

    }

}

function navigateCheckout(btn) {
    window.location.href = "checkout.html";
}

// const addcart = document.getElementById('addcart');
// addcart.addEventListener('click', () => {
//     const productName = document.querySelector('.product-name').textContent;
//     const price = document.querySelector('.product-price').textContent.split(': ')[1];
//     const weight = document.querySelector('.product-weight').textContent.split(': ')[1];
//     const imgSrc = document.querySelector('.main-img img').src;
//     console.log(productName,price,weight,imgSrc)
//     // Navigate to cart page and pass product details via query parameters or localStorage
//     window.location.href = `cart.html?productName=${productName}&price=${price}&weight=${weight}&imgSrc=${imgSrc}`;
// });


// ----------------------------------object itms




const pla_obj = {
    vegetables: {
        heading: 'All Vegetables',
        data: [
            {
                id: 1, imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot', price: '60', oprice: '90', description: `<li>Good Source of Vitamin C, Iron, Potassium, Folate and Dietary Fiber</li>
            <li>Can be consumed as juice, salad, chutney, soup, dry vegetable, fries or in boiled or steamed forms</li>
            <li>Store in cool and dry place, away from direct sunlight.
            material_features:vegetarian</li>`, small: [
                    './Assets/small_images/Beetroot.jpg',
                    './Assets/small_images/Beetroot3.jpg',
                    './Assets/small_images/Beetroot1.jpg'

                ]
            },
            {
                id: 2, imgSrc: './Assets/PlaAssets/plaCabbage.jpeg', productName: 'Cabbage', price: '100', oprice: '190', description: `<li>1 pc pack</li>
            <li>It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus</li>
            <li>It is also used in the preparation of dry curries, soups, manchurian or salads </li>`, small: [
                    './Assets/small_images/cabbage.webp',
                    './Assets/small_images/Cabbage1.jpg.jpg',
                    './Assets/small_images/cabbage2.jpeg']
            },
            {
                id: 3, imgSrc: './Assets/PlaAssets/plaCaliflower.jpeg', productName: 'Califlower', price: '60', oprice: '90', description: `<li>Cauliflower is low in fat</li>
            <li>Rich in Vitamin C, K, Potassium and Manganese</li>
            <li>Can be used with Potatoes or in soups, manchurian, salad and parathas.</li>
            <li>Store in a cool, dry place away from sunlight
            ingredients:fresh cauliflower </li>`, small: [
                    './Assets/small_images/Califlower1.jpg',
                    './Assets/small_images/Califlower3.jpg',
                    './Assets/small_images/Califlower2.jpg']
            },
            {
                id: 4, imgSrc: './Assets/PlaAssets/plaCapsicum.jpeg', productName: 'Capsicum', price: '50', oprice: '80', description: `<li>Fresh, hygienic and natural</li>
            <li>Good source of Vitamin A,E,K, Potassium and Lycopene</li>
            <li>Can be used in curries, salad, soups and juices</li>
            <li>Store in cool and dry place, away from direct sunlight.</li>
            <li>item_form:peeled</li>`, small: [
                    './Assets/small_images/Capsicum1.jpeg',
                    './Assets/small_images/Capsicum3.jpg',
                    './Assets/small_images/Capsicum2.jpg']
            },
            {
                id: 5, imgSrc: './Assets/PlaAssets/plaCarrot.jpeg', productName: 'Carrot', price: '70', oprice: '100', description: `<li>Fresh, hygienic and natural</li>
                <li>Good source of Vitamin A,E,K, Potassium and Lycopene</li>
                <li>Can be used in curries, salad, soups and juices</li>
                <li>Store in cool and dry place, away from direct sunlight</li>
                <li>item_form:peeled</li>`, small: [
                    './Assets/small_images/Carrot1.jpg',
                    './Assets/small_images/Carrot2.webp',
                    './Assets/small_images/Carrot3.jpg']
            },
            {
                id: 6, imgSrc: './Assets/PlaAssets/plaCoconut.jpeg', productName: 'Coconut', price: '100', oprice: '120', description: `1.Fresh, hygienic and natural
            2.Good source of Vitamin A,E,K, Potassium and Lycopene
            3.Can be used in curries, salad, soups and juices
            4.Store in cool and dry place, away from direct sunlight.
            5.item_form:peeled`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            // { imgSrc: './Assets/PlaAssets/plaCurry Leaves.jpeg', productName: 'Curry Leaves' },
            // { imgSrc: './Assets/PlaAssets/plaMint Leaves.jpeg', productName: 'Mint Leaves' },
            // { imgSrc: './Assets/PlaAssets/plaOnion.jpeg', productName: 'Onion' },
            // { imgSrc: './Assets/PlaAssets/plaPotato.jpeg', productName: 'Potato' },
            // { imgSrc: './Assets/PlaAssets/plaPumpkin.jpeg', productName: 'Pumpkin' },
            // { imgSrc: './Assets/PlaAssets/plaRadish.jpeg', productName: 'Radish' }
        ]
    },
    fruits: {
        heading: 'All Fruits',
        data: [
            {
                id: 13, imgSrc: './Assets/PlaAssets/plaApple.jpeg', productName: 'Apple', price: `60`, oprice: `90`, description: `1.Standard good quality specifications (130gm/pc)
            2.Taste fruity and sweet with light notes of tartness.
            3.item_form:whole`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            {
                id: 14, imgSrc: '/bharat/PlaAssets/plaAvocoda.jpeg', productName: 'Avocoda', price: `100`, oprice: `190`, description: `1.Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.
            2.Avocado by-products exert anti-proliferative and anti-inflammatory activities.
            3.Avocado seeds phytochemical improves carbohydrate and lipid metabolism.`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            {
                id: 15, imgSrc: './barath/PlaAssets/plaBanana.jpeg', productName: 'Banana', price: `100`, oprice: `190`, description: `1.Graded, sorted and premium quality fruits and vegetables
            2.Fresh, hygienic and natural`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            {
                id: 16, imgSrc: './barath/PlaAssets/plaBlueberry.jpeg', productName: 'Blueberry', price: `100`, oprice: `190`, description: `1.Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.
            2.Avocado by-products exert anti-proliferative and anti-inflammatory activities.
            3.Avocado seeds phytochemical improves carbohydrate and lipid metabolism.`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            {
                id: 17, imgSrc: './barath/PlaAssets/plaGrapes.jpeg', productName: 'Grapes', price: `100`, oprice: `190`, description: `1.Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.
            2.Avocado by-products exert anti-proliferative and anti-inflammatory activities.
            3.Avocado seeds phytochemical improves carbohydrate and lipid metabolism.`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            {
                id: 18, imgSrc: './Assets/PlaAssets/plaGuava.jpeg', productName: 'Guava', price: `100`, oprice: `190`, description: `1.Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.
            2.Avocado by-products exert anti-proliferative and anti-inflammatory activities.
            3.Avocado seeds phytochemical improves carbohydrate and lipid metabolism.`, small: [
                    './Assets/small_images/Coconut1.jpeg',
                    './Assets/small_images/Coconut2.webp',
                    './Assets/small_images/Coconut3.webp']
            },
            // { imgSrc: './Assets/PlaAssets/plaKiwi Fruit.jpeg', productName: 'Kiwi' },
            // { imgSrc: './Assets/PlaAssets/plaMango.jpeg', productName: 'Mango' },
            // { imgSrc: './Assets/PlaAssets/plaOrange.jpeg', productName: 'Orange' },
            // { imgSrc: './Assets/PlaAssets/plaSapota.jpeg', productName: 'Sapota' },
            // { imgSrc: './Assets/PlaAssets/plaStrawberry.jpeg', productName: 'Strawberry' },
            // { imgSrc: './Assets/PlaAssets/plaWatermelon.jpeg', productName: 'Watermelon' }
        ]
    },
    oil: {
        heading: 'Oil Crops',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBadam.jpeg', productName: 'Badam' },
            { imgSrc: './Assets/PlaAssets/plaCastorSeed.jpeg', productName: 'CastorSeed' },
            { imgSrc: './Assets/PlaAssets/plaCornOil.jpeg', productName: 'Corn' },
            { imgSrc: './Assets/PlaAssets/plaFlaxSeeds.jpeg', productName: 'FlaxSeeds' },
            { imgSrc: './Assets/PlaAssets/plaMustard Seeds.jpeg', productName: 'Mustard Seeds' },
            { imgSrc: './Assets/PlaAssets/plaHembSeed.jpeg', productName: 'HembSeed' },
            { imgSrc: './Assets/PlaAssets/plaGroundNut.jpeg', productName: 'GroundNut' },
            { imgSrc: './Assets/PlaAssets/plapumkinSeeds.jpeg', productName: 'pumkinSeeds' },
            { imgSrc: './Assets/PlaAssets/plaSesameSeeds.jpeg', productName: 'SesameSeeds' },
            { imgSrc: './Assets/PlaAssets/plaSunFlower.jpeg', productName: 'SunFlower' },
            { imgSrc: './Assets/PlaAssets/plaWalNuts.jpeg', productName: 'WalNuts' },
            { imgSrc: './Assets/PlaAssets/plaOliveOil.jpeg', productName: 'Olive' }
        ]
    },

    grains: {
        heading: 'All Grains',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBarely.avif', productName: 'Barely', },
            { imgSrc: './Assets/PlaAssets/plaBasmatiRice.jpeg', productName: 'BasmatiRice' },
            { imgSrc: './Assets/PlaAssets/plaBlackRice.jpeg', productName: 'BlackRice' },
            { imgSrc: './Assets/PlaAssets/plaBrownRice.jpeg', productName: 'BrownRice' },
            { imgSrc: './Assets/PlaAssets/plaKaniwa.jpeg', productName: 'Kaniwa' },
            { imgSrc: './Assets/PlaAssets/plaFreekeh.jpeg', productName: 'Freekeh' },
            { imgSrc: './Assets/PlaAssets/plaBulgur.jpeg', productName: 'Bulgur' },
            { imgSrc: './Assets/PlaAssets/plaOat.jpeg', productName: 'Oats' },
            { imgSrc: './Assets/PlaAssets/plaPoniRice.jpeg', productName: 'PoniRice' },
            { imgSrc: './Assets/PlaAssets/plaWildRice.jpeg', productName: 'WildRice' },
            { imgSrc: './Assets/PlaAssets/plaWheat.jpeg', productName: 'Wheat' },
            { imgSrc: './Assets/PlaAssets/plaSorghum.jpeg', productName: 'Sorghum' }
        ]
    },
    dry_fruits: {
        heading: 'All Dry Fruits',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBetelNuts.jpeg', description: "", productName: 'BetelNuts' },
            { imgSrc: './Assets/PlaAssets/plaBlackRaisin.jpeg', productName: 'BlackRaisin' },
            { imgSrc: './Assets/PlaAssets/plaCashewnut.jpeg', productName: 'Cashewnut' },
            { imgSrc: './Assets/PlaAssets/plaDates.jpeg', productName: 'Dates' },
            { imgSrc: './Assets/PlaAssets/plaDryBadam.jpeg', productName: 'Badam' },
            { imgSrc: './Assets/PlaAssets/plaDryFig.jpeg', productName: 'DryFig' },
            { imgSrc: './Assets/PlaAssets/plaFoxnuts.jpeg', productName: 'Foxnuts' },
            { imgSrc: './Assets/PlaAssets/plaKesar.jpeg', productName: 'Kesar' },
            { imgSrc: './Assets/PlaAssets/plaKishmish.jpeg', productName: 'Kishmish' },
            { imgSrc: './Assets/PlaAssets/plaMakhana.jpeg', productName: 'Makhana' },
            { imgSrc: './Assets/PlaAssets/plapeanut.jpeg', productName: 'Peanut' },
            { imgSrc: './Assets/PlaAssets/plaPista.jpeg', productName: 'Pista' }
        ]
    }
};

console.log(pla_obj);

pla_obj.vegetables.data.map((items, values) => {
    if (localStorage.getItem("id") == items.id) {
        product.innerHTML = `
        <!-- left side -->
        <div class="img-card">
            <div class="main-img">
            
                <img class="product-img" src=${items.imgSrc} alt="" id="featured-image">
                <div class="heart-container"> 
                <i class="fa-regular fa-heart heart" style="color: #000000;"></i>
                </div> 
                
            </div>

            <!-- small img -->
            <div class="small-Card">
                <img src=${items.imgSrc} alt="" class="small-Img">
                <img src=${items.small[0]} alt="" class="small-Img">
                <img src=${items.small[1]} alt="" class="small-Img">
                <img src=${items.small[2]} alt="" class="small-Img">
                    
            </div>
        </div>

        <!-- Right side -->
        <div class="product-info">
            <h3 class="product-name">${items.productName} |</h3>
            <p class="product-weight">500grm</p> 
            <h5>Price: <span class="product-price">₹${items.price}</span> <del> ₹${items.oprice}</del></h5>
            <ul>
            <h2> Product Information</h2>
            
              ${items.description}
             
                <li>Nonpareil Premium California Almonds / Batams</li>
                <li> Free Shipping on orders above ₹499</li>
                <li> With Protein, Vitamin E & Fiber</li>
                
               
            </ul>
            <div class="quantity">
                <i class="fa-solid fa-minus" style="color: #ff0000;" id="minus"></i>
                <input class="product-qty" type="text" value="1" min="1" id="quantity-count">
                <i class="fa-solid fa-plus" style="color: #46c70f;" id="plus"></i>
                <button onclick="storeProductDetails()">Add to Cart</button>
                <button onclick="navigateCheckout(this)">Buy Now</button>
            </div>
        </div>

        <!-- Product details -->
        <div class="product-details">
            <h2>Product details</h2>
            <h3>One-time purchase</h3>
            <h5>₹2200.00 (₹1560.00 / 1kg)</h5>
            <ul>
                <li>Fastest delivery Tomorrow, 23 February. Order within 9 hrs 25 mins.</li>
                <li>FREE delivery Saturday, 24 February on orders dispatched.</li>
            </ul>
            <label for="Quy">Quantity</label>
            <select id="quantity" name="Quy">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <div class="add_card">
                <button onclick="storeProductDetails()">Add to Cart</button>
                <button id="buynow">buy now</button>
            </div>
        </div>`

        for (let i = 0; i < 4; i++) {
            const smallItem = pla_obj.vegetables.data[i];

            console.log(smallItem, "ok");

            if (smallItem) {
                if (localStorage.getItem("id") != smallItem.id) {
                    smallImagess.innerHTML += `
                    <div class="related-item " style="cursor:pointer" onclick=showRelated(${smallItem.id}) id=${smallItem.id}>
                        <img src="${smallItem.imgSrc}" alt="Related Item" class="item-img">
                        <a href="">${smallItem.productName}</a>
                        <h3>₹${smallItem.price}</h3>
                        <span class="star">
                            <i class="fa-solid fa-star"></i> 
                            <i class="fa-solid fa-star"></i> 
                            <i class="fa-solid fa-star"></i> 
                            <i class="fa-solid fa-star"></i> 
                            <i class="fa-solid fa-star"></i>
                        </span>
                    </div>`;
                }
            }
            else {
                break;
            }
        }


    }
});

function showRelated(value) {
    localStorage.setItem("id", value)
    window.location.reload()
}



smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function () {

        featuredImage.src = this.src;
    });
});

function cartIconPageNavigate() {
    window.location.href = "cart.html"
}
function navigationMain() {
    window.location.href = "index.html";
}
//---------------------- increment - decrement --------------------------

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let quantity_count = document.getElementById("quantity-count");

let count = 1;

plus.addEventListener("click", () => {
    count++;
    quantity_count.value = count;
});

minus.addEventListener("click", () => {
    if (count >= 1) {
        count--;
        quantity_count.value = count;
    }
});


let allImages = document.querySelectorAll(".small-Img")
let mainImg = document.querySelector(".product-img")
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", (e) => {
        mainImg.src = e.target.src
    })
}





