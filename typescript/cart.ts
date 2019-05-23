
window.onload = function(){
    let buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(currButton => 
        (<HTMLInputElement>currButton).onclick = addToCart)
}

function addToCart(){
    let clickedButton = <HTMLElement>this;
    let product = getProduct(clickedButton);
    addProductToCookie(product);
    let cartIcon = document.querySelector("fa-shopping-cart");
    cartIcon.nextElementSibling.innerHTML = "1";
}

class Product{
    name:string;
    description:string;
    price:number;
}

function addProductToCookie(product:Product) {
    let cookieData = Cookies.get("cartCookie");
    let prods:Array<Product> = null;
    if(cookieData == undefined){
        prods = new Array<Product>();
    }
    prods = <Array<Product>>JSON.parse(cookieData);
    prods.push(product);

    Cookies.set("cartCookie", JSON.stringify(prods));
}

function getProduct(clickedButton: HTMLElement) {
    let productDiv = clickedButton.parentElement;
    let prodImage = productDiv.querySelector("img");
    let desc = productDiv.querySelector("p").innerHTML;
    let price = productDiv.querySelector(".price").innerHTML;
    let product = new Product();
    product.price = parseFloat(price.replace("$", ""));
    product.name = prodImage.getAttribute("alt");
    return product;
}
