import React, { useState } from 'react';
import LogoImg from '../../assets/images/LogoW.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can replace these with any icon set

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={LogoImg} alt="Logo" className="w-10 h-10" />
            <h1 className="font-bold text-2xl tracking-wide">Sky Global</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle Menu"
            >
              {isOpened ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpened && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base font-medium animate-fade-in">
          <Link to="/" className="block hover:underline" onClick={() => setIsOpened(false)}>
            Home
          </Link>
          <Link to="/privacy-policy" className="block hover:underline" onClick={() => setIsOpened(false)}>
            Privacy Policy
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
