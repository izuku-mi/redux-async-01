import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = useSelector((state) => state.pr.productlist);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
