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

function initProducts(callback){
    productDetails = [];
    for(var i = 0; i < imagesArr.length; i++){
      var thisProduct = {name: imagesArr[i][0], type: imagesArr[i][1], image: imagesArr[i][2], 
        packsize: imagesArr[i][3], units: imagesArr[i][4], price: imagesArr[i][5], productID: i};
      productDetails.push(thisProduct);
    }
    if(callback !== undefined)
      callback();
}


/* Basket quantity stuff */

function init(){
    initProducts()


    //Fill shop with all products
    let cardContainer = document.querySelector('#cardContainer');
    for (let i=0; i<(imagesArr.length); i++) {
        cardContainer.appendChild(new FoodCard(i));
    }


    var elements = cardContainer.shadowRoot.getElementsByClassName("adjustUp");
    var eIn;
    alert(elements.length)
    for(eIn=0;eIn<elements.length; eIn++){
        elements[eIn].addEventListener("click",increment);
        // alert(eIn)
    }

}

//Add 1 to the quantity
  function increment(element){
    var thisID = element.closest("#shop_product").getAttribute("data-num");
    if(basket[thisID] === undefined){
      basket[thisID] = 0;
    }
    changeQuantity(thisID,parseInt(basket[thisID])+1);
    var div=element.closest("#shop_prodct");
  }

  //Subtract 1 from the quantity
  function decrement(element){
    var thisID = element.closest("#shop_product").getAttribute("data-num");
    if(basket[thisID] === undefined){
      changeQuantity(thisID,0);
    }else{
      if(basket[thisID] > 0){
        changeQuantity(thisID,parseInt(basket[thisID])-1);
      }
    }
  }

  /*
  * Change the quantity of the product with productID
  */
  function changeQuantity(productID, newQuantity){
    basket[productID] = newQuantity;
    if(newQuantity == 0)
      delete basket[productID];
    refreshBasket();
}

  //Recalculate basket
  function refreshBasket(){
    let total = 0;
    for(const productID in basket){
      let quantity = basket[productID];
      let price = productDetails[productID].price;
      total = total + (price * quantity);
    }
    setCookie('basket', JSON.stringify(basket));
    try{
      document.querySelector("#basketNumTotal").innerHTML = (total / 100).toFixed(2);
    }catch(e){
      
    }
    alert(total)
    return total;
  }

init()