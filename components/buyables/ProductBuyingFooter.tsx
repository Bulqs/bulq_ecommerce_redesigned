import Image from 'next/image';
import React from 'react'


export const ProductBuyingFooter: React.FC = () => {
    
interface IOtherBuyAble {
    id: number,
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
}

const images: IOtherBuyAble[] = [
    {
        id: 1,
        imageSrc: '/images/students.png', // Replace with your image URL
        imageAlt: 'Image1',
        title: 'SHOP OUR',
        subtitle: 'BACK TO SCHOOL',
    },
     {
        id: 2,
        imageSrc: '/images/MacDonald.png', // Replace with your image URL
        imageAlt: 'Image1',
        title: 'VIEW OUR',
        subtitle: 'OUR TOP 50 VENDORS',
    },
     {
        id: 3,
        imageSrc: '/images/lips.png', // Replace with your image URL
        imageAlt: 'Image1',
        title: 'LATEST',
        subtitle: 'BRAND/PRODUCT/DEALS',
    },
    

];
    return (
        <div className='flex w-full grid-cols-3 gap-16 justify-evenly items-center flex-grow py-8 '>
            {images.map((each, id) => (
                <div  key={id} className=' bg-appTitleBgColor flex'>
                    <div className='block items-center justify-center p-4'>
                        <p className='text-appWhite'><b>{ each.title}</b></p>
                        <h4 className='text-appWhite'> {each.subtitle} </h4>
                    </div>
                    <div>
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
