
let valid=1;

let products_slide_obj=[

    {
        src:"./Assets/PlaAssets/platop.jpg",
        Name:"Food Crops Sales"
    },
    {
        src:"./Assets/PlaAssets/plapf.jpg",
        Name:"All Premium Fruits"
    },
    {
        src:"./Assets/PlaAssets/plaveg.jpg",
        Name:"Fresh Farm Vegetables"
    },
    {
        src:"./Assets/PlaAssets/pladod.jpg",
        Name:"Deal of the Day"
    },
    {
        src:"./Assets/PlaAssets/plat3.jpg",
        Name:"Ornamental Crops Sales"
    },
    {
        src:"./Assets/PlaAssets/platop2.jpg",
        Name:"Seasonal Special"
    },
    {
        src:"./Assets/PlaAssets/plat7.jpg",
        Name:"Dry Fruits And Nuts"
    },
    {
        src:"./Assets/PlaAssets/platop6.jpg",
        Name:"Buy Natural Products"
    }
]

var b1=document.getElementById('plaSlideBtn1');
var b2=document.getElementById('plaSlideBtn2');
var img1=document.getElementById('plaSlideImg1');

pladisplayImages();

function pladisplayImages() {
    if (valid >= products_slide_obj.length) {
        valid = 0;
    }
    img1.style.backgroundImage = `url(${products_slide_obj[valid].src})`;
    // img1.src = products_slide_obj[valid].src;
    document.getElementById('plaSlideTxt').innerHTML = products_slide_obj[valid].Name;
    valid++;

    setTimeout(pladisplayImages, 2000);
}

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
      const pla_obj = {
            vegetables: {
                heading: 'Up to 60% off | Farm Vegetables & more ',
                category:"vegetables",
                data: [
                    { imgSrc: './Assets/PlaAssets/plaBeetroot.jpeg', productName: 'Beetroot' },
                    { imgSrc: './Assets/PlaAssets/plaCabbage.jpeg', productName: 'Cabbage' },
                    { imgSrc: './Assets/PlaAssets/plaCaliflower.jpeg', productName: 'Cauliflower' },
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
                heading: 'Inspired by your Wish List',
                category:"fruits",
                data: [
                    { imgSrc: './Assets/PlaAssets/plaApple.jpeg', productName: 'Apple' },
                    { imgSrc: './Assets/PlaAssets/plaAvocoda.jpeg', productName: 'Avocoda' },
                    { imgSrc: './Assets/PlaAssets/plaBanana.jpeg', productName: 'Banana' },
                    { imgSrc: './Assets/PlaAssets/plaBlueberry.jpeg', productName: 'Blueberry' },
                    { imgSrc: './Assets/PlaAssets/plaGrapes.jpeg', productName: 'Grapes' },
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
                heading: 'Today’s Deal | Most Selling Products',
                category:"oil",
                data: [
                    { imgSrc: './Assets/PlaAssets/plaBadam.jpeg', productName: 'Badam' },
                    { imgSrc: './Assets/PlaAssets/plaCastorSeed.jpeg', productName: 'CastorSeed' },
                    { imgSrc: './Assets/PlaAssets/plaCornOil.jpeg', productName: 'Corn' },
                    { imgSrc: './Assets/PlaAssets/plaFlaxSeeds.jpeg', productName: 'FlaxSeeds' },
                    { imgSrc: './Assets/PlaAssets/plaMustardSeeds.jpeg', productName: 'Mustard Seeds' },
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
                heading: "Related to items you've viewed",
                category:"grains",
                data: [
                    { imgSrc: './Assets/PlaAssets/plaBarely.avif', productName: 'Barely' },
                    { imgSrc: './Assets/PlaAssets/plaBasmatiRice.jpeg', productName: 'BasmatiRice' },
                    { imgSrc: './Assets/PlaAssets/plaBlackRice.jpeg', productName: 'BlackRice' },
                    { imgSrc: './Assets/PlaAssets/plaBrownRice.jpeg', productName: 'BrownRice' },
                    { imgSrc: './Assets/PlaAssets/plaRedRice.jpeg', productName: 'Red Rice' },
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
                heading: 'More items to consider',
                category:"dry_fruits",
                data: [
                    { imgSrc: './Assets/PlaAssets/plaBetelNuts.jpeg', productName: 'BetelNuts' },
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
        const plabdy = document.querySelector(".plaAgriKart");
        function createProductCard(category, data) {
            const cardMain = document.createElement('div');
            cardMain.className = 'plaProductCardMain';
            plabdy.appendChild(cardMain);


            const headingDiv = document.createElement('div');
            headingDiv.className = 'plaProductHeaing';
            cardMain.appendChild(headingDiv);

            const heading = document.createElement('h3');
            heading.textContent = data.heading;
            headingDiv.appendChild(heading);

            const cardContainer = document.createElement('div');
            cardContainer.className = 'plaproductcard-container';
            cardMain.appendChild(cardContainer);

            const maxCards = 6;

            for (let i = 0; i < maxCards && i < data.data.length; i++) {
                 console.log(data.category);
                const productCard = document.createElement('div');
                productCard.className = 'plaproductcard';
                productCard.id = data.category
                const img = document.createElement('img');
                img.src = data.data[i].imgSrc;
                img.id = data.category
                img.className = 'plaproductcardImg';
                const productName = document.createElement('h4');
                productName.className='plaProductName'
                productName.textContent = data.data[i].productName;
                productName.id = data.category
                productName.className="plaCardProductName"
                productCard.appendChild(img);
                productCard.appendChild(productName);
                cardContainer.appendChild(productCard);
               
                var platoplp = document.querySelectorAll('.plaproductcard');

                platoplp.forEach(function(element) 
                    {       
                        element.addEventListener('click', platoplpfun);
                    });
                    
                function platoplpfun(e) {
                    localStorage.setItem("category",e.target.id)
                    window.location.href = "./plphtml.html"; 
                }          
          
            }

            const btnDiv = document.createElement('div');
            btnDiv.className = 'placardbtn';
            headingDiv.appendChild(btnDiv);
            
            if (data.data.length > maxCards) {

                const leftBtn = document.createElement('div');
                leftBtn.className = 'placardleftbtn';
                leftBtn.innerHTML = '<i class="fa-solid fa-circle-left" style="color: #153c2e;"></i>';
                leftBtn.onclick = () => navigateProducts('right', category, data.data, cardContainer);
                btnDiv.appendChild(leftBtn);

                const rightBtn = document.createElement('div');
                rightBtn.className = 'placardrightbtn';
                rightBtn.innerHTML = '<i class="fa-solid fa-circle-right" style="color: #153c2e;"></i>';
                rightBtn.onclick = () => navigateProducts('left', category, data.data, cardContainer);
                btnDiv.appendChild(rightBtn);
            }
        }

        function navigateProducts(direction, category, products, container){
            const cardContainer = container;
            cardContainer.innerHTML = '';

            let currentIndex = 0; 
            const maxCards = 6;

            if (direction === 'left') {
                currentIndex = Math.max(0, products.length - maxCards);
            }
            

            for (let i = currentIndex; i < currentIndex + maxCards && i < products.length; i++) {
                
                const productCard = document.createElement('div');
                productCard.className = 'plaproductcard';
                const img = document.createElement('img');
                img.src = products[i].imgSrc;
                img.id = 'plaproductcardImg';
                const productName = document.createElement('h4');
                productName.textContent = products[i].productName;
                productName.id="plaCardProductName"
                productCard.appendChild(img);
                productCard.appendChild(productName);
                cardContainer.appendChild(productCard);
            }
        }
        

        createProductCard('vegetables', pla_obj.vegetables);
        createProductCard('fruits', pla_obj.fruits);
        createProductCard('oil', pla_obj.oil);
        createProductCard('grains', pla_obj.grains);
        createProductCard('dry_fruits', pla_obj.dry_fruits);
 
        let navbarsearch = document.getElementById('navSearchBox');
        navbarsearch.addEventListener('input', search_Products); 
       
        // searchbar function topnav
        function search_Products() {
            let input = document.getElementById('navSearchBox').value.toLowerCase();
            let productCards = document.querySelectorAll('.plaproductcard');
        
            productCards.forEach((card) => {
                let productName = card.querySelector('.plaCardProductName').textContent.toLowerCase();
        
                if (!productName.includes(input)) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
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




// const navSearchBox = document.getElementById('navSearchBox');


// navSearchBox.addEventListener('click', showCategoryList);


// function showCategoryList() {
//     console.log('search clicked')

//     const categoryList = ['fruits', 'vegetables', 'oil crops', 'grains', 'dry fruits'];

//     const dropdownMenu = document.createElement('div');
//     dropdownMenu.className = 'categoryDropdown';

//     categoryList.forEach(category => {
//         const categoryItem = document.createElement('div');
//         categoryItem.textContent = category;
//         categoryItem.className = 'categoryItem';

//         categoryItem.addEventListener('click', () => {
//             navSearchBox.value = category;

//             dropdownMenu.style.display = 'none';
//         });

//         dropdownMenu.appendChild(categoryItem);
//     });

//     dropdownMenu.style.top = `${navSearchBox.offsetTop + navSearchBox.offsetHeight}px`;
//     dropdownMenu.style.left = `${navSearchBox.offsetLeft}px`;

//     document.body.appendChild(dropdownMenu);

//     document.addEventListener('click', function closeDropdown(e) {
//         if (!e.target.closest('.categoryDropdown') && e.target !== navSearchBox) {
//             dropdownMenu.style.display = 'none';
//             document.removeEventListener('click', closeDropdown);
//         }
//     });
// }

// document.getElementById('navSearchIcon').addEventListener('click', searchProducts);

// function searchProducts() {
//     const selectedCategory = navSearchBox.value.toLowerCase();

//     const searchData = pla_obj[selectedCategory];

//     if (searchData) {
//         localStorage.setItem("category", selectedCategory);
//         window.location.href = "./plphtml.html";
//     } else {
//         console.log("Invalid category selected");
//     }
// }
 