var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var price = Math.floor((Math.random())*100);
 var itemObj = {itemName: item, itemPrice: price};

 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

addToCart('daikon');

function viewCart() {
  // write your code here
  var cartView = [];
  var i = 0;
  
  while(i<cart.length){
    cartView.push(cart[i]);
    i++;
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
