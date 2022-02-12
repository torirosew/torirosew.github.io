let productDetails = {};
let searchStr = "";
let filterTerm="";
let basket = {};



let fruitfilter = document.querySelector('#fruit-filter');
let vegetablefilter = document.querySelector('#vegetable-filter');
let meatfishfilter = document.querySelector('#meatfish-filter');
let condimentsfilter = document.querySelector('#condiments-filter');
let snacksfilter = document.querySelector('#snacks-filter');
let allfilter = document.querySelector('#all-filter');

// fruitfilter.addEventListener("click", e => {
//     cardContainer.innerHTML = "";
//     for (let i=0; i<(imagesArr.length); i++) {
//         if (imagesArr[i][1] == "fruit") {
//             if(basket[i]===undefined){
//                 cardContainer.appendChild(new FoodCard(i,0));
//             }
//             else cardContainer.appendChild(new FoodCard(i,basket[i]));
//         }
//     }
// });

fruitfilter.addEventListener("click", e => {
    filterTerm="fruit"
    refreshAllCards()
});

vegetablefilter.addEventListener("click", e => {
    filterTerm="veg"
    refreshAllCards()
});

meatfishfilter.addEventListener("click", e => {
    filterTerm="meat"
    refreshAllCards()
});

condimentsfilter.addEventListener("click", e => {
    refreshAllCards()
    filterTerm="con"
});

snacksfilter.addEventListener("click", e => {
    filterTerm="snack"
    refreshAllCards()
});

allfilter.addEventListener("click", e => {
    filterTerm=""
    refreshAllCards()
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

/* Init stuff */
function init(){

    initProducts();

    //Cookies notice
    const closeBtn = document.querySelector('.close-button');
    const overlay = document.querySelector('#overlay');
    closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });

    if(getCookie("basket")===""){
        basket={};
    }
    else{
        basket=JSON.parse(getCookie("basket"));
    }

    refreshAllCards()

}

//Add 1 to the quantity
function increment(element){
    var thisID = element.closest("#shop_product").getAttribute("data-num");
    if(basket[thisID] === undefined){
        basket[thisID] = 0;
    }
    changeQuantity(element,thisID,parseInt(basket[thisID])+1);
    refreshAllCards()
}

//Subtract 1 from the quantity
function decrement(element){
    var thisID = element.closest("#shop_product").getAttribute("data-num");
    if(basket[thisID] === undefined){
        changeQuantity(element,thisID,0);
    }else{
        if(basket[thisID] > 0){
            changeQuantity(element,thisID,parseInt(basket[thisID])-1);
        }
    }
}

function searchUpdate(){
    searchStr=document.getElementById("searchFilter").value;
    refreshAllCards()

}

/*
* Change the quantity of the product with productID
*/
function changeQuantity(element,productID, newQuantity){
    basket[productID] = newQuantity;
    if(newQuantity == 0)
        delete basket[productID];

    refreshCard(element.parentElement,newQuantity);
    refreshBasket();
}


/* Updates card quantity value */
function refreshCard(card_footer,newQuantity){
    card_footer.querySelector("#basketQuantity").innerHTML=newQuantity;
}


/* Returns true if should be in list, otherwise false */
function checkFilter(i){
    if(searchStr!==""){
        return imagesArr[i][0].toLowerCase().includes(searchStr.toLowerCase());
    }
    if(filterTerm!==""){
        console.log(filterTerm)
        return imagesArr[i][1]==filterTerm;
    }
    return true;
}

function refreshAllCards(){
    cardContainer.innerHTML = "";
    for (let i=0; i<(imagesArr.length); i++) {
        if(!checkFilter(i)) continue;

        if(basket[i]===undefined){
            cardContainer.appendChild(new FoodCard(i,0));
        }
        else cardContainer.appendChild(new FoodCard(i,basket[i]));
    }
    if(cardContainer.innerHTML===""){
        cardContainer.innerHTML="<div class=\"h1 text-center \">Your search came back empty!</div>"
    }
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
    return total;
}

init()
