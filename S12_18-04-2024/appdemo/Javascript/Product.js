export let price = 4567;

export const qty = 50;

export function totalAmount() {
  console.log(price * qty);
}

function changePrice() {
  price = 9999;
  console.log(price);
}

export default changePrice;
