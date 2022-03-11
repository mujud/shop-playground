import { readFileSync } from 'fs';
import Product from '../types/Product';

const getProducts = () => {
  const productsString = readFileSync('./data/products').toString();
  let products: Product[];
  if (!productsString) {
    products = [];
  } else {
    products = JSON.parse(productsString);
  }
  return products;
};
export default getProducts;
