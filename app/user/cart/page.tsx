"use client"
import React, { useState } from "react";
import Image from "next/image";
import CartItem from "@/components/CartItem";
import Link from "next/link";


const Cart: React.FC = () => {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);

    const items = 790;
    const quantity = counter1;
    const totalItems = items * quantity;

    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-2 py-2 w-full">
                <div className="flex items-center justify-center w-full bg-appTitleBgColor">
                    <h1 className="text-base lg:text-base leading-4 lg:leading-9 font-semibold text-white"> Cart Itmes </h1>
                </div>
                <div className="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="md:w-full">
                        <div className="w-full flex flex-col md:flex-row items-strech mt-2 md:mt-2 lg:mt-2 pb-12 border-gray-200 border-b">
                            <div className="flex justify-end md:hidden">
                                <button className="mt-2">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                                            fill="#1F2937"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center md:w-2/5 bg-yellow-700">
                                <img className="object-center object-cover" src="https://i.ibb.co/JrLCXKq/Group-984.png" alt=" black wooden stool" role="img" />
                            </div>
                            <div className="md:flex hidden w-full justify-between md:ml-6">
                                <div className="w-full">
                                    <div className="flex flex-row items-start justify-between">
                                        <div className="flex justify start">
                                            <p className="text-md font-semibold leading-normal text-gray-800">Black Wooden Stool</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-appRed">
                                            <button aria-label="Cancel product" className="  rounded">
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                                                        fill="#fff"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-4 mt-2">
                                        <p className="text-base leading-none text-gray-800">${items}</p> <span> x </span>   <p className="text-base leading-none text-gray-800">{counter1}</p>
                                    </div>
                                   
                                    <div className="mt-2 flex w-full items-center justify-between">
                                        <div className="w-full flex flex-col h-full">
                                            <div className="flex justify-start">
                                                <div className="p-0 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3 bg-appTitleBgColor">
                                                    <button onClick={() => setCounter1(counter1 - 1 < 0 ? 0 : counter1 - 1)} aria-label="decrease quantity" className="">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 4L6 8L10 12" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <p className="bg-white quantity1 text-base text-gray-800 px-1">{counter1}</p>
                                                    <button onClick={() => setCounter1(counter1 + 1)} aria-label="increase quantity" className="">
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4L10 8L6 12" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="hidden md:block flex justify-start">
                                                <p className="md:mt-3 text-gray-800 text-left">
                                                    <span className="text-base leading-tight text-gray-800">Total : </span>
                                                    <span className="text-base font-medium">${totalItems} </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>

                    </div>


                </div>

                <div className="flex justify-center items-center flex-col mt-20 w-full">
                    <div className="flex items-center justify-between mt-32 gap-4">
                        <h3 className="text-base font-semibold leading-tight text-gray-800">Total Cart Items Price  {" "}</h3>
                        <p className="text-base font-bold text-gray-800"> ${totalItems}</p>
                    </div>
                    <button className="focus:outline-none hover: focus:ring-2 w-full mt-4 bg-gray-800 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 py-5">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;