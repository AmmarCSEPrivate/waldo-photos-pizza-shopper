export const getPizzas = state => state.pizzas;

export const getPizzaPrice = pizza => {
  let basePrice = 0;
  if(pizza.size){
    basePrice = pizza.size.basePrice;
  }
  const price =  pizza.toppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, basePrice);

  return price;
}
