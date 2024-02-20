"use strict"

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

let valid=1;

let products_slide_obj=[

    {
        src:"Assets/food_crop.jpeg",
        Name:"Food Crops Sales"
    },
    {
        src:"Assets/feed2.jpeg",
        Name:"Feed Crops Sales"
    },
    {
        src:"Assets/fbc.jpeg",
        Name:"Fibre Crops Sales"
    },
    {
        src:"Assets/oilc.jpeg",
        Name:"Oil Crops Sales"
    },
    {
        src:"Assets/orc.jpeg",
        Name:"Ornamental Crops Sales"
    },
    {
        src:"Assets/pinkflowers.jpeg",
        Name:"Today's Deal|seasonal offers"
    },
    {
        src:"Assets/fc.jpeg",
        Name:"Food Crops Sales"
    },
    {
        src:"Assets/wheat.jpeg",
        Name:"Buy Natural Products"
    }
]

var b1=document.getElementById('plaSlideBtn1');
var b2=document.getElementById('plaSlideBtn2');
var img1=document.getElementById('plaSlideImg1');



b1.addEventListener("click",function(){plaprevious(this)});
b2.addEventListener("click",function(){plaprevious(this)});





pladisplayImages();

function pladisplayImages() {
    if (valid >= products_slide_obj.length) {
        valid = 0;
    }

    img1.src = products_slide_obj[valid].src;
    document.getElementById('plaSlideTxt').innerHTML = products_slide_obj[valid].Name;
    valid++;

    setTimeout(pladisplayImages, 2000);
}


function plaprevious(x)
    {
    
        if(x.innerHTML==b2.innerHTML)
            {
                if(valid==products_slide_obj.length)
                    {
                        valid=1
                    }
                else
                    {
                        img1.src=products_slide_obj[valid].src;
                        document.getElementById('plaSlideTxt').innerHTML=products_slide_obj[valid].Name;
                        valid++;     
                    }
            }
        else
            {
                if(valid==1)
                    {
                        valid=products_slide_obj.length;
                    }
                else
                    {
                        valid=valid-2;
                        if(valid>=0)
                            {
                                img1.src=products_slide_obj[valid].src;
                                document.getElementById('plaSlideTxt').innerText=products_slide_obj[valid].Name;
                                valid++
                            }
                        else
                            {
                                valid=1; 
                            }  
                    }
            }
    }   



