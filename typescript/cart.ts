
/*This is for local JS files
/// <reference path="scripts/test.js"/>*/

window.onload = function(){

    let buttons = document.querySelectorAll(".buy-button");

    for(let i = 0; i < buttons.length; i++){
        (<HTMLInputElement>buttons[i]).onclick = addToCart;
    }
}

class Product {
    name: string;
    description: string;
    price: number;
} 

function addToCart(){
    let clickedButton = <HTMLElement>this;
    let product = getProduct(clickedButton);

    addProductToCookie(product);
    
    let cartIcon = document.querySelector(".cart");
    cartIcon.innerHTML = "1";
}

function getProduct(clickedButton: HTMLElement) {
    let product = new Product();

    let productDiv = clickedButton.parentElement;
    product.description = productDiv.querySelector("p").innerText;
    let price = productDiv.querySelector("span").innerText;
    product.price = parseFloat(price.replace("$", ""));
    product.name = productDiv.querySelector("img").getAttribute("alt");
    return product;
}

function addProductToCookie(product: Product) {
   let cookieData = Cookies.get("cartCookie");
   let prods:Array<Product> = null;
   if(cookieData == undefined){
        prods = new Array<Product>();
   }
   else{
        prods = <Array<Product>>JSON.parse(cookieData);
   }
   prods.push(product);

   Cookies.set("cartCookie", JSON.stringify(prods));
   console.log("You have " + prods.length + " items");
}
