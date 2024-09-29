export function createValidProductObject(cartProducts, cart) {
  let products = [];
  for (const [index, cartProduct] of cartProducts.entries()) {
    const { category, image, name, price, id } = cartProduct;
    const { quantity } = cart[index];
    const product = {
      category,
      image,
      name,
      price,
      id: parseInt(id),
      quantity,
    };
    products = [...products, product];
  }
  return products;
}
