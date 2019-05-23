window.onload = function () {
    var buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(function (currButton) {
        return currButton.onclick = addToCart;
    });
};
function addToCart() {
    var clickedButton = this;
    var product = getProduct(clickedButton);
    addProductToCookie(product);
    var cartIcon = document.querySelector("fa-shopping-cart");
    cartIcon.nextElementSibling.innerHTML = "1";
}
var Product = (function () {
    function Product() {
    }
    return Product;
}());
function addProductToCookie(product) {
    var cookieData = Cookies.get("cartCookie");
    var prods = null;
    if (cookieData == undefined) {
        prods = new Array();
    }
    prods = JSON.parse(cookieData);
    prods.push(product);
    Cookies.set("cartCookie", JSON.stringify(prods));
}
function getProduct(clickedButton) {
    var productDiv = clickedButton.parentElement;
    var prodImage = productDiv.querySelector("img");
    var desc = productDiv.querySelector("p").innerHTML;
    var price = productDiv.querySelector(".price").innerHTML;
    var product = new Product();
    product.price = parseFloat(price.replace("$", ""));
    product.name = prodImage.getAttribute("alt");
    return product;
}
