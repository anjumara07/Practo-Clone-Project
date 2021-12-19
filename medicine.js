let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
 
function addToCart(event) {
event.preventDefault();
let tg = event.target.parentNode.parentNode;

let image = tg.children[0].src;
let name = (tg.children[1].textContent);
let price = (tg.children[2].children[0].children[0].textContent);
let actualPrice = (tg.children[2].children[0].children[1].textContent);
let discount = (tg.children[2].children[0].children[2].textContent);
let description = (tg.children[2].children[0].children[3].textContent);

// creating Object taking the data

let obj = {
name: name,
image: image,
price: price,
actualPrice: actualPrice,
discount: discount,
description: description,
qty:1
}

// pushing the obj in cart data

cartData.push(obj);
localStorage.setItem("cartData", JSON.stringify(cartData));

// to get cart total item

document.querySelector("#productlen").textContent = cartData.length;

}