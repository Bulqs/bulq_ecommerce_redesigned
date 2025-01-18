import { HomePageProductList } from "@/components/HomePageProductList";
import Rating from "@/components/Rating";
import { HomeProductsList, Reviews, VendorDescHolder, VendorsBanner, VenorsTags } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Vendor = () => {
    return (
        <div className="w-full h-[100vh - 6.5rem] flex flex-col justify-center items-center gap-2 py-1 sm:gap-4">
            {/* BANNER DIV */}
            <div className="bg-[#0A8585] w-[395px] h-[180px] flex flex-row justify-center items-center sm:w-[600px] sm:h-[240px]">
                {/* BANNER DESC DIV */}
                <div className=" flex-1 sm:block flex justify-center items-start flex-col ">
                    <h1 className="text-white text-[30px] font-inter font-light">
                        {VendorsBanner.desc}
                    </h1>
                    <h6 className="text-white text-[13px] font-inter font-light">{VendorsBanner.small}</h6>
                </div>
                {/* BANNER IMAGE DIV */}
                <div className="flex-1 flex flex-row justify-end items-center h-[306px] sm:justify-end sm:flex-[1] " >
                    <Image src={VendorsBanner.image} alt="" height={800} width={700} className="sm:h-[300px] sm:w-[265px] object-contain"/>
                </div>
            </div> 

            {/* CARDS */}
            <HomePageProductList HomeProductsLis={HomeProductsList} />

            {/* BOTTOM TAG DIV */}
            <div className=" flex flex-row justify-between px-2 items-center w-[350px] h-[30px] sm:w-[545px]" style={{marginBottom: "15px"}}>
                {
                    VenorsTags.map((tag)=> (
                        <div className="bg-[#0A8585] text-white flex flex-row gap-2 h-[30px] w-[105px] z-0 sm:w-[160px] sm:h-[45px]" key={tag.id}>
                            <div className="text-white text-[10px] flex-1">{tag.desc}</div>
                            <div className="flex-[1] h-full">
                                <Image src={tag.image} alt="" width={50} height={50} className="z-10 sm:h-full sm:w-full"/>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* CARDS */}
            <HomePageProductList HomeProductsLis={HomeProductsList} />
            {/* BOTTOM TAG DIV */}
            <div className=" flex flex-row justify-between px-2 items-center w-[350px] h-[30px] sm:w-[545px]" style={{marginBottom: "15px"}}>
                {
                    VenorsTags.map((tag)=> (
                        <div className="bg-[#0A8585] text-white flex flex-row gap-2 h-[30px] w-[105px] z-0 sm:w-[160px] sm:h-[45px]" key={tag.id}>
                            <div className="text-white text-[10px] flex-1">{tag.desc}</div>
                            <div className="flex-[1] h-full">
                                <Image src={tag.image} alt="" width={50} height={50} className="z-10 sm:h-full sm:w-full"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Vendor