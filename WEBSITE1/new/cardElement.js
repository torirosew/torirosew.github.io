//Tag structure for custom element
const cardElementTemplate = document.createElement('template');
cardElementTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css">
<link href='css/bootstrap.css' rel='stylesheet'>
<link href="js/bootstrap.js" rel="stylesheet">
<div class="col-md">
    <div class="card mt-4">
        <div id="shop_product" data-num=0>
        <div class="shop-product-img">
            <img id="pic" class="card-img-top" src="" onerror="this.onerror=null; this.src='images/error/not_found.png'">
        </div>
        <div class="card-body">
            <h4 id="foodName" class="card-title"></h4>
            <p id="foodInfo" class="card-text"></p>
        </div>
        <div id="footer" class="card-footer">
            <button class="btn adjustUp" onclick="increment(this)">Add to basket</button>
            <button class="btn adjustDown" onclick="decrement(this)">Remove</button>
            <input type="number" class="qToAdd" id="qToAdd" min=1 value=1>
            <h4 id="basketQuantity" class="card-text text-right basket-num">0</h4>
        </div>
    </div>
</div>
`;


function prettyFloat(x,nbDec) { 
    if (!nbDec) nbDec = 100;
    var a = Math.abs(x);
    var e = Math.floor(a);
    var d = Math.round((a-e)*nbDec); if (d == nbDec) { d=0; e++; }
    var signStr = (x<0) ? "-" : " ";
    var decStr = d.toString(); var tmp = 10; while(tmp<nbDec && d*tmp < nbDec) {decStr = "0"+decStr; tmp*=10;}
    var eStr = e.toString();
    return signStr+eStr+"."+decStr;
}

class FoodCard extends HTMLElement {

    constructor(index, basketQuantity) {

        //Basic custom element set up
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(cardElementTemplate.content.cloneNode(true));

        //Set food info
        let foodInfo = "";
        this.shadowRoot.querySelector('#foodName').innerHTML = imagesArr[index][0];
        let foodPrice = imagesArr[index][5];
        if (foodPrice >= 100) {
            foodInfo = '&pound' + prettyFloat(foodPrice/100);
        } else {
            foodInfo = "" + foodPrice +"p"
        }
        foodInfo += " per " + imagesArr[index][3] + " " + imagesArr[index][4];
        this.shadowRoot.querySelector('#foodInfo').innerHTML = foodInfo;
        // Need to query basket instead? Or have the basket be a function of reading food obj quanities?
        this.shadowRoot.querySelector('#basketQuantity').innerHTML = basketQuantity;
        this.shadowRoot.querySelector('#pic').setAttribute('src','images/'+imagesArr[index][2]);
        this.shadowRoot.querySelector('#shop_product').setAttribute('data-num',index);

        this.shadowRoot.querySelector('#qToAdd').addEventListener('blur', e => {
            console.log('blur happened');
            let toValidate = this.shadowRoot.querySelector('#qToAdd');
            console.log(toValidate.value);
            if (!(toValidate.value >= 1)) {
                toValidate.value = 1;
            } else if (toValidate.value % 1 != 0) {
                toValidate.value = Math.round(toValidate.value);
            }
        });

    }

}

window.customElements.define("card-element", FoodCard);
