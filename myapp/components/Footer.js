'use client'
import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-900 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#">
            <FaTwitter size={24} className="icon" />
          </a>
          <a href="#">
            <FaFacebook size={24} className="icon" />
          </a>
          <a href="#">
            <FaLinkedin size={24} className="icon" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All rights reserved by TraditionalGames</p>
      </aside>
    </footer>
  );
};

export default Footer;
