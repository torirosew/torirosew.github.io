var imagesArr = [
["Apples","fruit","Apple1.jpg",6,"unit",225],
["Apricots","fruit","Apricot1.jpg",320,"g",190],
["Artichokes","veg","Artichoke1.jpg","1","unit",200],
["Asparagus","veg","Asparagus1.jpg",125,"g",180],
["Basil","other","Basil1.jpg",1,"unit",250],
["Beetroots","veg","Beetroot1.jpg",1,"kg",90],
["Biscuits","other","Biscuit1.jpg",200,"g",150],
["Blackberries","fruit","Blackberry1.jpg",300,"g",250],
["Blueberries","fruit","Blueberry1.jpg",200,"g",160],
["Bread","other","Bread1.jpg",1,"unit",160],
["Broccoli","veg","Broccoli1.jpg",350,"g",60],
["Brussel Sprouts","veg","Brusselsprout1.jpg",250,"g",150],
["Burgers","other","Burger1.jpg",4,"unit",450],
["Butternut Squash","veg","Squash1.jpg",1,"unit",180],
["Cabbage","veg","Cabbage1.jpeg",1,"unit",70],
["Carrots","veg","Carrot1.jpg",1,"kg",100],
["Cauliflower","veg","Cauliflower1.jpg",1,"unit",90],
["Chards","veg","Chard1.jpg",150,"g",180],
["Cherries","fruit","Cherry1.jpg",700,"g",545],
["Chillis","veg","Chilli1.jpg",50,"g",60],
["Chocolate Bar","other","Chocolate1.jpg",1,"unit",190],
["Crisps", "other","Crisp1.jpg",6,"unit",275],
["Cucumbers","veg","Cucumber1.jpg",1,"unit",50],
["Eggs","other","Egg1.jpg",6,"unit",110],
["Garlic","veg","Garlic1.jpg",150,"g",150],
["Grapefruits","fruit","Grapefruit1.jpeg",2,"unit",310],
["Honey","other","Honey1.jpg",1,"unit",480],
["Jelly Beans","other","Jellybean1.jpg",50,"g",100],
["Kale","veg","Kale1.jpg",250,"g",125],
["Ketchup","other","Ketchup1.jpg",240,"g",300],
["Leeks","veg","Leek1.jpg",500,"g",95],
["Lettuce","veg","Lettuce1.jpg",1,"unit",50],
["Milk","dairy","Milk1.jpg",1,"pint",180],
["Mushrooms","veg","Mushroom1.jpg",300,"g",100],
["Nectarines","fruit","Nectarine1.jpg",4,"unit",200],
["Onions","veg","Onion1.jpg",1,"kg",65],
["Orange Juice","other","Orangejuice1.jpg",1,"pint",180],
["Peas","veg","Pea1.jpg",500,"g",150],
["Peaches","fruit","Peach1.jpg",2,"unit",400],
["Peanut Butter","other","Peanutbutter1.jpg",300,"g",210]
["Pears","fruit","Pear1.jpg",6,"unit",200],
["Peppers","veg","Pepper1.jpg",3,"unit",140],
["Plums","fruit","Plum1.jpg",250,"g",395],
["Pomegranates","fruit","Pomegranate1.jpg",1,"unit",130],
["Potatoes","veg","Potato1.jpg",1,"kg",300],
["Pumpkin","veg","Pumpkin1.jpg",1,"unit",80],
["Radishes","veg","Radish1.jpg",150,"g",100],
["Raspberries","fruit","Raspberry1.jpg",300,"g",300],
["Rice","other","Rice1.jpg",2000,"g",130],
["Salmon","other","Salmon1.jpg",240,"g",400],
["Sausages","other","Sausage1.jpg",6,"unit",400],
["Spinach","veg","Spinach1.jpg",200,"g",255],
["Strawberries","fruit","Strawberry1.jpg",800,"g",300],
["Sweetcorn","veg","Sweetcorn1.jpg",3,"unit",100],
["Tomatoes","veg","Tomato1.jpg",500,"g",350],
["Watermelon","fruit","Watermelon1.jpg",1,"unit",295]
];

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

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
