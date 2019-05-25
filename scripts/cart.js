window.onload = function () {
    var buttons = document.querySelectorAll(".buy-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = addToCart;
    }
};
var Product = (function () {
    function Product() {
    }
    return Product;
}());
function addToCart() {
    var clickedButton = this;
    var product = getProduct(clickedButton);
    addProductToCookie(product);
    var cartIcon = document.querySelector(".cart");
    cartIcon.innerHTML = "1";
}
function getProduct(clickedButton) {
    var product = new Product();
    var productDiv = clickedButton.parentElement;
    product.description = productDiv.querySelector("p").innerText;
    var price = productDiv.querySelector("span").innerText;
    product.price = parseFloat(price.replace("$", ""));
    product.name = productDiv.querySelector("img").getAttribute("alt");
    return product;
}
function addProductToCookie(product) {
    var cookieData = Cookies.get("cartCookie");
    var prods = null;
    if (cookieData == undefined) {
        prods = new Array();
    }
    else {
        prods = JSON.parse(cookieData);
    }
    prods.push(product);
    Cookies.set("cartCookie", JSON.stringify(prods));
    console.log("You have " + prods.length + " items");
}
