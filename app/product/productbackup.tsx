"use client"

import StarRating from "@/components/StarRating";
import { CartImageHolder } from "@/data/data";
import { Favorite, FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const SingleProductPage = () => {
    const fave :  boolean = true
    const [isliked, setIsLiked] = useState<Boolean>(fave);
    const product = CartImageHolder.find((product) => product.img)
    const[colorNumber, setColorNumber] = useState<string>("#669FCD");
    const [selectedOption, setSelectedOption] = useState<string>('door_delivery');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption);
    }
    return (
        <div className="w-full h-[100vh-6.5rem] flex flex-col  gap-10 overflow-scroll">
            {/* LINK PATH DIV */}
            <div className="w-full h-[50px] flex justify-around items-end">
                <h3 className=" text-black text-[15px] italic font-light font-inter sm:block">{`Home > Product > Home and Office > One Seater Sofa`}</h3>
            </div>
            {/* SINGLE PRODUCT EXHIBITION */}
            <div className="w-full h-full flex flex-col justify-center items-end  p-2 gap-0 group shadow-[#0A8585]-500 shadow-md md:flex-row ">
                {/* LEFT DIV */}
                <div className="w-full h-full flex-1 flex flex-col justify-around items-start gap-0 p-2 md:flex-row md:flex-3">
                    {/* IMAGE LEFT DIV */}
                    <div className="w-full h-full flex flex-col justify-around gap-2 p-4">
                    {/* IMAGE DIV */}
                    {product?.img && (
                        <div className="w-full h-full relative" style={{zIndex: 0}}>
                        <div className={`hidden group-hover:block h-[259px] absolute inset-0  opacity-60 rounded-2xl md:h-[403.5px] lg:h-[240px]`} style={{background: `${colorNumber}`}}></div>
                    <div className="w-full flex-1">
                        <Image 
                        src={product.img} 
                        alt=""
                        className="object-contain rounded-2xl"
                        width={600}
                        height={400}
                        style={{ zIndex: 1 }}
                        />
                    </div>
                    </div>
                    )
                    }
                    {/* COLOR DIV */}
                    <div className="w-full h-full flex-1 flex flex-row justify-center gap-4 items-center cursor-pointer">
                    {
                    product?.colors &&
                        product?.colors.map((color, index)=> (
                        <div className=" flex flex-row " style={{border: `1px solid ${color.color}`, width: "52px", height: "51px", background: `${color.color}`}} onClick={()=> {setColorNumber(color.color), console.log(colorNumber)}}></div>
                        ))
                        
                    }
                    </div>
                    {/* OPTIONS DIV */}
                    <div className="w-full h-full flex-1 flex gap-0 justify-center items-center cursor-pointer">
                        { product?.size &&
                            product?.size.map((size, index)=> (
                                <button 
                                className="text-red-500 min-w-[2rem] p-2 ring-1 ring-[#669FCD]-400 rounded-md"
                                style={{}}
                                >{size.title}</button>
                            ))
                        }
                    </div>
                    </div>
                    <div className="">
                    <div className="w-[56.7px] h-[47.48px] flex flex-row text-red-300 bg-white gap-7">
                                <div className="w-full h-full" onClick={()=> setIsLiked(!isliked)}>
                                    {
                                        isliked ?
                                        <FavoriteBorderOutlined className="absolute top-[250px] left-[125px] text-red-400 hover:rotate-[20deg] transition-all duration-500 cursor-pointer lg:top-[400px] lg:left-[130px]"  style={{width:56.7, height: 47.48}}/>
                                        : 
                                        <Favorite className="absolute top-[250px] left-[125px] text-red-400 hover:rotate-[20deg] transition-all duration-500 cursor-pointer lg:top-[400px] lg:left-[130px]"  style={{width:56.7, height: 47.48}}/>
                                    }
                                    
                                </div>
                                <div className="w-full h-full"><ShareOutlined className="absolute top-[250px] left-[250px] text-black hover:rotate-[20deg] transition-all duration-500 cursor-pointer lg:top-[400px] lg:left-[260px]" style={{width:56.7, height: 47.48}}/></div>
                            </div>
                    </div>
                    </div>
                    <div className=" w-full h-full p-1 flex-1 flex flex-col justify-start items-start gap-14 shadow-[#0A8585]-500 shadow-md" style={{marginTop: "-60px"}}>
                        {/* TOP DIV */}
                        <div className="flex flex-col p-4">
                            {/* PRODUCT NAME */}
                            <div className="">
                            <h1 className="text-black text-[24px] font-light font-inter">{product?.product}</h1>
                            </div>
                            {/* BRAND */}
                            <div className="">
                            <h3 className="text-black text-[16px] font-light font-inter">Brand: {product?.brand}</h3>
                            </div>
                            {/* VENDOR */}
                            <div className="">
                            <h3 className="text-black text-[16px] font-light font-inter">Vendor: {product?.vendor}</h3>
                            </div>
                            {/* VERIFIED */}
                            <div className="w-full flex flex-row justify-center items-center gap-2">
                                <div className="flex-2">
                                    <StarRating size={12}/>
                                </div>
                                <div className="flex-1">
                                <h3 className="text-black text-[13px] font-light font-inter">Over {product?.rating} verified rating</h3>
                                </div>
                            
                            </div>
                            {/* FREE DELIVERY BUTTON */}
                            <div className="">
                            <button className="w-[161px] h-[31px] bg-[#0A8585] rounded-lg text-white text-[16px] font-inter">Free Delivery</button>
                            </div>
                        </div>
                        {/* MIDDLE DIV */}
                        <div className="relative flex flex-col px-4 gap-10" style={{marginTop: "-60px"}}>
                            {/* PRICE DIV */}
                            <div className="">
                                <h1 className="text-black text-[25px]">${product?.price}</h1>
                            </div>
                            {/* CUT PRICE DIV */}
                            <div className="absolute top-[14px] px-0">
                                <h3 className="text-black text-[16px] font-extralight line-through">$1000</h3>
                            </div>
                            {/* PERCENTAGE DISCOUNT DIV */}
                            <div className="absolute bg-[#0A8585] w-[15px] h-[12px] flex justify-center items-center top-[22px] left-[65px]">
                                <h6 className="text-[6px] text-white">-20%</h6>
                            </div>
                            {/* IN STOCK DIV */}
                            <div className="absolute top-[35px]">
                                <h6 className="text-[8px] italic underline text-[#0A8585]">In Stock</h6>
                            </div>
                            {/* FREE SHIPPING DIV */}
                            <div className="w-[400px] absolute top-[45px]">
                                <h6 className="text-[14px] italic text-black font-extralight">Free <span className="text-red-500">2 days shipping</span> on order more than $1000</h6>
                            </div>
                            {/* SHIPPING RANGE DIV */}
                            <div className="w-[200px] absolute top-[64px]">
                                <h6 className="text-[14px] italic text-black font-extralight">Shipping from $50 to Nigeria</h6>
                            </div>
                        </div>
                        {/* END DIV */}
                        <div className="flex flex-col" style={{marginTop:"20px"}}>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div className="flex flex-row justify-start items-start p-3 gap-16 bg-[#0A8585] w-[406px] h-[58px] rounded-2xl cursor-pointer hover:opacity-60">
                                {/* CART ICON DIV */}
                                <div className="w-[58px] h-[28.42px] text-white text-[40px]">
                                    <FaCartPlus
                                    cname='w-[58px] h-[28.42px] text-2xl '
                                    />
                                </div>
                                {/* ADD TO CART */}
                                <div className="w-[150px] h-[28.42px] text-white text-[40px]">
                                    <h3 className="">Add to cart</h3>
                                </div>
                                </div>
                                {/* SOLD BY DIV */}
                                <div className="">
                                    <h6 className="text-black">Sold by <span className="text-red-500 underline">{product?.vendor}</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT DIV */}
                    <div className="w-full h-full flex-1 flex flex-col justify-start items-start gap-4 shadow-sm md:flex-1 lg:py-20 lg:px-10">
                        {/* DELIVERY TYPE DIV */}
                        <div className="flex flex-col justify-start items-center cursor-pointer">
                            <div className="">
                                <h2 className="text-[#0A8585] text-sm">Select Delivery Option</h2>
                                </div>
                                <div className="gap-2 flex flex-row justify-around items-center">
                                    <div className="">
                                <label htmlFor="" className="text-[#0A8585] font-inter text-[20px] cursor-pointer">
                                    <input 
                                    type="radio"
                                    name="deliveryOption"
                                    value="door_delivery"
                                    checked={selectedOption === 'door_delivery'}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                    />
                                    
                                </label>
                                </div>
                                <div className="">
                                    <h4 className="text-black font-inter text-[18px] font-extralight">Door Delivery</h4>
                                </div>
                                <div className="">
                                    <Link href='/'>
                                        <h6 className="text-[#0A8585] text-[14px] font-inter font-extralight">Details</h6>
                                    </Link>
                                </div>
                                </div>
                                <div className="gap-2 flex flex-row justify-around items-center">
                                <div className="">
                                <label htmlFor="" className="text-[#0A8585] font-inter text-[20px] cursor-pointer">
                                    <input 
                                    type="radio"
                                    name="deliveryOption"
                                    value="pick_up_station"
                                    checked={selectedOption === 'pick_up_station'}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                    />
                                    
                                </label>
                                </div>
                                <div className="">
                                    <h4 className="text-black font-inter text-[18px] font-extralight">
                                    Pickup station
                                    </h4>
                                    </div>
                                    <div className="">
                                        <Link href='/'>
                                            <h6 className="text-[#0A8585] text-[14px] font-inter font-extralight">Details</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full gap-2 flex flex-row justify-around items-center px-6">
                                    <div className="">
                                        <h4 className="text-black font-inter text-[18px] font-extralight">Return Policy</h4>
                                    </div>
                                    <div className="text-red-400">
                                        <h5 className="text-[#0A8585] text-[14px] font-inter font-extralight">Details</h5>
                                    </div>
                                </div>
                                <div className="">
                                <p className="hidden text-red-500 text-sm md:block">
                                    You selected {selectedOption === 'door_delivery' ? 'Door Delivery' : 'Pick up Station'}
                                </p>
                                </div>
                        </div>
                        {/* CHECKOUT DIV */}
                        <div className="w-[161px] h-[31px] bg-[#0A8585] rounded-lg flex justify-center px-10 items-center cursor-pointer hover:opacity-60">
                            <h3 className="text-white text-[16px] font-inter">CHECKOUT</h3>
                        </div>
                    </div>
                    </div>

            {/* PRODUCT DETAILS DIV */}
            <div className="relative w-full h-full flex-1 flex flex-col justify-start items-end  gap-0 md:flex-row md:flex-1 md:px-4  border-2 shadow-lg">
                {/* PRODUCT DETAILS INFO */}
                <div className=" h-full gap-4 md:w-3/4 md:px-36">
                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-col">
                        {/* HEADER DIV */}
                        <div className=" shadow-md">
                            <h4 className="text-[14px] text-black font-light">Product Details</h4>
                        </div>
                        {/* FURTHER DETAILS DIV */}
                        <div className="text-black p-4 font-inter font-extralight text-[18px]">{product?.desc}</div>
                        {/* LIST DIV */}
                        <div className="text-black px-10 font-inter font-extralight text-[18px]">
                            {product?.features &&
                            product?.features.map((feature)=> (
                                <ul className="list-disc">
                                <li className="">{feature.feature}</li>
                            </ul>
                            ))
                            }
                        </div>
                        <div className="text-black flex justify-center items-center flex-wrap md:flex-wrap lg:w-[700px]">
                            {
                                product?.images && 
                                product?.images.map((image)=> (
                                    <Image 
                                    src={image.image} 
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="flex-2 object-contain md:flex-wrap lg:flex-wrap xl:flex-wrap 2xl:flex-wrap"
                                    />
                                ))
                                }
                        </div>
                    </div>
                    {/* SPECIFICATIONS DIV */}
                    <div className="">
                        <div className="">
                            <h3 className="text-[16px] text-black font-light shadow-md">Specifications</h3>
                        </div>
                        <div className=" flex flex-col justify-end items-start shadow-md">
                            <table className="w-full border-separate border-spacing-2 p-0  gap-2 text-base text-black text-[14px] font-extralight font-inter">
                                <thead className="gap-2">
                                    <tr className="">
                                        <th className="">Brand</th>
                                        <th className="">Size</th>
                                        <th className="">Model</th>
                                        <th className="">Weight</th>
                                        <th className="">Color</th>
                                        <th className="">Material</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base">
                                    <tr className="">
                                        <th className="text-[14px]">{product?.brand}</th>
                                        {product?.size &&
                                            product?.size.map((size)=> (
                                                <div className="gap-0 h-[20px] flex flex-col justify-center items-center text-[16px] font-extralight">
                                                    <th className="">{size.title}</th>
                                                </div>
                                                
                                            ))
                                            }
                                        <th className="text-[14px]">{product?.Model}</th>
                                        <th className="text-[14px]">{product?.Weight}</th>
                                        <th className="">
                                        {product?.colors &&
                                            product?.colors.map((color)=> (
                                                <div className="gap-0 h-[20px] flex flex-col justify-center items-center text-[14px]">
                                                    <th className="">{color.color}</th>
                                                </div>
                                                
                                            ))
                                            }
                                        </th>
                                        <th className="text-[14px]">{product?.Material}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* CUSTOMERS REVIEW DIV */}
                    <div className="flex flex-col text-red-500 px-2">
                        <div className="">
                            <h6 className="text-black text-[16px] font-light shadow-md">Customers Review</h6>
                        </div>
                        <div className="shadow-lg h-[100px] md:h-[200px]"></div>
                    </div>
                </div>
                {/* ADVERT BANNER DIV */}
                <div className="text-red-400 w-full h-full flex flex-col md:h-[1230px] md:absolute md:top-[70px] md:right-[80px] md:w-1/4 bg-[#0A8585] lg:absolute lg:right-[155px] 2xl:top[-40px]">
                    <div className="w-full flex-1">
                    <Image src='/images/baby.png' alt="" height={700} width={499} className="object-contain"/>
                    </div>
                    <div className="w-full flex-1 flex flex-col px-6" style={{marginTop: "-78px"}}>
                        <div className=" flex flex-col justify-center items-start">
                            <div className="">
                                <h1 className="text-white font-lato">20% OFF <span className="text-red-500">SALES</span></h1>
                            </div>
                            <div className="">
                                <Link href='/'><h6 className="text-red-500 font-lato text-[20px] font-light">see more</h6></Link>
                            </div>
                        </div>
                        <div className="text-red-500 flex flex-col">
                        <div className="">
                                <h1 className="text-white font-lato">BECOME A SELLER</h1>
                            </div>
                            <div className="">
                                <Link href='/'><h6 className="text-red-500 font-lato text-[20px] font-light">coming soon</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                    <Image src='/images/woman.png' alt="" height={581} width={499} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleProductPage;