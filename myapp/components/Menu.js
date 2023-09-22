import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const links = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Contact', url: '/contact' },
];

const Menu = () => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>
            <a>{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
