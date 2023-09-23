'use client'
import React from 'react';

const FeaturedItems = () => {
  // Sample featured items data
  const featuredItemsData = [
    {
      id: 1,
      name: 'Featured Product 1',
      imageUrl: 'https://images.pexels.com/photos/1249650/pexels-photo-1249650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Featured Product 2',
      imageUrl: '/featured-product-2.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Featured Product 3',
      imageUrl: '/featured-product-3.jpg', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Featured Product 4',
      imageUrl: '/featured-product-4.jpg', // Replace with actual image URL
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredItemsData.map((item) => (
            <div key={item.id} className="relative group h-92">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-92 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-70 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
