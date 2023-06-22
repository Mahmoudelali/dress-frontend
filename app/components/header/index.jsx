"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const routes = [
  { href: "/new", label: "New Arrivals" },
  { href: "/evenings", label: "Evenings" },
  { href: "/bridal", label: "Bridal" },
  { href: "/headpieces", label: "Headpieces" },
  { href: "/accessories", label: "Accessories" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact Us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full max-w-[1500px] z-10 ${isMenuOpen&&"bg-white"} lg:bg-transparent transition-colors duration-500`}>
      <div className="flex flex-row px-6 py-4 lg:px-8 lg:py-6 justify-between items-center w-full lg:w-[70%] relative">
        <div className="w-56 h-20 bg-gray-400 rounded-xl"></div>
        <button
          className="lg:hidden h-9 w-10"
          onClick={handleMenuToggle}
        >
          <span className="mx-1 block my-2 h-[2px] w-8 bg-black"></span>
          <span className="mx-1 block my-2 h-[2px] w-8 bg-black"></span>
          <span className="mx-1 block my-2 h-[2px] w-8 bg-black"></span>
        </button>
        <nav
          className={`absolute w-full overflow-hidden  bg-white lg:bg-transparent  z-20 lg:relative lg:flex  lg:w-auto lg:mr-10 transition-all  duration-500 ease-in-out ${
            isMenuOpen ? "w-full left-0 opacity-100 h-[calc(100vh-100%)] top-full lg:h-auto " : "w-0 left-1/2 top-[50vh] lg:top-0 lg:left-0 opacity-0 lg:opacity-100 h-0 lg:h-auto "
          }`}
        >
          {routes.map((route, index) => {
            return (
              <Link href={route.href} key={index} className="px-3 py-4 block">
                {route.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
