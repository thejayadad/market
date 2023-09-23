'use client'
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="container mx-auto mt-8">
        <h2 className='text-center mt-8 mb-8 text-2xl text-gray-400'>All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray">
        <ProductItem />

        <ProductItem />

        <ProductItem />

        <ProductItem />

      </div>
    </div>
  );
};

export default ProductList;
