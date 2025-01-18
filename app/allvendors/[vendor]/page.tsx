import { HomePageProductList } from "@/components/HomePageProductList";
import { SingleVendorBanner, HomeProductsList, VenorsTags } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Vendor = () => {
    return (
        <div className="w-full h-[100vh - 6.5rem] flex flex-col justify-center items-center gap-2 py-1 sm:gap-4">
            {/* BANNER DIV */}
            <div className="bg-[#0A8585] w-[395px] h-[162px] flex flex-row justify-center items-center sm:w-[600px] sm:h-[236px]">
                {/* BANNER DESC DIV */}
                <div className=" flex-1 sm:block flex justify-center items-start flex-col sm:w-[300px] sm:items-end" style={{marginLeft: "20px"}}>
                    <h1 className="text-white text-[30px] font-inter font-light">
                        {SingleVendorBanner.desc}
                    </h1>
                    <h3 className="text-white text-[16px] font-inter font-light sm:text-[18px]">{SingleVendorBanner.big}</h3>
                    <h6 className="text-white text-[13px] font-inter font-light">{SingleVendorBanner.small}</h6>
                </div>
                {/* BANNER IMAGE DIV */}
                <div className="flex-1 flex flex-row justify-end items-center h-full sm:justify-end sm:flex-[1] opacity-75 " >
                    <Image src={SingleVendorBanner.image} alt="" height={800} width={700} className="sm:h-[1000px] sm:w-[290px] object-contain"/>
                </div>
            </div>
            {/* CARDS */}
            <HomePageProductList HomeProductsLists={HomeProductsList} />

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
            <HomePageProductList HomeProductsLists={HomeProductsList} />
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