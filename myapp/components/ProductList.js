'use client'
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray">
        <ProductItem />

        <ProductItem />

        <ProductItem />

        <ProductItem />

      </div>
    </div>
  );
};

export default ProductList;
