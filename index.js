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


 var price = setPrice();
 itemAdd = {itemName: [item], itemPrice: [price()]};
 
 function setPrice(){
   return Math.floor(Math.random()*100);
 }
 
 cart.push(itemAdd);

}

function viewCart() {
  // write your code here
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
