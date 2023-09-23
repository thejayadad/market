'use client'

import React from 'react';

const ProductItem = () => {
  return (
    <div className="border shadow-lg bg-white p-2">
      <img
        src="https://images.pexels.com/photos/695266/pexels-photo-695266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product Name"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-gray-700 font-semibold mb-2">Product Name</h3>
        <p className="text-gray-300 mb-4">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold cursor-pointer">$99.99</span>
          <button className="btn btn-gray">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
