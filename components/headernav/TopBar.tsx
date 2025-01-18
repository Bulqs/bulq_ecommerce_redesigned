"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import logo from '../../public/images/logo5.svg';
import { MdAccountCircle } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import Cart from '@/app/cart/page';


const TopBar: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState<number>(2); // Set the cart count here
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false); // Track Cart visibility

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle Cart visibility
    };

    return (
        <div className="flex items-center justify-between bg-appNav px-6 py-4">
            {/* Logo */}
            <Image
                src={logo}
                alt="Profile"
                className="w-60 h-10 cursor-pointer -ml-12"
            />

            {/* Search Bar */}
            <div className="flex items-center w-1/2">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-gray-400"
                />
                <button className="ml-2 p-2 bg-appTitleBgColor text-white rounded-md">
                    <FiSearch size={20} />
                </button>
            </div>

            {/* Profile & Cart */}
            <div className="flex items-center space-x-6">
                {/* Profile Image and Dropdown */}
                <div className="relative">
                    <div className="flex flex-row items-center justify-center cursor-pointer pr-2" onClick={toggleDropdown}>
                        <MdAccountCircle className="text-white h-10 w-10" />
                        <p className="font-semibold text-white"> Account </p>
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-44 bg-appNav rounded-sm shadow-lg shadow-appBanner z-10">
                            <ul className="py-1 font-semibold text-white">
                                <li>
                                    <a href="/login" className="block px-4 py-2 hover:bg-gray-100 hover:text-appBanner">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a href="/create-account" className="block px-4 py-2 hover:bg-gray-100 hover:text-appBanner">
                                        Create Account
                                    </a>
                                </li>
                                <li>
                                    <a href="/wishlist" className="block px-4 py-2 hover:bg-gray-100 hover:text-appBanner">
                                        Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 hover:text-appBanner">
                                        Settings
                                    </a>
                                </li>
                                <li className="bg-white text-red-700">
                                    <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 hover:text-appBanner">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Help Icon */}
                <div className="cursor-pointer flex items-center justify-center">
                    <p className='font-semibold text-white'> Need Help </p>
                    <IoMdHelp size={24} className="text-white" />
                </div>

                {/* Cart Icon */}
                <div className="relative cursor-pointer" onClick={toggleCart}>
                    <FiShoppingCart size={24} className="text-white" />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                {/* Render Cart component when isCartOpen is true */}
                {isCartOpen && (
                    <div className="absolute top-[73px] right-1 w-full max-w-sm bg-white shadow-lg p-4 z-20">
                        <Cart /> {/* Render your Cart component */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopBar;
