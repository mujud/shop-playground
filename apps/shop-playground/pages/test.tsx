import styled from 'styled-components';
import { H1a } from '@shop-playground/ui-elements';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
const StyledPage = styled.div`
  .page {
  }
`;
type Product = { name: string; price: number; currency: string };
const defaultProduct: Product = { name: '', price: 0, currency: '$' };
export function Test() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const fetch = useCallback(async () => {
    const res = await axios.get<Product[]>('http://localhost:3333/products');
    setProducts(res.data);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);
  const handleAdd = async () => {
    await axios.post('http://localhost:3333/products', product);
    setProduct(defaultProduct);
    await fetch();
    //make api call to add the product
    //reset default product
    //update the list of Product
  };
  return (
    <StyledPage>
      <p>Higgledy Piggledy</p>
      <H1a value="Pong" />
      <p>fhjskahfjds</p>
      <div>
        <label>Name</label>
        <input
          value={product.name}
          onChange={(e) => {
            setProduct({
              ...product,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          value={product.price}
          onChange={(e) => {
            setProduct({
              ...product,
              price: Number(e.target.value),
            });
          }}
        />
      </div>
      <div>
        <label>Currency</label>
        <input
          value={product.currency}
          onChange={(e) => {
            setProduct({
              ...product,
              currency: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <hr />
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              Name:{product.name}
              <br />
              Currency:{product.currency}
              <br />
              Price:{product.price}
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </StyledPage>
  );
}

export default Test;
