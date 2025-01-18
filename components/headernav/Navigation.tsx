"use client";
import Image from 'next/image';
import logo from '../public/images/logo4.svg';
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {

    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    // const [activeGlobalMenu, setActiveGlobalMenu] = useState<string | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null); // State for toggling sub items

    const toggleMenu = (menu: string) => {
        setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };

    const toggleSubItem = (item: string) => {
        setActiveSubItem((prevItem) => (prevItem === item ? null : item));
    };


  return (
      <nav className="shadow-md w-full px-4">
          <div className="mx-auto px-4 sm:px-6 lg:px-0">
              <div className="flex justify-between">
                  {/* Navigation Links */}
                  <div className="hidden md:flex space-x-8 items-center">
                      <ul className="NavGlobUl">
                          <li
                              className={`NavGlobLI ${activeMenu === 'computeraccesories' ? 'bg-appNav' : ''}`}
                          >
                              <button
                                  onClick={() => toggleMenu('computeraccesories')}
                                  className="text-white text-sm"
                              >
                                  Computer and  Accesories
                              </button>
                              {activeMenu === 'computeraccesories' && (
                                  <div className="navigationDivDropDown">
                                      <ul className="navigationDivDropDownUl">
                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Laptops
                                              </p>
                                              {/* Submenu is always displayed */}
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Desktop & Monitors
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Wi-Fi Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Software
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                      </ul>
                                  </div>
                              )}
                          </li>

                          <li
                              className={`NavGlobLI ${activeMenu === 'phonetablets' ? 'bg-appNav' : ''}`}
                          >
                              <button
                                  onClick={() => toggleMenu('phonetablets')}
                                  className="text-white text-sm"
                              >
                                  Phones and Tablet
                              </button>
                              {activeMenu === 'phonetablets' && (
                                  <div className="navigationDivDropDown">
                                      <ul className="navigationDivDropDownUl">
                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Tablets
                                              </p>
                                              {/* Submenu is always displayed */}
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Desktop & Monitors
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Wi-Fi Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Software
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>


                                      </ul>
                                  </div>
                              )}
                          </li>

                          <li
                              className={`NavGlobLI ${activeMenu === 'vendor' ? 'bg-appNav' : ''}`}
                          >
                              <button
                                  onClick={() => toggleMenu('vendor')}
                                  className="text-white text-sm"
                              >
                                  Vendor
                              </button>
                              {activeMenu === 'vendor' && (
                                  <div className="navigationDivDropDown">
                                      <ul className="navigationDivDropDownUl">
                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Apple
                                              </p>
                                              {/* Submenu is always displayed */}
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Nike
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Wi-Fi Accesories
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Computer Software
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="px-0 py-2 h-auto">
                                              <p className="navigationSubheading">
                                                  Pc Gaming
                                              </p>
                                              <ul className="navigationSubheadingUl">
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                                  <li className="navigationSubheadingLI">
                                                      <Link href="#">
                                                          Laptop Model 1
                                                      </Link>
                                                  </li>
                                              </ul>
                                          </li>


                                      </ul>
                                  </div>
                              )}
                          </li>

                          <li
                              className={`NavGlobLI ${activeMenu === 'aboutus' ? 'bg-appNav' : ''}`}
                          >
                              <button
                                  onClick={() => toggleMenu('aboutus')}
                                  className="text-white text-sm"
                              >
                                  <Link href="" className="text-white">
                                      About Us
                                  </Link>
                              </button>

                          </li>
                      </ul>
                  </div>

                  <div className="flex justify-center items-center">
                      <Link
                          href="/reviews"
                          className="NavGlobLI !py-1 first:text-white bg-appTitleBgColor rounded-md flex items-center justify-center transition-colors duration-300 hover:bg-black hover:text-red-500 hover:shadow-md hover:shadow-gray-900/90"
                      >
                          Download App
                      </Link>
                  </div>

                  {/* Mobile Menu (Optional) */}
                  <div className="flex items-center md:hidden">
                      <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
                          <svg
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"
                              />
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default Navigation;
