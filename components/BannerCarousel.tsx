"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import RightBanner from "./bannerCarousel/RightBanner";
import BannerBottomSlider from "./bannerCarousel/BannerBottomSlider";
import BannerMainDisplay from "./bannerCarousel/BannerMainDisplay";



const BannerCarousel = () => {

    const MainBannerImages = [
        '/images/newcar.jpg',
        '/images/newcar2.jpg',
        '/images/newcar3.jpg',
        '/images/newcar4.jpg',
        '/images/newcar5.jpg',
        '/images/newcar6.jpg',
        '/images/newcar7.jpg',
        // Add up to 20 or more images
    ];

    const images = [
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        '/images/footpair.png',
        '/images/fabric.png',
        // Add up to 20 or more images
    ];

    return (
        <>
            <div className="w-full h-[460px] flex flex-row bg-appTitleBgColor mt-[120px]">
                <BannerMainDisplay MainBannerImages={MainBannerImages} />
                <RightBanner />
            </div>
            <div className="w-full border-b-2 border-appTitleBgColor ">
                <BannerBottomSlider images={images} />
            </div>
        </>
    );
}

export default BannerCarousel;
