let shoppingCart = {
    name: "someName",
    purchases: [{
      "item": "teeshirt",
      "color": "blue",
      "size": "medium"
    },
    {
      "item": 'shoes',
      "size": 43,
      "color": "black"
    }
  ]
}

console.log(shoppingCart.purchases[shoppingCart.purchases.length].item)
//console.log(shoppingCart.purchases[2].item)
console.log(shoppingCart.purchases.length)