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
  if (cart.length>0){
  
  // i'll need to push the cart values into a new array to combine the itemName and itemPrice.  
    while(i<cart.length){
    cartView.push(`${cart.itemName[i]} at $${cart.itemPrice[i]}`);
    i++;
    }
    
  } else{
    return `Your shopping cart is empty.`;
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
