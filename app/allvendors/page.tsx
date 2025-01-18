import Rating from "@/components/Rating";
import { Reviews, VendorDescHolder, VendorsBanner, VenorsTags } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const AllVendors = () => {
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
            {/*  TOP TAG DIV */}
            <div className="flex flex-row justify-between px-2 items-center w-[350px] h-[30px] sm:w-[505px] sm:h-[40px]">
                <div className="flex-1"><Image src='/images/allvendors/shippingtag.png' alt="" width={350} height={350} className="object-contain"/></div>
                <div className="flex-1"><Image src='/images/allvendors/freetrialtag.png' alt="" width={350} height={350} className="object-contain"/></div>
                <div className="flex-1"><Image src='/images/allvendors/discounttag.png' alt="" width={350} height={350} className="object-contain"/></div>
                <div className="flex-1"><Image src='/images/allvendors/liketag.png' alt="" width={350} height={350} className="object-contain"/></div>
            </div>
            {/* VENDORS CARD DIV */}
            <div className="bg-white w-[395px] h-full flex flex-col justify-start items-start p-3 sm:w-[550px] sm:h-full ">
            <div className="">
                <h5 className="relative text-black text-[20px] font-light font-inter">{`Home > All Vendors`} <span className="items-center absolute top-[-2px] text-[15px] font-extralight">⌄</span></h5>
            </div>
            <div className="w-full h-full  rounded-md flex flex-wrap justify-center items-center p-8 gap-[6px]">
            { VendorDescHolder && (
                VendorDescHolder.map((vendor)=> (
                    <div key={vendor.id} className="relative rounded-xl w-[150px] shadow-md sm:w-[200px]">
                        <Image src={vendor.image} alt="" width={155} height={150} className="object-contain sm:w-[200px]"/>
                        <Link href={vendor.link}>
                        <div className="flex justify-center items-center">
                        <button className="absolute top-[170px] w-[100px] h-[35px] bg-[#4d7b7b] items-center rounded-xl text-white font-inter font-light sm:top-[240px]">Shop Now</button>
                        </div>
                        </Link>
                    </div>
                
                ))
            )
            }
            </div>
            </div>
            
            {/* BOTTOM TAG DIV */}
            <div className=" flex flex-row justify-between px-2 items-center w-[350px] h-[30px] sm:w-[545px]">
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
            {/* REVIEWS DIV */}
            <div className=" bg-[#639595] h-full flex flex-col justify-center p-2 items-center w-[350px] sm:w-[600px] sm:px-2">
                <div className="">
                    <h3 className="text-white text-[14px] font-inter font-bold">
                    REVIEWS
                    </h3>
                </div>
                <div className="flex flex-wrap gap-4 p-2 sm:gap-8 sm:px-8">
                {
                    Reviews.map((review)=> (
                        <div className="bg-white w-[150px] h-[200px] flex flex-col justify-around items-center gap-2 opacity-80" key={review.id}>
                    <div className="">
                        <Image src={review.image} alt='' width={40} height={40} className=" object-contain" style={{borderRadius: '100%'}}/>
                    </div>
                    <div className="w-full flex justify-center items-center" >
                        <h6 className="text-[14px] font-inter text-black text-center font-light">{review.comment}</h6>
                    </div>
                    <div className="">
                        <Rating rating={review.rating} size={14}/>
                    </div>
                </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default AllVendors