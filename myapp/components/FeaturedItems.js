'use client'
import React from 'react';
import ProductItem from './ProductItem'; // Import your ProductItem component

const FeaturedItems = () => {
  // Sample featured items data
  const featuredItemsData = [
    {
      id: 1,
      name: 'Featured Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 49.99,
      imageUrl: '/featured-product-1.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Featured Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 59.99,
      imageUrl: '/featured-product-2.jpg', // Replace with actual image URL
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className='h-92'>
        featured item
      </div>
    </section>
  );
};

export default FeaturedItems;
