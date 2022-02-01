//Tag structure for custom element
const cardElementTemplate = document.createElement('template');
cardElementTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css">
<link href='css/bootstrap.css' rel='stylesheet'>
<link href="js/bootstrap.js" rel="stylesheet">
<div class="col-md-4">
    <div class="card">
        <img id="pic" class="card-img-top" src="">
        <div class="card-body">
            <h4 id="foodName" class="card-title"></h4>
            <p id="foodInfo" class="card-text"></p>
            <button class="addToBasket">Add to basket</button>
        </div>
    </div>
</div>
`;

class FoodCard extends HTMLElement {

    constructor(index) {

        //Basic custom element set up
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(cardElementTemplate.content.cloneNode(true));

        //Set food info
        let foodInfo = "";
        this.shadowRoot.querySelector('#foodName').innerHTML = imagesArr[index][0];
        let foodPrice = imagesArr[index][5];
        if (foodPrice >= 100) {
            foodInfo = "£" + (foodPrice/100);
        } else {
            foodInfo = "" + foodPrice +"p"
        }
        foodInfo += " per " + imagesArr[index][3] + " " + imagesArr[index][4];
        this.shadowRoot.querySelector('#foodInfo').innerHTML = foodInfo;
        this.shadowRoot.querySelector('#pic').setAttribute('src','images/'+imagesArr[index][2]);

    }

}

window.customElements.define("card-element", FoodCard);