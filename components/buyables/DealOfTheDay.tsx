import { Iimage } from '@/types';
import Image from 'next/image'
import React from 'react'

// export interface ImageListProps {
//     BuyAbleProps: IOtherBuyAble[];
// }

export const DealOfTheDay: React.FC = () => {

    interface IOtherBuyAble {
        id: number,
        imageSrc: string;
        imageAlt: string;
        title: string;
    }

    const images: IOtherBuyAble[] = [
        {
            id: 1,
            imageSrc: '/images/dealoftheday.png', // Replace with your image URL
            imageAlt: 'Image1',
            title: 'Back to School Deals',
        },

    ];

    return (
        <div className='flex w-full h-[100px] max-h-[100px] md:h-[200px] md:max-h-[200px] mb-3 overflow-hidden  bg-appTitleBgColor'>
            {images.map((each, id) => (
                <div key={id} className='flex w-full flex-grow flex-row justify-between md:h-[200px] h-[100px] '>

                    <div className="block md:flex aspect-square w-1/2 p-0  ">
                        <div className="flex flex-col items-center justify-center mt-1 md:mt-0 w-full md:gap-y-2">
                                <h1 className="OtherBuyAbleFont ml-1 mt-2 mx-auto md:mt-0 md:mx-auto">
                                    {each.title}
                                </h1>
 
                                <button
                                    className="mt-3 focus:outline-none  
                                hover:bg-appNav md:text-lg  md:font-medium text-sm font-normal
                                leading-none text-white py-2 px-4 md:py-2 md:px-3 bg-appBanner
                                rounded-md md:w-44 md:mx-auto">
                                    Shop Now
                                </button>
                        </div>
                    </div>

                    <div className="flex flex-col aspect-square w-1/2 bg-appTitleBgColor p-0">
                        <Image
                            className='fill w-full h-[100px] md:h-full'
                            alt="banner-images"
                            src={each.imageSrc}
                            width={1500}
                            height={1500}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
