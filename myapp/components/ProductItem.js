'use client'
import React from 'react';

const ProductItem = () => {
  return (
    <div className="p-2 transform hover:translate-y-[-4px] h-[300px] transition-transform duration-300">
      <img
        src="https://images.pexels.com/photos/695266/pexels-photo-695266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product Name"
        className="w-full h-full object-cover"
      />
      <div className="p-2 flex flex-col text-center">
        <h3 className="text-md text-gray-700 mb-2 cursor-pointer">Product Name</h3>
          <span className="text-sm cursor-pointer text-center">$99.99</span>
      </div>
    </div>
  );
};

export default ProductItem;
