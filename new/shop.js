//Fill shop with all products
let cardContainer = document.querySelector('#cardContainer');
for (let i=0; i<imagesArr.length; i++) {
    cardContainer.appendChild(new FoodCard(i));
}