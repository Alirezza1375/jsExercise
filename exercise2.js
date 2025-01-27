const products = [
  {id: 1, name: 'tv', price: 10000},
  {id: 2, name: 'mobile', price: 5000, discount: "5%"},
  {id: 3, name: 'pc', price: 22000},
  {id: 4, name: 'dildo', price: 75000, discount: 12000}
  
];

const basket = [
  {id: 1, pId: 4, qty: 3},
  {id: 2, pId: 3, qty: -1},
  {id: 3, pId: 2, qty: 1} 
];

/*total price*/

const totalPrice = basket.reduce((total, item) => {
  const product = products.find(p => p.id === item.pId)
  let price = product.price

  if (product.discount) {
    if (typeof product.discount === "string") {
      
      price -= price * Number(product.discount.replace("%", "")) / 100;
    } else {
      price = price - product.discount
    }; 
 
  }


  return total + (price * item.qty)  
}, 0)

console.log(totalPrice) 

