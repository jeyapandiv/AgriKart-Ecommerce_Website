var smallImages = document.querySelectorAll(".small-Img");
var featuredImage = document.getElementById("featured-image");

let product = document.querySelector(".product-container");

let smallImagess = document.querySelector(".related-items-div");

// --------------------------------------
function storeProductDetails(btn) {
  let storedUser = localStorage.getItem("usercollation");
  let userCollation = storedUser ? JSON.parse(storedUser) : null;

  if (userCollation) {
    // Extracting product details
    const productName = document.querySelector(".product-name").innerText;
    const productWeight = document.querySelector(".product-weight").innerText;
    const productPrice = document.querySelector(".product-price").innerText;
    const productQty = document.querySelector(".product-qty").value;
    const productImg = document.querySelector(".product-img").src; // Assuming you want the src attribute

    // Creating product detail object
    const productDetails = {
      ProductName: productName,
      ProductQty: productQty,
      ProductImage: productImg,
      ProductPrice: productPrice,
      ProductWeight: productWeight,
    };

    // Check if "cart" exists in local storage
    if (localStorage.getItem("cart")) {
      // Parse the existing cart from local storage
      let cart = JSON.parse(localStorage.getItem("cart"));

      // Add the new product details to the cart array
      cart.push(productDetails);

      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      // console.log('cart-pushed')
      // console.log(cart);
    } else {
      // If the cart does not exist, create a new cart array with the product
      localStorage.setItem("cart", JSON.stringify([productDetails]));
      // console.log('cart-created')
      // console.log(cart)
    }
  } else window.location.href = "Login.html";
}

function navigationMain() {
  window.location.href = "index.html";
}

function cartIconPageNavigate(icon) {
  window.location.href = "cart.html";
}

// ----------------------------------object itms

const pla_obj = {
  vegetables: {
    heading: "All Vegetables",
    data: [
      {
        id: 1,
        imgSrc: "./Assets/PlaAssets/plaBeetroot.jpeg",
        productName: "Beetroot",
        price: "60",
        oprice: "90",
        description: `<li>Good Source of Vitamin C, Iron, Potassium, Folate and Dietary Fiber</li>
            <li>Can be consumed as juice, salad, chutney, soup, dry vegetable, fries or in boiled or steamed forms</li>
            <li>Store in cool and dry place, away from direct sunlight.
            material_features:vegetarian</li>`,
        small: [
          "./Assets/small_images/Beetroot5.jpeg",
          "./Assets/small_images/Beetroot6.jpg",
          "./Assets/small_images/Beetroot7.jpeg",
        ],
      },
      {
        id: 2,
        imgSrc: "./Assets/PlaAssets/plaCabbage.jpeg",
        productName: "Cabbage",
        price: "100",
        oprice: "190",
        description: `<li>1 pc pack</li>
            <li>It is a good source of Vitamin K, Dietary Fiber, Calicum, Potassium and Phosphorus</li>
            <li>It is also used in the preparation of dry curries, soups, manchurian or salads </li>`,
        small: [
          "./Assets/small_images/Cabbage1.jpg.jpg",
          "./Assets/small_images/cabbage5.jpeg",
          "./Assets/small_images/cabbage2.jpeg",
        ],
      },
      {
        id: 3,
        imgSrc: "./Assets/PlaAssets/plaCaliflower.jpeg",
        productName: "Cauliflower",
        price: "60",
        oprice: "90",
        description: `<li>Cauliflower is low in fat</li>
            <li>Rich in Vitamin C, K, Potassium and Manganese</li>
            <li>Can be used with Potatoes or in soups, manchurian, salad and parathas.</li>
            <li>Store in a cool, dry place away from sunlight
            ingredients:fresh cauliflower </li>`,
        small: [
          "./Assets/small_images/Cauliflower7.jpg",
          "./Assets/small_images/Califlower3.jpg",
          "./Assets/small_images/Califlower2.jpg",
        ],
      },
      {
        id: 4,
        imgSrc: "./Assets/PlaAssets/plaCapsicum.jpeg",
        productName: "Capsicum",
        price: "50",
        oprice: "80",
        description: `<li>Fresh, hygienic and natural</li>
            <li>Good source of Vitamin A,E,K, Potassium and Lycopene</li>
            <li>Can be used in curries, salad, soups and juices</li>
            <li>Store in cool and dry place, away from direct sunlight.</li>
            <li>item_form:peeled</li>`,
        small: [
          "./Assets/small_images/Capsicum1.jpeg",
          "./Assets/small_images/Capsicum3.jpg",
          "./Assets/small_images/Capsicum2.jpg",
        ],
      },
      {
        id: 5,
        imgSrc: "./Assets/PlaAssets/plaCarrot.jpeg",
        productName: "Carrot",
        price: "70",
        oprice: "100",
        description: `<li>Fresh, hygienic and natural</li>
                <li>Good source of Vitamin A,E,K, Potassium and Lycopene</li>
                <li>Can be used in curries, salad, soups and juices</li>
                <li>Store in cool and dry place, away from direct sunlight</li>
                <li>item_form:peeled</li>`,
        small: [
          "./Assets/small_images/Carrot1.jpg",
          "./Assets/small_images/Carrot2.webp",
          "./Assets/small_images/Carrot3.jpg",
        ],
      },
      {
        id: 6,
        imgSrc: "./Assets/PlaAssets/plaCoconut.jpeg",
        productName: "Coconut",
        price: "100",
        oprice: "120",
        description: `1.Fresh, hygienic and natural
            2.Good source of Vitamin A,E,K, Potassium and Lycopene
            3.Can be used in curries, salad, soups and juices
            4.Store in cool and dry place, away from direct sunlight.
            5.item_form:peeled`,
        small: [
          "./Assets/small_images/Coconut1.jpeg",
          "./Assets/small_images/Coconut2.webp",
          "./Assets/small_images/Coconut3.webp",
        ],
      },
      // { imgSrc: './Assets/PlaAssets/plaCurry Leaves.jpeg', productName: 'Curry Leaves' },
      // { imgSrc: './Assets/PlaAssets/plaMint Leaves.jpeg', productName: 'Mint Leaves' },
      // { imgSrc: './Assets/PlaAssets/plaOnion.jpeg', productName: 'Onion' },
      // { imgSrc: './Assets/PlaAssets/plaPotato.jpeg', productName: 'Potato' },
      // { imgSrc: './Assets/PlaAssets/plaPumpkin.jpeg', productName: 'Pumpkin' },
      // { imgSrc: './Assets/PlaAssets/plaRadish.jpeg', productName: 'Radish' }
    ],
  },
  fruits: {
    heading: "All Fruits",
    data: [
      {
        id: 13,
        imgSrc: "./Assets/PlaAssets/plaApple.jpeg",
        productName: "Apple",
        price: `60`,
        oprice: `90`,
        description: `<li>Standard good quality specifications (130gm/pc)</li>
                <li>Taste fruity and sweet with light notes of tartness.</li>
                <li>item_form:whole</li>`,
        small: [
          "./Assets/small_images/apple.jpg",
          "./Assets/small_images/apple2.jpg",
          "./Assets/small_images/apple3.jpg",
        ],
      },
      {
        id: 14,
        imgSrc: "/Assets/PlaAssets/plaAvocoda.jpeg",
        productName: "Avocoda",
        price: `100`,
        oprice: `190`,
        description: `<li>Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.</li>
                <li>Avocado by-products exert anti-proliferative and anti-inflammatory activities.</li>
                <li>Avocado seeds phytochemical improves carbohydrate and lipid metabolism.</li>`,
        small: [
          "./Assets/small_images/avocado1.jpg",
          "./Assets/small_images/avocoda3.jpg",
          "./Assets/small_images/Avocoda2.jpg",
        ],
      },
      {
        id: 15,
        imgSrc: "./Assets/PlaAssets/plaBanana.jpeg",
        productName: "Banana",
        price: `100`,
        oprice: `190`,
        description: `<li>Graded, sorted and premium quality fruits and vegetables</li>
                <li>Naturally flavoured, aromatic and sweeter compared to regular bananas;Pack contains 9-12 pcs (small size) per 500 gms</li> <li>Fresh, hygienic and natural</li><li>Store at cool dry place at temp. 18-22 degree celsius for long lasting freshness</li>`,
        small: [
          "./Assets/small_images/banana.jpg",
          "./Assets/small_images/banana2.jpg",
          "./Assets/small_images/banana3.jpg",
        ],
      },
      {
        id: 16,
        imgSrc: "./Assets/PlaAssets/plaBlueberry.jpeg",
        productName: "Blueberry",
        price: `100`,
        oprice: `190`,
        description: `<li>Graded, sorted and quality fruits and vegetables</li>
                <li>Fresh, hygienic and natural</li>
                <li>Dried Blueberries contain bone-strengthening minerals Calcium and Vitamin K.</li>
                <li>The nutritional value of blueberries is so high; they are considered one of the most antioxidant-dense foods in the world. Dried Blueberries from Happilo are rich in vitamins A & C, Iron and Manganese.</li>`,
        small: [
          "./Assets/small_images/Blueberry1.jpg",
          "./Assets/small_images/Blueberry2.webp",
          "./Assets/small_images/Blueberry3.jpg",
        ],
      },
      {
        id: 17,
        imgSrc: "./Assets/PlaAssets/plaGrapes.jpeg",
        productName: "Grapes",
        price: `100`,
        oprice: `190`,
        description: `<li>Fresh, hygienic and natural<li>
            <li>Avocado by-products exert anti-proliferative and anti-inflammatory activities.</li>
            <li>Avocado seeds phytochemical improves carbohydrate and lipid metabolism.</li>`,
        small: [
          "./Assets/small_images/Grapes1.webp",
          "./Assets/small_images/Grapes2.jpg",
          "./Assets/small_images/Grapes3.jpg",
        ],
      },
      {
        id: 18,
        imgSrc: "./Assets/PlaAssets/plaGuava.jpeg",
        productName: "Guava",
        price: `100`,
        oprice: `190`,
        description: `<li>Avocado fruit and its by-products are rich sources of nutrients and phytochemicals.<li>
                <li>Avocado by-products exert anti-proliferative and anti-inflammatory activities.</li>
                <li>Avocado seeds phytochemical improves carbohydrate and lipid metabolism.</li>`,
        small: [
          "./Assets/small_images/Guava1.webp",
          "./Assets/small_images/Guava2.jpg",
          "./Assets/small_images/Guava3.webp",
        ],
      },
      // { imgSrc: './Assets/PlaAssets/plaKiwi Fruit.jpeg', productName: 'Kiwi' },
      // { imgSrc: './Assets/PlaAssets/plaMango.jpeg', productName: 'Mango' },
      // { imgSrc: './Assets/PlaAssets/plaOrange.jpeg', productName: 'Orange' },
      // { imgSrc: './Assets/PlaAssets/plaSapota.jpeg', productName: 'Sapota' },
      // { imgSrc: './Assets/PlaAssets/plaStrawberry.jpeg', productName: 'Strawberry' },
      // { imgSrc: './Assets/PlaAssets/plaWatermelon.jpeg', productName: 'Watermelon' }
    ],
  },
  oil: {
    heading: "Oil Crops",
    data: [
      {
        id: 25,
        imgSrc: "./Assets/PlaAssets/plaBadam.jpeg",
        productName: "Badam",
        price: `100`,
        oprice: `190`,
        description: `<li>Purely natural, no additives, no preservatives or added flavours.</li>
            <li>Almond has many nutrients, protein and fibre. Munch a handful on the go or add it to your meal it helps to maintain a healthy balanced diet</li>
            <li>Hygienically packed in a pouch, meeting FSSAI food safety standards, that keeps the goodness intact.</li>`,
        small: [
          "./Assets/small_images/Badam1.jpg",
          "./Assets/small_images/Badamoil.webp",
          "./Assets/small_images/Badamoil2.jpg",
        ],
      },
      {
        id: 26,
        imgSrc: "./Assets/PlaAssets/plaCastorSeed.jpeg",
        productName: "CastorSeed",
        price: `100`,
        oprice: `190`,
        description: `<li>Pure and natural.</li>
            <li>Castor is a plant that produces seeds- beans. Castor oil is produced by pressing ripe seeds that have had their outer covering- hull removed.</li>
            <li>Castor seed and oil is commonly used by mouth for constipation and bowel preparation prior to colonoscopy. It is also used orally to start labor in pregnancy.
            </li>`,
        small: [
          "./Assets/small_images/CastorSeed4.webp",
          "./Assets/small_images/CastorSeed3.jpg",
          "./Assets/small_images/CastorSeed5.webp",
        ],
      },
      {
        id: 27,
        imgSrc: "./Assets/PlaAssets/plaCornOil.jpeg",
        productName: "Corn",
        price: `100`,
        oprice: `190`,
        description: `<li>Corn oil is a feedstock used for biodiesel.
            </li>
            <li>It has anticholesterol properties as it lowers LDL blood cholesterol.</li>
            <li>Corn oil reduces blood pressure post consumption in hypertensive patients.</li>`,
        small: [
          "./Assets/small_images/Corn1.webp",
          "./Assets/small_images/Corn2.jpg",
          "./Assets/small_images/Corn7.webp",
        ],
      },
      {
        id: 28,
        imgSrc: "./Assets/PlaAssets/plaFlaxSeeds.jpeg",
        productName: "FlaxSeeds",
        price: `100`,
        oprice: `190`,
        description: `<li>GNC flax seed oil capsules are made with unrefined cold pressed flaxseeds.</li>
            <li>Perfect vegetarian alternative for fish oil.<li>
            <li>Provides both omega 3 and omega 6 fatty acids.<li>`,
        small: [
          "./Assets/small_images/FlaxSeeds1.jpg",
          "./Assets/small_images/FlaxSeeds2.webp",
          "./Assets/small_images/FlaxSeeds3.jpg",
        ],
      },
      {
        id: 29,
        imgSrc: "./Assets/PlaAssets/plaMustardSeeds.jpeg",
        productName: "MustardSeeds",
        price: `100`,
        oprice: `190`,
        description: `<li> This mustard oil is rich in Vitamin E, a natural antioxidant.</li>
            <li>This cold pressed mustard oil is good for your well-being as it is cholesterol free.</li>
            <li>Bring home the goodness of pure mustard seed.</li>`,
        small: [
          "./Assets/small_images/MustardSeeds1.jpg",
          "./Assets/small_images/MustardSeeds2.jpg",
          "./Assets/small_images/MustardSeeds3.jpg",
        ],
      },
      {
        id: 30,
        imgSrc: "./Assets/PlaAssets/plaHembSeed.jpeg",
        productName: "HembSeed",
        price: `100`,
        oprice: `190`,
        description: `<li> Hemp Seed Oil has many medicinal properties that include Dry Skin Moisturization, Anti-Aging Effect, treating Dermatitis & enhance the overall quality & texture of your skin & hair. It makes them healthy again.</li>
            <li>Hemp Seed Oil has been extracted from Hemp Sativa Seed and is 100% Cold Pressed and delivered to you in its pure & unrefined form. It is a multipurpose oil and can be applied on face, body and hair.</li>
            <li>This is Pure and Unrefined Hemp Seed Oil.</li>`,
        small: [
          "./Assets/small_images/HembSeed1.webp",
          "./Assets/small_images/HembSeed4.jpg",
          "./Assets/small_images/HembSeed3.webp",
        ],
      },
      // { imgSrc: './Assets/PlaAssets/plaGroundNut.jpeg', productName: 'GroundNut' },
      // { imgSrc: './Assets/PlaAssets/plapumkinSeeds.jpeg', productName: 'pumkinSeeds' },
      // { imgSrc: './Assets/PlaAssets/plaSesameSeeds.jpeg', productName: 'SesameSeeds' },
      // { imgSrc: './Assets/PlaAssets/plaSunFlower.jpeg', productName: 'SunFlower' },
      // { imgSrc: './Assets/PlaAssets/plaWalNuts.jpeg', productName: 'WalNuts' },
      // { imgSrc: './Assets/PlaAssets/plaOliveOil.jpeg', productName: 'Olive' }
    ],
  },

  grains: {
    heading: "All Grains",
    data: [
      {
        id: 37,
        imgSrc: "./Assets/PlaAssets/plaBarely.avif",
        productName: "Barely",
        price: `100`,
        oprice: `190`,
        description: `<li>Barley is a form of barley that has been processed to remove its fibrous outer hull and polished to remove some or all of the bran layer.</li>
            <li>It is the most common form of barley for human consumption because it cooks faster and is less chewy than other.</li>
            <li>Pearls are high in protein, iron, and natural fiber, and also contain small amounts of calcium & fat. Cooks can be very innovative with pearled barley preparations.</li>`,
        small: [
          "./Assets/small_images/Barely8.jpg",
          "./Assets/small_images/Barely5.jpg",
          "./Assets/small_images/Barely7.jpg",
        ],
      },
      {
        id: 38,
        imgSrc: "./Assets/PlaAssets/plaBasmatiRice.jpeg",
        productName: "BasmatiRice",
        price: `100`,
        oprice: `190`,
        description: `<li>PREMIUM QUALITY: Our Daawat Biryani Basmati Rice is known for its exceptional quality and flavours, sourced from the finest basmati rice grains. We pick up the finest grains to serve you the finest basmati. Each pack is prepared after Chunkar, Bachakar, Sambhalkar and Sajaakar to serve you the longest rice grain.</li>
            <li>Whether you're preparing a festive feast or a special family dinner, Daawat Biryani Rice is the perfect choice to impress your guests with delicious and savoury biryani.</li>
            <li>These Basmati rice grains are renowned for their impressive length, making them the world's longest rice grain. This unique characteristic adds to the overall appeal of your biryani dish.</li>`,
        small: [
          "./Assets/small_images/BasmatiRice2.jpg",
          "./Assets/small_images/BasmatiRice1.jpg",
          "./Assets/small_images/BasmatiRice3.webp",
        ],
      },
      {
        id: 39,
        imgSrc: "./Assets/PlaAssets/plaBlackRice.jpeg",
        productName: "BlackRice",
        price: `100`,
        oprice: `190`,
        description: `<li>Rich in Antioxidants: Black rice is packed with antioxidants, particularly anthocyanins. These antioxidants help combat free radicals in the body, reducing oxidative stress and lowering the risk of chronic diseases.</li>
            <li>Digestive Health: The fiber content in black rice aids in digestion and can help prevent constipation. It promotes regular bowel movements and supports a healthy digestive system.</li>
            <li>Black rice is naturally gluten-free, making it suitable for individuals with gluten sensitivities or celiac disease.</li>`,
        small: [
          "./Assets/small_images/BlackRice1.jpg",
          "./Assets/small_images/BlackRice5.jpg",
          "./Assets/small_images/BlackRice3.jpg",
        ],
      },
      {
        id: 40,
        imgSrc: "./Assets/PlaAssets/plaBrownRice.jpeg",
        productName: "BrownRice",
        price: `100`,
        oprice: `190`,
        description: `<li>Used finest quality basmati.</li>
            <li>Suitable for all food.</li>
            <li>Country of Origin: India.</li>`,
        small: [
          "./Assets/small_images/BrownRice1.webp",
          "./Assets/small_images/BrownRice2.webp",
          "./Assets/small_images/BrownRice8.jpeg",
        ],
      },
      {
        id: 41,
        imgSrc: "./Assets/PlaAssets/plaRedRice.jpeg",
        productName: "RedRice",
        price: `100`,
        oprice: `190`,
        description: `<li>Organic Red Rice. Eat Natural Live Healthy and phytochemicals.<li>
            <li>Much like the brown rice and white rice, red rice also comes with some incredible health benefits.</li>
            <li>Best Organic Grocery & Gourmet in india. Health Is Wealth So Give It A Try For Healthier Life.</li>`,
        small: [
          "./Assets/small_images/Redrice1.webp",
          "./Assets/small_images/Redrice2.jpeg",
          "./Assets/small_images/Redrice3.png",
        ],
      },
      {
        id: 42,
        imgSrc: "./Assets/PlaAssets/plaFreekeh.jpeg",
        productName: "Freekeh",
        price: `100`,
        oprice: `190`,
        description: `<li>good source of essential nutrients, including protein, fiber, vitamins, and minerals. It contains B vitamins, such as niacin, thiamine, and riboflavin, as well as minerals like iron, phosphorus, magnesium, and zinc.</li>
            <li>Avocado by-products exert anti-proliferative and anti-inflammatory activities.</li>
            <li>Avocado seeds phytochemical improves carbohydrate and lipid metabolism.</li>`,
        small: [
          "./Assets/small_images/Freekeh1.jpg",
          "./Assets/small_images/Freekeh2.jpg",
          "./Assets/small_images/Freekeh3.jpeg",
        ],
      },
      // { imgSrc: './Assets/PlaAssets/plaBulgur.jpeg', productName: 'Bulgur' },
      // { imgSrc: './Assets/PlaAssets/plaOat.jpeg', productName: 'Oats' },
      // { imgSrc: './Assets/PlaAssets/plaPoniRice.jpeg', productName: 'PoniRice' },
      // { imgSrc: './Assets/PlaAssets/plaWildRice.jpeg', productName: 'WildRice' },
      // { imgSrc: './Assets/PlaAssets/plaWheat.jpeg', productName: 'Wheat' },
      // { imgSrc: './Assets/PlaAssets/plaSorghum.jpeg', productName: 'Sorghum' }
    ],
  },
  dry_fruits: {
    heading: "All Dry Fruits",
    data: [
      {
        id: 49,
        imgSrc: "./Assets/PlaAssets/plaBetelNuts.jpeg",
        productName: "BetelNuts",
        price: `100`,
        oprice: `190`,
        description: `<li>
            Last longs, Preserved Flavor & Freshness with Nitrogen Packing.</li>
            <li>Packed & Processed under Fully Hygienic Environment.</li>
            <li>100% Vegetarian.</li>`,
        small: [
          "./Assets/small_images/BetelNuts1.jpg",
          "./Assets/small_images/BetelNuts2.jpeg",
          "./Assets/small_images/BetelNuts3.png",
        ],
      },
      {
        id: 50,
        imgSrc: "./Assets/PlaAssets/plaBlackRaisin.jpeg",
        productName: "BlackRaisin",
        price: `100`,
        oprice: `190`,
        description: `<li>Premium seedless Afghani Black Raisins that are famous for their sweetness as a ready to go snack. Imported from Afghanistan, these raisins are plump, luscious and flavoursome. You are going to relish each and every bite of it.</li>
            <li>Black raisins are high in antioxidants, fiber, iron, potassium and are a natural energy booster. They are rich in vitamins, minerals and a good source of energy producing carbohydrates.</li>
            <li>Black raisins are one of the most nutritious dried fruits in the world. It can support digestion, improve iron levels and also helps keep the blood free from impurities.</li>`,
        small: [
          "./Assets/small_images/BlackRaisin1.jpeg",
          "./Assets/small_images/BlackRaisin2.jpeg",
          "./Assets/small_images/BlackRaisin3.jpeg",
        ],
      },
      {
        id: 51,
        imgSrc: "./Assets/PlaAssets/plaCashewnut.jpeg",
        productName: "Cashewnut",
        price: `100`,
        oprice: `190`,
        description: `<li>Rich, buttery and delicious and perfect for making raw cashew milk or snacking. Excellent source of protein, fiber and minerals. Suitable for vegetarians.</li>
            <li>Cashews are an incredible nutritional powerhouse with Iron, Copper, Zinc, Phosphorus, Magnesium, Selenium. Rice sources of antioxidants, minerals and vitamins .</li>
            <li>Cashew nuts are rich in fibre, heart-healthy fats, and plant protein. Good for an active life style, perfect for snacking.</li>`,
        small: [
          "./Assets/small_images/Cashewnut1.jpeg",
          "./Assets/small_images/Cashewnut2.webp",
          "./Assets/small_images/Cashewnut3.webp",
        ],
      },
      {
        id: 52,
        imgSrc: "./Assets/PlaAssets/plaDates.jpeg",
        productName: "Dates",
        price: `100`,
        oprice: `190`,
        description: `<li>Dates are well known instant energy boosters. Dates contain several nutrients that give various health benefits from helping reduce cholesterol to healthy bones.</li>
            <li>Dates have all the goodness that one needs, be it their sweet rich taste or their health benefits. Rich in dietary fibre it not only supports the digestive system but also helps improve the immune system.</li>
            <li>100% Naturally Dried and free from any Preservatives and Additives, it is a healthy substitute for sugar in any dessert, smoothies or sweet treats.</li>`,
        small: [
          "./Assets/small_images/Dates1.webp",
          "./Assets/small_images/Dates2.png",
          "./Assets/small_images/Dates3.webp",
        ],
      },
      {
        id: 53,
        imgSrc: "./Assets/PlaAssets/plaDryBadam.jpeg",
        productName: "Badam",
        price: `100`,
        oprice: `190`,
        description: `<li>Uniformly roasted crunchy nuts.</li>
            <li>Nitrogen flushed packs for extra freshness.</li>
            <li>Resealable zip lock stand up pouches.</li>`,
        small: [
          "./Assets/small_images/Badam4.jpeg",
          "./Assets/small_images/Badam5.png",
          "./Assets/small_images/Badam7.webp",
        ],
      },
      {
        id: 54,
        imgSrc: "./Assets/PlaAssets/plaDryFig.jpeg",
        productName: "DryFig",
        price: `100`,
        oprice: `190`,
        description: `<li>They are highly nutritious and rich in healthy fats antioxidants vitamins and minerals.</li>
            <li>Naturally dried and free from any additives or preservatives.</li>
            <li>Bone Health: Premium Anjeer is a good source of calcium, which is essential for maintaining strong bones and preventing conditions like osteoporosis.</li>`,
        small: [
          "./Assets/small_images/DryFig1.jpeg",
          "./Assets/small_images/DryFig2.jpg",
          "./Assets/small_images/DryFig3.png",
        ],
      },
      // { imgSrc: './Assets/PlaAssets/plaFoxnuts.jpeg', productName: 'Foxnuts' },
      // { imgSrc: './Assets/PlaAssets/plaKesar.jpeg', productName: 'Kesar' },
      // { imgSrc: './Assets/PlaAssets/plaKishmish.jpeg', productName: 'Kishmish' },
      // { imgSrc: './Assets/PlaAssets/plaMakhana.jpeg', productName: 'Makhana' },
      // { imgSrc: './Assets/PlaAssets/plapeanut.jpeg', productName: 'Peanut' },
      // { imgSrc: './Assets/PlaAssets/plaPista.jpeg', productName: 'Pista' }
    ],
  },
};

// console.log(pla_obj);

function renderHtml(renderItem) {
  renderItem.data.map((items, values) => {
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
                <h3 class="product-name">${items.productName} </h3>
                <p class="product-weight">500grm</p> 
                <h5>Price: <span class="product-price">₹${items.price}</span> <del> ₹${items.oprice}</del></h5>
                <ul>
                <h2>Product Information</h2>
                
                  ${items.description}
                 
                   
                </ul>
                <div class="quantity">
                    <div class="quantityIcon">
                    <i class="fa-solid fa-minus" style="color: #ff0000;" id="minus"></i>
                    <input class="product-qty" type="text" value="1" min="1" id="quantity-count">
                    <i class="fa-solid fa-plus" style="color: #46c70f;" id="plus"></i>
                    </div>
                    <div class="add_card">
                    <button onclick="storeProductDetails()">Add to Cart</button>
                    <button id="navCheckBtn" onclick="navigateCheckout(this)">Buy Now</button>
                    </div>
                </div>
            </div>
    
            <!-- Product details -->
            <div class="product-details">
                <h2>Delivery Details</h2>
                <h3>One-time Purchase</h3>
                <h5>₹${items.price} (<del> ₹${items.oprice}</del>)</h5>
                <ul>
                    <li>Fastest delivery Tomorrow 7 March, Order within 24 hrs 25 mins.</li>
                    <li>FREE delivery Saturday,  8 March on Orders dispatched.</li>
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
            </div>`;

      for (let i = 0; i < 5; i++) {
        const smallItem = renderItem.data[i];

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
        } else {
          break;
        }
      }
    }
  });
}

if (localStorage.getItem("category") == "vegetables") {
  renderHtml(pla_obj.vegetables);
} else if (localStorage.getItem("category") == "fruits") {
  renderHtml(pla_obj.fruits);
} else if (localStorage.getItem("category") == "oil") {
  renderHtml(pla_obj.oil);
} else if (localStorage.getItem("category") == "grains") {
  renderHtml(pla_obj.grains);
} else if (localStorage.getItem("category") == "dry_fruits") {
  renderHtml(pla_obj.dry_fruits);
}

function showRelated(value) {
  localStorage.setItem("id", value);
  window.location.reload();
}

smallImages.forEach((smallImg) => {
  smallImg.addEventListener("click", function () {
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

let allImages = document.querySelectorAll(".small-Img");
let mainImg = document.querySelector(".product-img");
for (let i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", (e) => {
    mainImg.src = e.target.src;
  });
}

// function to store details in local storage for wishlist
function addToWishlist() {
  // Get product details
  var productName = document.querySelector(".product-name").textContent;
  var productImg = document.querySelector(".product-img").src;
  var productPrice = document.querySelector(".product-price").textContent;
  var productWeight = document.querySelector(".product-weight").innerText;
  var productQty = document.querySelector(".product-qty").value;

  // Get existing wishlist from local storage or initialize if it doesn't exist
  var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.push({
    ProductName: productName,
    ProductImage: productImg,
    ProductPrice: productPrice,
  });

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
document.querySelector(".heart").addEventListener("click", addToWishlist);
document
  .querySelector(".wish-cart")
  .addEventListener("click", storeProductDetails());

// --------checking the login status -----------
function navigateCheckout(btn) {
  let storedUser = localStorage.getItem("usercollation");
  let userCollation = storedUser ? JSON.parse(storedUser) : null;

  if (userCollation) {
    if (btn.id == "navCheckBtn") {
      // Extracting product details
      const productName = document.querySelector(".product-name").innerText;
      const productWeight = document.querySelector(".product-weight").innerText;
      const productPrice = document.querySelector(".product-price").innerText;
      const productQty = document.querySelector(".product-qty").value;
      const productImg = document.querySelector(".product-img").src; // Assuming you want the src attribute

      // Creating product detail object
      const productDetails = {
        ProductName: productName,
        ProductQty: productQty,
        ProductImage: productImg,
        ProductPrice: productPrice,
        ProductWeight: productWeight,
      };

      // If the cart does not exist, create a new cart array with the product
      localStorage.setItem("checkout", JSON.stringify([productDetails]));
      // console.log('cart-created')
      // console.log(cart)

      window.location.href = "checkout.html";
    }
  } else window.location.href = "Login.html";
}

function wishIconPageNavigate(icon) {
  let storedUser = localStorage.getItem("usercollation");
  let userCollation = storedUser ? JSON.parse(storedUser) : null;

  if (userCollation) {
    window.location.href = "wishlist.html";
  } else window.location.href = "Login.html";
}
