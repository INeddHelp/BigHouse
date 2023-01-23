var cart = [];
var cart1 = document.getElementById("cart1");
var cart2 = document.getElementById("cart2");

if(cart1){
    cart1.innerHTML = "cart1";
    cart1.addEventListener("click", function() {
      cart.unshift("x")
    });
    document.body.appendChild(cart1);
}

console.log(cart)

if(cart2){
  cart2.innerHTML = "cart2";
  cart2.addEventListener("click", function() {
    cart.unshift("y")
  });
  document.body.appendChild(cart2);
}

console.log(cart)