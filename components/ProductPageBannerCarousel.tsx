"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";

// export interface ImageListProps {
//     Banner: Iimage[];
// }

const ProductBannerCarousel = () => {

    //Array of Images
    const images = [

        {
            id: 1,
            imageSrc: '/images/img_3.jpeg', // Replace with your image URL
            imageAlt: 'Image1',
            title: 'Men are fashionable ',
            subtitle: 'Always looking fresh',
            littleText: 'Be a gentleman'
        },
        {
            id: 2,
            imageSrc: '/images/img_7.jpeg',
            imageAlt: 'Image2',
            title: 'Women loves Fasion',
            subtitle: 'My type of lady',
            littleText: 'You are beautiful'
        },
        {
            id: 3,
            imageSrc: '/images/img_8.jpeg',
            imageAlt: 'Image3',
            title: 'Make KIDS beautiful',
            subtitle: 'My kids my future',
            littleText: 'Be a smart parent'
        }
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        scale: 1,
        duration: 5000,
        transitionDuration: 300,
        infinite: true,
        prevArrow: (
            <div className="prevArrow-div">
                <ArrowLeftIcon className="prevArrow-div-icon" />
            </div>
        ),
        nextArrow: (
            <div className="nextArrow-div">
                <ArrowRightIcon className="nextArrow-div-icon" />
            </div>
        ),
    };

    return (
        <>

            <div className="w-full h-full bg-appLightBlack">
                <Zoom {...zoomInProperties}>
                    {images.map((each, id) => (
                        <div key={id} className="flex md:items-center w-full md:max-h-[80vh] md:h-[80vh] max-h-[30vh] h-[30vh] lg:mt-0 bg-appYellow ">
                            <div className=" flex w-full h-full bg-appTitleBgColor">

                                <div className="aspect-square w-1/2 p-0 bg-appTitleBgColor flex-wrap items-start">
                                    <h1 className="bannerFont2 md:top-60">
                                        {each.title}
                                    </h1>
                                    <p className="subtilte md:top-80">
                                        {each.subtitle}
                                    </p>

                                    <p className="titleText md:top-80 ">
                                        {each.littleText}
                                    </p>
                                </div>

                                <div className="aspect-square w-1/2 bg-white p-0">
                                    <Image
                                        alt="banner-images"
                                        className={"w-full h-full"}
                                        src={each.imageSrc}
                                        width={1000}
                                        height={1000}
                                    />
                                </div>

                            </div>

                        </div>
                    ))}
                </Zoom>
            </div>
        </>

    );
};

export default ProductBannerCarousel;
