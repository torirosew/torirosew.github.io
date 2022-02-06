let productDetails = {};
let searchStr = "";
let basket = {};



let fruitfilter = document.querySelector('#fruit-filter');
let vegetablefilter = document.querySelector('#vegetable-filter');
let meatfishfilter = document.querySelector('#meatfish-filter');
let condimentsfilter = document.querySelector('#condiments-filter');
let snacksfilter = document.querySelector('#snacks-filter');
let allfilter = document.querySelector('#all-filter');

fruitfilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if (imagesArr[i][1] == "fruit") {
            cardContainer.appendChild(new FoodCard(i));
        }
    }
});

vegetablefilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if (imagesArr[i][1] == "veg") {
            cardContainer.appendChild(new FoodCard(i));
        }
    }
});

meatfishfilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if (imagesArr[i][1] == "meat") {
            cardContainer.appendChild(new FoodCard(i));
        }
    }
});

condimentsfilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if (imagesArr[i][1] == "con") {
            cardContainer.appendChild(new FoodCard(i));
        }
    }
});

snacksfilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if (imagesArr[i][1] == "snack") {
            cardContainer.appendChild(new FoodCard(i));
        }
    }
});

allfilter.addEventListener("click", e => {
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        cardContainer.appendChild(new FoodCard(i));
    }
});



/* Basket quantity stuff */

function init(){
    //Fill shop with all products
    let cardContainer = document.querySelector('#cardContainer');
    for (let i=0; i<(imagesArr.length); i++) {
        cardContainer.appendChild(new FoodCard(i));
    }


    var elements = document.getElementsByClassName("adjustUp");
    var eIn;
    alert(elements.length)
    for(eIn=0;eIn<elements.length; eIn++){
        elements[eIn].addEventListener("click",increment);
        alert(eIn)
    }

}

//Add 1 to the quantity
  function increment(ev){
    alert("INCREMENT");
    // var thisID = ev.target.parentElement.closest(".card__content").getAttribute("data-num");
    // if(basket[thisID] === undefined){
    //   basket[thisID] = 0;
    // }
    // changeQuantity(thisID,parseInt(basket[thisID])+1);
  }

  //Subtract 1 from the quantity
  function decrement(ev){
    var thisID = ev.target.parentElement.closest(".card__content").getAttribute("data-num");
    if(basket[thisID] === undefined){
      changeQuantity(thisID,0);
    }else{
      if(basket[thisID] > 0){
        changeQuantity(thisID,parseInt(basket[thisID])-1);
      }
    }
  }


init()