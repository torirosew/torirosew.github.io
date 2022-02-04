//Fill shop with all products
let cardContainer = document.querySelector('#cardContainer');
for (let i=0; i<(imagesArr.length); i++) {
    cardContainer.appendChild(new FoodCard(i));
}

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
