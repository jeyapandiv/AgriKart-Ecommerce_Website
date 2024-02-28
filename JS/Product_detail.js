var smallImages = document.querySelectorAll('.small-Img');
var featuredImage = document.getElementById('featured-image');

smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function() {
      
        featuredImage.src = this.src;
    });
});


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


// --------------------------------------

const addcart = document.getElementById('addcart');
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
            { imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot' },
            { imgSrc: './Assets/PlaAssets/plaCabbage.jpeg', productName: 'Cabbage' },
            { imgSrc: './Assets/PlaAssets/plaCaliflower.jpeg', productName: 'Califlower' },
            { imgSrc: './Assets/PlaAssets/plaCapsicum.jpeg', productName: 'Capsicum' },
            { imgSrc: './Assets/PlaAssets/plaCarrot.jpeg', productName: 'Carrot' },
            { imgSrc: './Assets/PlaAssets/plaCoconut.jpeg', productName: 'Coconut' },
            { imgSrc: './Assets/PlaAssets/plaCurry Leaves.jpeg', productName: 'Curry Leaves' },
            { imgSrc: './Assets/PlaAssets/plaMint Leaves.jpeg', productName: 'Mint Leaves' },
            { imgSrc: './Assets/PlaAssets/plaOnion.jpeg', productName: 'Onion' },
            { imgSrc: './Assets/PlaAssets/plaPotato.jpeg', productName: 'Potato' },
            { imgSrc: './Assets/PlaAssets/plaPumpkin.jpeg', productName: 'Pumpkin' },
            { imgSrc: './Assets/PlaAssets/plaRadish.jpeg', productName: 'Radish' }
        ]
    },
    fruits: {
        heading: 'All Fruits',
        data: [
            { imgSrc: './bharat/PlaAssets/plaApple.jpeg', productName: 'Apple' },
            { imgSrc: '/bharat/PlaAssets/plaAvocoda.jpeg', productName: 'Avocoda' },
            { imgSrc: './barath/PlaAssets/plaBanana.jpeg', productName: 'Banana' },
            { imgSrc: './barath/PlaAssets/plaBlueberry.jpeg', productName: 'Blueberry' },
            { imgSrc: './barath/PlaAssets/plaGrapes.jpeg', productName: 'Grapes' },
            { imgSrc: './Assets/PlaAssets/plaGuava.jpeg', productName: 'Guava' },
            { imgSrc: './Assets/PlaAssets/plaKiwi Fruit.jpeg', productName: 'Kiwi' },
            { imgSrc: './Assets/PlaAssets/plaMango.jpeg', productName: 'Mango' },
            { imgSrc: './Assets/PlaAssets/plaOrange.jpeg', productName: 'Orange' },
            { imgSrc: './Assets/PlaAssets/plaSapota.jpeg', productName: 'Sapota' },
            { imgSrc: './Assets/PlaAssets/plaStrawberry.jpeg', productName: 'Strawberry' },
            { imgSrc: './Assets/PlaAssets/plaWatermelon.jpeg', productName: 'Watermelon' }
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
            { imgSrc: './Assets/PlaAssets/plaBetelNuts.jpeg',description:"",productName: 'BetelNuts' },
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


console.log(pla_obj.fruits.data);

featuredImage.src = pla_obj.fruits.data[1].imgSrc;






// Original object with details
const originalObject = {
    imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot',
    imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot',
    imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot',
    "Beet Root": {
      "1.Good Source of Vitamin C, Iron, Potassium, Folate and Dietary Fiber": null,
      "2.Can be consumed as juice, salad, chutney, soup, dry vegetable, fries or in boiled or steamed forms": null,
      "3.Store in cool and dry place, away from direct sunlight.": null,
      "material_features:vegetarian": null
    },
    "Cabbage": {
      "1.1 pc pack": null,
      "2.It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus": null,
      "3.It is also used in the preparation of dry curries, soups, manchurian or salads": null,
      "4.Store in cool and dry place, away from direct sunlight.": null,
      "ingredients:fresh cabbage": null,
      "5.item_form:whole": null,
      "material_features:vegetarian": null
    },
   
  };
  
 
 
//   function convertKeysToValues(obj) {
//     const newObj = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[obj[key]] = key;
//       }
//     }
//     return newObj;
//   }

//   function convertAllDetails(object) {
//     const convertedObject = {};
//     for (const vegetable in object) {
//       if (object.hasOwnProperty(vegetable)) {
//         convertedObject[vegetable] = convertKeysToValues(object[vegetable]);
//       }
//     }
//     return convertedObject;
//   }
  
// 
//   const convertedObject = convertAllDetails(originalObject);
  

//   const convertedString = JSON.stringify(convertedObject);
  

//   localStorage.setItem('convertedObject', convertedString);
  

//   const retrievedString = localStorage.getItem('convertedObject');
//   const retrievedObject = JSON.parse(retrievedString);
  

//   console.log(retrievedObject);
  
