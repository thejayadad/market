'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar bg-base-100 ${isSticky ? 'fixed top-0 left-0 w-full shadow-md z-[100]' : ''}`;

  return (
    <header>
      <div className={navbarClasses}>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Wonderland Games</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <AiOutlineShoppingCart size={25} />
            <li>
              <details>
                <summary>UserName</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <button>Logout</button>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
