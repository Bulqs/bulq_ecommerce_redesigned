"use client"

import Container from "@/components/Container";
import StarRating from "@/components/StarRating";
import { CartImageHolder } from "@/data/data";
import { Favorite, FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const SingleProductPage: React.FC = () => {
    const fave: boolean = true
    const [isliked, setIsLiked] = useState<Boolean>(fave);
    const product = CartImageHolder.find((product) => product.img)
    const [colorNumber, setColorNumber] = useState<string>("#669FCD");
    const [selectedOption, setSelectedOption] = useState<string>('door_delivery');

    const [image, setImage] = useState<string>('https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_6_img_4.png');
    const [color, setColor] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);

    const items = 790;
    const quantity = counter1;
    const totalItems = items * quantity;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption);
    }


    return (
        <div className="w-full h-auto relative">
            <div className="w-full flex flex-row mt-[120px] p-2">
                {/* Div section for image color and size goes here */}
                <div className="md:w-9/12">

                    <div className="relative  flex w-full  flex-col px-4 xl:px-12 justify-start lg:justify-center items-start  p-1  md:items-center lg:items-stretch py-14 pb-4 md:py-6 xl:pb-8 xl:pt-12">
                        <div className=" w-full md:w-auto  flex md:flex-row flex-col md:items-start md:justify-center lg:items-stretch  md:space-x-6 xl:space-x-8">

                            <div className="w-full lg:w-6/12 flex flex-col-reverse items-start justify-center ">
                                <div className=" flex flex-row items-center justify-between w-full p-4  ">
                                    <button onClick={(e) => setImage(e.target.src)} className="hover:opacity-70 transition duration-500 ease-in-out shadow-md shadow-neutral-700">
                                        <img className="object-cover w-8 h-8 md:w-12 md:h-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_6_img_4.png" alt="girl" />
                                    </button>
                                    <button onClick={(e) => setImage(e.target.src)} className="hover:opacity-70 transition duration-500 ease-in-out shadow-md shadow-neutral-700">
                                        <img className="object-cover w-8 h-8 md:w-12 md:h-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_6_image_3.png" alt="girl" />
                                    </button>
                                    <button onClick={(e) => setImage(e.target.src)} className="hover:opacity-70 transition duration-500 ease-in-out shadow-md shadow-neutral-700">
                                        <img className="object-cover w-8 h-8 md:w-12 md:h-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_6_img_2.png" alt="girl" />
                                    </button>
                                    <button onClick={(e) => setImage(e.target.src)} className="hover:opacity-70 transition duration-500 ease-in-out shadow-md shadow-neutral-700">
                                        <img className="object-cover w-8 h-8 md:w-12 md:h-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_6_img_1.png" alt="girl" />
                                    </button>
                                </div>
                                <div className="flex w-full md:w-full shadow-md shadow-neutral-700">
                                    <img id="mainImage" className="object-cover h-40  w-full md:object-cover md:h-[500px] " src={image} alt="girl" />
                                </div>
                            </div>

                            {/* Product Details Section Goes Here Details  */}
                            <div className="mt-6 md:mt-0 relative w-full md:w-6/12 flex justify-between items-start flex-col ">
                                <h1 className="text-base md:text-xl xl:text-2xl font-medium leading-4 md:leading-5 xl:leading-normal text-start text-gray-800">
                                    One Seater Sofa with Quality and Premium Cotton
                                </h1>
                                <p className=" mt-1 md:mt-2 text-sm md:text-base  leading-tight text-center text-gray-800">
                                    <span className="font-semibold"> BRAND: {" "} </span> <span className="font-medium"> Nike/Similar Product from Nike </span>
                                </p>
                                <p className=" mt-1 md:mt-2 text-sm md:text-base  leading-tight text-center text-gray-800 gap-6">
                                    <span className="font-semibold"> Original Price: {" "} $22 </span> <span className="font-medium line-through bg-red-700 text-white py-1 px-2">  Discount Price: {" "} $22 </span>
                                </p>
                                <p className=" mt-1 md:mt-2 text-sm md:text-base  leading-tight text-center text-gray-800">
                                    <span className="font-semibold"> VENDOR: {" "} </span> <span className="font-medium"> ALI EXPRESS </span>
                                </p>
                                <p className=" mt-4 md:mt-6 text-base md:text-lg xl:text-xl  leading-tight text-center text-gray-800">$22</p>
                                <hr className="my-2 w-full text-gray-200" />
                                <div className="flex justify-start items-start flex-col space-y-2 xl:space-y-2">
                                    <p className="text-lg md:text-base font-medium leading-4 md:leading-5 text-center text-gray-800">Size</p>
                                    <div className="flex justify-start items-center space-x-4">
                                        <button className="w-8 h-8 xl:w-10  xl:h-10 border border-gray-300 hover:border-gray-600 text-center focus:bg-gray-600 focus:text-white text-lg leading-none text-center text-gray-800">
                                            XS
                                        </button>
                                        <button className="w-8 h-8 xl:w-10  xl:h-10 border border-gray-300 hover:border-gray-600 text-center focus:bg-gray-600 focus:text-white text-lg leading-none text-center text-gray-800">
                                            S
                                        </button>
                                        <button className="w-8 h-8 xl:w-10  xl:h-10 border border-gray-300 hover:border-gray-600 text-center focus:bg-gray-600 focus:text-white text-lg leading-none text-center text-gray-800">
                                            M
                                        </button>
                                        <button className="w-8 h-8 xl:w-10  xl:h-10 border border-gray-300 hover:border-gray-600 text-center focus:bg-gray-600 focus:text-white text-lg leading-none text-center text-gray-800">
                                            L
                                        </button>
                                        <button className="w-8 h-8 xl:w-10  xl:h-10 border border-gray-300 hover:border-gray-600 text-center focus:bg-gray-600 focus:text-white text-lg leading-none text-center text-gray-800">
                                            XL
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-start items-start flex-col space-y-4 xl:space-y-6">
                                    <p className="text-base md:text-md font-medium leading-4 md:leading-5 text-center text-gray-800">Color - <span className="font-light text-gray-600 text-md" id="color">{color}</span></p>
                                    <div className="flex justify-start items-center space-x-4">
                                        <button onClick={() => setColor("Burnt Orange")} className="ring-1 ring-gray-300 ring-offset-2 w-6 h-6 md:w-8 md:h-8 focus:ring-offset-2 focus:ring-1 focus:ring-gray-600 bg-yellow-600 hover:bg-yellow-700">
                                        </button>
                                        <button onClick={() => setColor("Burnt Red")} className="ring-1 ring-gray-300 ring-offset-2 w-6 h-6 md:w-8 md:h-8 focus:ring-offset-2 focus:ring-1 focus:ring-gray-600 bg-red-600 hover:bg-red-700">
                                        </button>
                                        <button onClick={() => setColor("Burnt Purple")} className="ring-1 ring-gray-300 ring-offset-2 w-6 h-6 md:w-8 md:h-8 focus:ring-offset-2 focus:ring-1 focus:ring-gray-600 bg-indigo-600 hover:bg-indigo-700">
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-start items-center space-x-3">
                                    <img className="w-5 h-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view-svg1.svg" alt="globe" />
                                    <p className="text-base leading-none text-gray-600">Free worldwide shipping</p>
                                </div>
                                <div className="mt-4 flex justify-start items-center space-x-3">
                                    <div className="w-5 h-5 bg-green-500 rounded-full" />
                                    <p className="text-base leading-none text-gray-600">In Stock, ready to ship</p>
                                </div>
                                <div className="mt-6 w-full  flex flex-col space-y-4 lg:w-full ">
                                    <button className="hover:bg-appTitleBgColor hover:text-white w-full border border-gray-800 py-3 px-3 flex justify-between items-center">
                                        <span className="w-32" />
                                        <div className="w-32 flex justify-center items-center">
                                            <p className="text-base font-medium leading-none ">Add to cart</p>
                                        </div>
                                        <div className="w-32 flex justify-end items-end ">
                                            <img className="bg-white" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_svg_2.svg" alt="arrow" />
                                        </div>
                                    </button>
                                    <button className="py-4 px-3 w-full text-center bg-gray-800 border border-gray-800 text-base font-medium leading-none text-white hover:text-gray-800 hover:bg-white">
                                        Buy it now
                                    </button>
                                </div>
                            </div>
                            {/* Product Details Section Ends Here Details  */}
                        </div>

                    </div>
                </div>
                {/* Div section for image color and size ends here */}


                {/* Div section for checkout goes here */}
                <div className=" md:w-3/12 bg-white md:p-8">

                    <div className="px-2 md:px-2 py-2 w-full">
                        <div className="flex items-center justify-center w-full bg-appTitleBgColor p-2 ">
                            <h1 className="text-base lg:text-base leading-4 lg:leading-9 font-semibold text-white"> Cart Itmes </h1>
                        </div>

                        <div className="lg:px-4 md:px-2 px-4 mt-10 flex flex-col items-start justify-start ">
                            <p className="text-base leading-none text-appBanner font-semibold"> Select Delivery Option </p>
                            <div className="flex items-start justify-start gap-4 mt-6 flex-col">
                                <div className="flex gap-3 items-center">
                                    <input
                                        type="radio"
                                        name="radio"
                                        className="w-4 h-4 accent-indigo-700 cursor-pointer"
                                    />
                                    <p className="text-sm leading-none text-black"> Door Delivery </p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <input
                                        type="radio"
                                        name="radio"
                                        className="w-4 h-4 accent-indigo-700 cursor-pointer"
                                    />
                                    <p className="text-sm leading-none text-black">Pickup station</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p className="text-sm leading-none text-black">
                                        Return Policy
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="lg:px-4 md:px-2 px-4 mt-10 flex flex-col items-start justify-start">
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


                        <div className="flex justify-center items-center flex-col mt-2 w-full">
                            <div className="flex items-center justify-between mt-32 gap-4">
                                <h3 className="text-base font-semibold leading-tight text-gray-800">Total Cart Items Price  {" "}</h3>
                                <p className="text-base font-bold text-gray-800"> ${totalItems}</p>
                            </div>
                            <button className="focus:outline-none hover: focus:ring-2 w-full mt-4 bg-gray-800 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 py-5">
                                <Link href="/checkout">
                                    CHECKOUT
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Div section for image details ends here */}

            </div>

            {/* buttom div */}
            <div className="mx-auto w-full flex flex-col bg-white h-auto md:pb-16 border-t-4 border-gray-700">

                {/* Upper Product Explanation Details Page Goes Here */}
                <div className=" w-11/12 bg-white h-auto mx-auto px-2 mt-8">
                    <div className="flex w-full px-1 py-3 bg-white" >
                        <h4 className="text-black"> Product Details </h4>
                    </div>

                    <div className="flex w-full p-1 bg-white h-auto text-justify">
                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                            eum illo sapiente
                            assumenda eveniet natus
                            consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                            eum illo sapiente
                            assumenda eveniet natus
                            consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                            eum illo sapiente
                            assumenda eveniet natus
                            consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!

                        </p>
                    </div>


                </div>
                {/* Upper Product Explanation Details Page Ends Here */}

                {/* Lower Product Explanation Details Page Goes Here */}
                <div className=" w-11/12 bg-white h-auto mx-auto px-2 mt-4 ">
                    <div className="flex w-full px-1 py-3 bg-white" >
                        <h4 className="text-black"> Specifications </h4>
                    </div>

                    <div className="flex w-full p-1 bg-white h-auto items-center justify-between ">

                        <div className="w-3/12 h-auto flex flex-col border border-gray-400">
                            <div className="heading p-2 border-b border-gray-400">
                                <h5 className="text-black"> KEY FEATURES </h5>
                            </div>
                            <div className="wordings w-full p-2 text-justify">
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                                    eum illo sapiente
                                    assumenda eveniet natus
                                    consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!
                                </p>
                            </div>
                        </div>

                        <div className="w-3/12 h-auto flex flex-col border border-gray-400">
                            <div className="heading p-2 border-b border-gray-400">
                                <h5 className="text-black"> WHAT'S IN THE BOX </h5>
                            </div>
                            <div className="wordings w-full p-2 text-justify">
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                                    eum illo sapiente
                                    assumenda eveniet natus
                                    consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!
                                </p>
                            </div>
                        </div>

                        <div className="w-3/12 h-auto flex flex-col border border-gray-400">
                            <div className="heading p-2 border-b border-gray-400">
                                <h5 className="text-black"> SPECIFICATIONS </h5>
                            </div>
                            <div className="wordings w-full p-2 text-justify">
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magni beatae sequi voluptates
                                    eum illo sapiente
                                    assumenda eveniet natus
                                    consequuntur, consequatur atque ratione nesciunt libero! Dolorem veniam corporis quidem optio!
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
                {/* Lower Product Explanation Details Page Ends Here */}


            </div>
        </div>
    )
};

export default SingleProductPage;