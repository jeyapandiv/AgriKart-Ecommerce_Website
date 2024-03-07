
// side nav----

var plaSidenav = document.getElementById('plaSidediv');
plaSidenav.style.display = 'none';

var plaSideBar = document.getElementById('navMenuIcon');
plaSideBar.addEventListener('click', plaSidenavBar);

var plaSidepage = document.getElementById('plaSidediv');

function plaSidenavBar() {
    plaSidenav.style.display = 'flex';
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
// ------------------------------- plp cart------------------

const plp_obj_vegetable = {

    vegetables1: {
        heading: 'All Vegetables',
        data: [
            { id: 1, imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 2, imgSrc: './Assets/PlaAssets/plaCabbage.jpeg', productName: 'Cabbage', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { id: 3, imgSrc: './Assets/PlaAssets/plaCaliflower.jpeg', productName: 'Cauliflower', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 4, imgSrc: './Assets/PlaAssets/plaCapsicum.jpeg', productName: 'Capsicum', plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { id: 5, imgSrc: './Assets/PlaAssets/plaCarrot.jpeg', productName: 'Carrot', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { id: 6, imgSrc: './Assets/PlaAssets/plaCoconut.jpeg', productName: 'Coconut', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    vegetables2: {
        heading: 'Season Special || Top Deals',
        data: [
            { id: 7, imgSrc: './Assets/PlaAssets/plaCurry Leaves.jpeg', productName: 'Curry Leaves', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { id: 8, imgSrc: './Assets/PlaAssets/plaMint Leaves.jpeg', productName: 'Mint Leaves', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 9, imgSrc: './Assets/PlaAssets/plaOnion.jpeg', productName: 'Onion', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { id: 10, imgSrc: './Assets/PlaAssets/plaPotato.jpeg', productName: 'Potato', plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { id: 11, imgSrc: './Assets/PlaAssets/plaPumpkin.jpeg', productName: 'Pumpkin', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { id: 12, imgSrc: './Assets/PlaAssets/plaRadish.jpeg', productName: 'Radish', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};

const pla_obj_fruits = {
    Fruits1: {
        heading: 'Farm Fruits',
        data: [
            { id: 13, imgSrc: './Assets/PlaAssets/plaApple.jpeg', productName: 'Apple', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 14, imgSrc: './Assets/PlaAssets/plaAvocoda.jpeg', productName: 'Avocoda', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { id: 15, imgSrc: './Assets/PlaAssets/plaBanana.jpeg', productName: 'Banana', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 16, imgSrc: './Assets/PlaAssets/plaBlueberry.jpeg', productName: 'Blueberry', plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { id: 17, imgSrc: './Assets/PlaAssets/plaGrapes.jpeg', productName: 'Grapes', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { id: 18, imgSrc: './Assets/PlaAssets/plaGuava.jpeg', productName: 'Guava', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    Fruits2: {
        heading: 'Season Special || Top Deals',
        data: [
            { id: 19, imgSrc: './Assets/PlaAssets/plaKiwi Fruit.jpeg', productName: 'Kiwi', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { id: 20, imgSrc: './Assets/PlaAssets/plaMango.jpeg', productName: 'Mango', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id: 21, imgSrc: './Assets/PlaAssets/plaOrange.jpeg', productName: 'Orange', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { id: 22, imgSrc: './Assets/PlaAssets/plaSapota.jpeg', productName: 'Sapota', plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { id: 23, imgSrc: './Assets/PlaAssets/plaStrawberry.jpeg', productName: 'Strawberry', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { id: 24, imgSrc: './Assets/PlaAssets/plaWatermelon.jpeg', productName: 'Watermelon', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};

const pla_obj_oilcrops = {
    oilcrops1: {
        heading: 'Oil Crops',
        data: [
            { id:25,imgSrc: './Assets/PlaAssets/plaBadam.jpeg', productName: 'Badam', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:26,imgSrc: './Assets/PlaAssets/plaCastorSeed.jpeg', productName: 'CastorSeed', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { id:27,imgSrc: './Assets/PlaAssets/plaCornOil.jpeg', productName: 'Corn', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:28,imgSrc: './Assets/PlaAssets/plaFlaxSeeds.jpeg', productName: 'FlaxSeeds', plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { id:29,imgSrc: './Assets/PlaAssets/plaMustardSeeds.jpeg', productName: 'Mustard Seeds', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { id:30,imgSrc: './Assets/PlaAssets/plaHembSeed.jpeg', productName: 'HembSeed', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    oilcrops2: {
        heading: 'Season Special || Top Deals',
        data: [
            { id:31,imgSrc: './Assets/PlaAssets/plaGroundNut.jpeg', productName: 'GroundNut', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { id:32,imgSrc: './Assets/PlaAssets/plapumkinSeeds.jpeg', productName: 'pumkinSeeds', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:33,imgSrc: './Assets/PlaAssets/plaSesameSeeds.jpeg', productName: 'SesameSeeds', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { id:34,imgSrc: './Assets/PlaAssets/plaSunFlower.jpeg', productName: 'SunFlower', plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { id:35,imgSrc: './Assets/PlaAssets/plaWalNuts.jpeg', productName: 'WalNuts', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { id:36,imgSrc: './Assets/PlaAssets/plaOliveOil.jpeg', productName: 'Olive', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};

const pla_obj_Grains = {
    Grains1: {
        heading: 'All Grain Varieties',
        data: [
            { id:37,imgSrc: './Assets/PlaAssets/plaBarely.avif', productName: 'Barely', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:38,imgSrc: './Assets/PlaAssets/plaBasmatiRice.jpeg', productName: 'BasmatiRice', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { id:39,imgSrc: './Assets/PlaAssets/plaBlackRice.jpeg', productName: 'BlackRice', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:40,imgSrc: './Assets/PlaAssets/plaBrownRice.jpeg', productName: 'BrownRice', plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { id:41,imgSrc: './Assets/PlaAssets/plaRedRice.jpeg', productName: 'Red Rice', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { id:42,imgSrc: './Assets/PlaAssets/plaFreekeh.jpeg', productName: 'Freekeh', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    Grains2: {
        heading: 'Season Special || Top Deals',
        data: [
            { id:43,imgSrc: './Assets/PlaAssets/plaBulgur.jpeg', productName: 'Bulgur', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { id:44,imgSrc: './Assets/PlaAssets/plaOat.jpeg', productName: 'Oats', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:45,imgSrc: './Assets/PlaAssets/plaPoniRice.jpeg', productName: 'PoniRice', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { id:46,imgSrc: './Assets/PlaAssets/plaWildRice.jpeg', productName: 'WildRice', plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { id:47,imgSrc: './Assets/PlaAssets/plaWheat.jpeg', productName: 'Wheat', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { id:48,imgSrc: './Assets/PlaAssets/plaSorghum.jpeg', productName: 'Sorghum', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};

const pla_obj_Dryfruits = {
    Dryfruits1: {
        heading: 'All DryFruits and Nuts',
        data: [
            { id:49,imgSrc: './Assets/PlaAssets/plaBetelNuts.jpeg', productName: 'BetelNuts', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:50,imgSrc: './Assets/PlaAssets/plaBlackRaisin.jpeg', productName: 'BlackRaisin', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' },
            { id:51,imgSrc: './Assets/PlaAssets/plaCashewnut.jpeg', productName: 'Cashewnut', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { id:52,imgSrc: './Assets/PlaAssets/plaDates.jpeg', productName: 'Dates', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:53,imgSrc: './Assets/PlaAssets/plaDryBadam.jpeg', productName: 'Badam', plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { id:54,imgSrc: './Assets/PlaAssets/plaDryFig.jpeg', productName: 'DryFig', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' }        ]
    },
    Dryfruits2: {
        heading: 'Season Special || Top Deals',
        data: [
            { id:55,imgSrc: './Assets/PlaAssets/plaFoxnuts.jpeg', productName: 'Foxnuts', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
            { id:56,imgSrc: './Assets/PlaAssets/plaKesar.jpeg', productName: 'Kesar', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { id:57,imgSrc: './Assets/PlaAssets/plaKishmish.jpeg', productName: 'Kishmish', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { id:58,imgSrc: './Assets/PlaAssets/plaMakhana.jpeg', productName: 'Makhana', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { id:59,imgSrc: './Assets/PlaAssets/plapeanut.jpeg', productName: 'Peanut', plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { id:60,imgSrc: './Assets/PlaAssets/plaPista.jpeg', productName: 'Pista', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' }
        ]
    }
};

function createHTMLStructure(pla_obj) {
    Object.keys(pla_obj).forEach(category => {
        console.log(category, "okk");
        const categoryData = pla_obj[category];
        console.log(categoryData);
        const mainDiv = document.createElement('div');
        // mainDiv.setAttribute("id",category.id)
        mainDiv.className = 'plpProductCardMain';
        mainDiv.id = 'plpCardVegetable';

        const headingDiv = document.createElement('div');
        headingDiv.className = 'plpProductHeaing';
        headingDiv.id = 'plpProductHeaing';

        const headingH1 = document.createElement('h3');
        headingH1.id = 'plphtag';
        headingH1.textContent = categoryData.heading;
        headingDiv.appendChild(headingH1);

        mainDiv.appendChild(headingDiv);

        const cardGroupDiv = document.createElement('div');
        cardGroupDiv.className = 'plpcardGroup';

        categoryData.data.forEach(product => {
            const productCardDiv = document.createElement('div');
            productCardDiv.className = 'plpproductcard';
            productCardDiv.id = product.id

            const productImg = document.createElement('img');
            productImg.id = 'plpproductimg';
            productImg.dataset.id = product.id
            productImg.src = product.imgSrc;

            const productNameH4 = document.createElement('h4');
            productNameH4.id = 'plpProductName';
            productNameH4.dataset.id = product.id

            productNameH4.textContent = product.productName;

            const priceDiv = document.createElement('div');
            priceDiv.dataset.id = product.id

            priceDiv.id = 'plpPriceDiv';

            const priceH4 = document.createElement('h4');
            priceH4.dataset.id = product.id
            priceH4.className='plppriceh4'

            const priceSpan = document.createElement('span');

            priceSpan.id = 'plpCardPrice';
            priceSpan.textContent = product.plpprice;
            priceSpan.dataset.id = product.id

            const discountPriceS = document.createElement('s');
            discountPriceS.id = 'plpdiscountPrice';
            discountPriceS.textContent = product.plporiginalPrice;
            discountPriceS.dataset.id = product.id


            priceH4.appendChild(priceSpan);
            priceH4.appendChild(discountPriceS);
            priceDiv.appendChild(priceH4);

            productCardDiv.appendChild(productImg);
            productCardDiv.appendChild(productNameH4);
            productCardDiv.appendChild(priceDiv);

            cardGroupDiv.appendChild(productCardDiv);



        });

        mainDiv.appendChild(cardGroupDiv);
        let plpbdy = document.querySelector('.plpAgriKart')
        plpbdy.appendChild(mainDiv);
    });

    var platoplp = document.querySelectorAll('.plpproductcard');

    platoplp.forEach(function (element) {
        element.addEventListener('click', platoplpfun);
    });

    function platoplpfun(e) {   
        if (e.target.dataset.id != undefined) {
            localStorage.setItem("id", e.target.dataset.id)
        }
        window.location.href = "./product_detail.html";
    }

}



plpdisplay();

function plpdisplay(){
    if (localStorage.getItem("category") === "vegetables") {
        createHTMLStructure(plp_obj_vegetable);
        console.log(plp_obj_vegetable);
    }
    else if (localStorage.getItem("category") === "fruits") {
        createHTMLStructure(pla_obj_fruits);
        console.log(pla_obj_fruits)
    }
    else if (localStorage.getItem("category") === "oil") {
        createHTMLStructure(pla_obj_oilcrops);
    }
    else if (localStorage.getItem("category") === "grains") {
        createHTMLStructure(pla_obj_Grains);
    }
    else{
        createHTMLStructure(pla_obj_Dryfruits);
    }    
}
let navbarsearch = document.getElementById('navSearchBox');
navbarsearch.addEventListener('input', search_Products); 

function search_Products() {
    let input = navbarsearch.value.toLowerCase(); 
    let category = localStorage.getItem("category");

    if (category === "vegetables") {
        filterProducts(plp_obj_vegetable, input);
    } else if (category === "fruits") {
        filterProducts(pla_obj_fruits, input);
    } else if (category === "oil") {
        filterProducts(pla_obj_oilcrops, input);
    } else if (category === "grains") {
        filterProducts(pla_obj_Grains, input);
    } else {
        filterProducts(pla_obj_Dryfruits, input);
    }
}

function filterProducts(categoryObj, searchTerm) {
        let plpbdy = document.querySelector('.plpAgriKart');
    plpbdy.innerHTML = "";

    Object.keys(categoryObj).forEach(category => {
        const categoryData = categoryObj[category];

        const filteredData = categoryData.data.filter(product => {

            return product.productName.toLowerCase().includes(searchTerm);
        });

        if (filteredData.length > 0) {
            createHTMLStructure({ [category]: { heading: categoryData.heading, data: filteredData } });
        }
    });
}

 // login verfication -----------------------------

 let loginbtn = document.querySelectorAll('#plaSideBtn');
 let profileicon = document.getElementById('navProfileIcon');
 let logoutbtn = document.getElementById('plasignout');
 let wishicon=document.getElementById('navwishIcon');

 let storedUser = localStorage.getItem("usercollation");
 let userCollation = storedUser ? JSON.parse(storedUser) : null;

 if (userCollation) {
     loginbtn.forEach(btn => {
         btn.classList.remove('view');
         btn.classList.add('block');
     });
     profileicon.classList.add('view');
     logoutbtn.classList.remove('plasignout');
     wishicon.classList.add('view')
     console.log("hi");
 } else {
     loginbtn.forEach(btn => {
         btn.classList.remove('block');
         btn.classList.add('view');
     });
     profileicon.classList.remove('view');
     profileicon.classList.add('block');
     
     wishicon.classList.remove('view');
     wishicon.classList.add('block')

     logoutbtn.classList.remove('view');
     logoutbtn.classList.add('block');
     console.log("bye");
 }


// logout function ---------------------------

logoutbtn.addEventListener('click', () => {

localStorage.removeItem('usercollation');

location.href = "./Login.html"; 
});
