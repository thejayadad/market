'use client'

import React from 'react'

const Hero = () => {
  return (
    <section>
        <section className="bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 py-16 text-white">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
    <div className="w-full lg:w-1/2">
      <img
        src="https://images.pexels.com/photos/10626015/pexels-photo-10626015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Board Game Wonderland"
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-5xl font-semibold mb-4">Welcome to Board Game Wonderland</h1>
      <p className="text-lg mb-6">
        Explore a world of endless fun and excitement with the best board games.
      </p>
      <a href="#" className="btn btn-gray">Explore Games</a>
    </div>
  </div>
</section>

    </section>
  )
}

export default Hero
