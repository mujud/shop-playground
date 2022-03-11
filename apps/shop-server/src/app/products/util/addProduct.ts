import { writeFileSync } from 'fs';
import Product from '../types/Product';
import getProducts from './getProducts';

const addProduct = (product: Product) => {
  const products = getProducts();
  writeFileSync('./data/products', JSON.stringify([...products, product]));
};
export default addProduct;
