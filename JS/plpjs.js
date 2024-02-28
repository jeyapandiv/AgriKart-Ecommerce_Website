
// side nav----

var plaSidenav=document.getElementById('plaSidediv');
plaSidenav.style.display='none';

var plaSideBar=document.getElementById('navMenuIcon');
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
// ------------------------------- plp cart------------------

const plp_obj_vegetable = {
    vegetables1: {
        heading: 'All Vegetables',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot' , plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaCabbage.jpeg', productName: 'Cabbage' , plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaCaliflower.jpeg', productName: 'Califlower' , plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaCapsicum.jpeg', productName: 'Capsicum' ,plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { imgSrc: './Assets/PlaAssets/plaCarrot.jpeg', productName: 'Carrot' , plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { imgSrc: './Assets/PlaAssets/plaCoconut.jpeg', productName: 'Coconut' , plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    vegetables2: {
        heading: 'Season Special || Top Deals',
        data: [
            { imgSrc: './Assets/PlaAssets/plaCurry Leaves.jpeg', productName: 'Curry Leaves' , plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { imgSrc: './Assets/PlaAssets/plaMint Leaves.jpeg', productName: 'Mint Leaves' , plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaOnion.jpeg', productName: 'Onion' , plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { imgSrc: './Assets/PlaAssets/plaPotato.jpeg', productName: 'Potato' , plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaPumpkin.jpeg', productName: 'Pumpkin' , plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { imgSrc: './Assets/PlaAssets/plaRadish.jpeg', productName: 'Radish' , plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};
const pla_obj_fruits = {
    Fruits1: {
        heading: 'Farm Fruits',
        data: [
            { imgSrc: './Assets/PlaAssets/plaApple.jpeg', productName: 'Apple', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: '/Assets/PlaAssets/plaAvocoda.jpeg', productName: 'Avocoda' ,plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaBanana.jpeg', productName: 'Banana' , plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaBlueberry.jpeg', productName: 'Blueberry' , plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { imgSrc: './Assets/PlaAssets/plaGrapes.jpeg', productName: 'Grapes', plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { imgSrc: './Assets/PlaAssets/plaGuava.jpeg', productName: 'Guava' ,plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    Fruits2: {
        heading: 'Season Special || Top Deals',
        data: [
            { imgSrc: './Assets/PlaAssets/plaKiwi Fruit.jpeg', productName: 'Kiwi' , plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { imgSrc: './Assets/PlaAssets/plaMango.jpeg', productName: 'Mango' , plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaOrange.jpeg', productName: 'Orange' , plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { imgSrc: './Assets/PlaAssets/plaSapota.jpeg', productName: 'Sapota' , plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaStrawberry.jpeg', productName: 'Strawberry' , plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { imgSrc: './Assets/PlaAssets/plaWatermelon.jpeg', productName: 'Watermelon', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};
const pla_obj_oilcrops = {
    oilcrops1: {
        heading: 'Oil Crops',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBadam.jpeg', productName: 'Badam', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaCastorSeed.jpeg', productName: 'CastorSeed', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaCornOil.jpeg', productName: 'Corn', plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaFlaxSeeds.jpeg', productName: 'FlaxSeeds' , plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { imgSrc: './Assets/PlaAssets/plaMustard Seeds.jpeg', productName: 'Mustard Seeds' , plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { imgSrc: './Assets/PlaAssets/plaHembSeed.jpeg', productName: 'HembSeed', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    oilcrops2: {
        heading: 'Season Special || Top Deals',
        data: [
            { imgSrc: './Assets/PlaAssets/plaGroundNut.jpeg', productName: 'GroundNut' , plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { imgSrc: './Assets/PlaAssets/plapumkinSeeds.jpeg', productName: 'pumkinSeeds' , plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaSesameSeeds.jpeg', productName: 'SesameSeeds' , plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { imgSrc: './Assets/PlaAssets/plaSunFlower.jpeg', productName: 'SunFlower' , plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaWalNuts.jpeg', productName: 'WalNuts' , plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { imgSrc: './Assets/PlaAssets/plaOliveOil.jpeg', productName: 'Olive', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};
const pla_obj_Grains = {
    Grains1: {
        heading: 'All Grain Varieties',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBarely.avif', productName: 'Barely' , plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaBasmatiRice.jpeg', productName: 'BasmatiRice', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaBlackRice.jpeg', productName: 'BlackRice' , plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaBrownRice.jpeg', productName: 'BrownRice' , plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { imgSrc: './Assets/PlaAssets/plaRedRice.jpeg', productName: 'Red Rice' , plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { imgSrc: './Assets/PlaAssets/plaFreekeh.jpeg', productName: 'Freekeh' , plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    Grains2: {
        heading: 'Season Special || Top Deals',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBulgur.jpeg', productName: 'Bulgur', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { imgSrc: './Assets/PlaAssets/plaOat.jpeg', productName: 'Oats' , plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaPoniRice.jpeg', productName: 'PoniRice', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { imgSrc: './Assets/PlaAssets/plaWildRice.jpeg', productName: 'WildRice' , plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaWheat.jpeg', productName: 'Wheat',plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { imgSrc: './Assets/PlaAssets/plaSorghum.jpeg', productName: 'Sorghum', plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};
const pla_obj_Dryfruits = {
    Dryfruits1: {
        heading: 'All DryFruits and Nuts',
        data: [
            { imgSrc: './Assets/PlaAssets/plaBetelNuts.jpeg', productName:'BetelNuts', plpdescription: 'dummytext1', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaCashewnut.jpeg', productName: 'Cashewnut', plpdescription: 'dummytext2', plpprice: '₹100', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaDates.jpeg', productName: 'Dates' , plpdescription: 'dummytext3', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaDryBadam.jpeg', productName: 'Badam' , plpdescription: 'dummytext4', plpprice: '₹50', plporiginalPrice: '₹80' },
            { imgSrc: './Assets/PlaAssets/plaDryFig.jpeg', productName: 'DryFig' , plpdescription: 'dummytext5', plpprice: '₹70', plporiginalPrice: '₹100' },
            { imgSrc: './Assets/PlaAssets/plaFoxnuts.jpeg', productName: 'Foxnuts', plpdescription: 'dummytext6', plpprice: '₹100', plporiginalPrice: '₹120' },
        ]
    },
    Dryfruits2: {
        heading: 'Season Special || Top Deals',
        data: [
            { imgSrc: './Assets/PlaAssets/plaKesar.jpeg', productName: 'Kesar', plpdescription: 'dummytext7', plpprice: '₹50', plporiginalPrice: '₹70' },
            { imgSrc: './Assets/PlaAssets/plaKishmish.jpeg', productName: 'Kishmish', plpdescription: 'dummytext8', plpprice: '₹60', plporiginalPrice: '₹90' },
            { imgSrc: './Assets/PlaAssets/plaMakhana.jpeg', productName: 'Makhana', plpdescription: 'dummytext9', plpprice: '₹120', plporiginalPrice: '₹140' },
            { imgSrc: './Assets/PlaAssets/plapeanut.jpeg', productName: 'Peanut' , plpdescription: 'dummytext10', plpprice: '₹160', plporiginalPrice: '₹190' },
            { imgSrc: './Assets/PlaAssets/plaPista.jpeg', productName: 'Pista', plpdescription: 'dummytext11', plpprice: '₹65', plporiginalPrice: '₹95' },
            { imgSrc: './Assets/PlaAssets/plaBlackRaisin.jpeg', productName: 'BlackRaisin' , plpdescription: 'dummytext12', plpprice: '₹70', plporiginalPrice: '₹90' }
        ]
    }
};

function createHTMLStructure(pla_obj) {
    Object.keys(pla_obj).forEach(category => {
        const categoryData = pla_obj[category];
        const mainDiv = document.createElement('div');
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

            const productImg = document.createElement('img');
            productImg.id = 'plpproductimg';
            productImg.src = product.imgSrc;

            const productNameH4 = document.createElement('h4');
            productNameH4.id = 'plpProductName';
            productNameH4.textContent = product.productName;

            const descriptionH5 = document.createElement('h5');
            descriptionH5.id = 'plpdescription';
            descriptionH5.textContent = product.plpdescription;

            const priceDiv = document.createElement('div');
            priceDiv.id = 'plpPriceDiv';

            const priceH4 = document.createElement('h4');
            const priceSpan = document.createElement('span');
            priceSpan.id = 'plpCardPrice';
            priceSpan.textContent = product.plpprice;
            const discountPriceS = document.createElement('s');
            discountPriceS.id = 'plpdiscountPrice';
            discountPriceS.textContent = product.plporiginalPrice;

            priceH4.appendChild(priceSpan);
            priceH4.appendChild(discountPriceS);
            priceDiv.appendChild(priceH4);

            productCardDiv.appendChild(productImg);
            productCardDiv.appendChild(productNameH4);
            productCardDiv.appendChild(descriptionH5);
            productCardDiv.appendChild(priceDiv);

            cardGroupDiv.appendChild(productCardDiv);

           

        });

        mainDiv.appendChild(cardGroupDiv);
        let plpbdy=document.querySelector('.plpAgriKart')
        plpbdy.appendChild(mainDiv);
    });

    var platoplp = document.querySelectorAll('.plpproductcard');

    platoplp.forEach(function(element) 
        {
          console.log(1)
            element.addEventListener('click', platoplpfun);
        });
        
    function platoplpfun() {
        window.location.href = "./product_detail.html"; 
    }          

}

createHTMLStructure(plp_obj_vegetable);
