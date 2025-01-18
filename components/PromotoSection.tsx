import React from 'react'
import promoBackground from '../public/images/image1.jpeg'
import Image from 'next/image'

export const PromotoSection: React.FC = () => {
    return (
        <>
        <div className="bg-appRed xl:py-0 xl:px-0 sm:py-24 overflow-hidden max-h-96 small-block">
            <div className='bg-appTitleBgColor min-w-full h-screen flex flex-grow mt-0 justify-center' style={{ position: 'relative' }}>
                <Image
                    alt="Mountains"
                    src={promoBackground}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: 'cover',
                        opacity: 0.1// cover, contain, none
                    }}
                />

                <div className="mx-auto min-w-full sm:px-6 lg:px-8 absolute">
                    <div className=" relative isolate overflow-hidden  bg-opacity-100 px-6 py-12  sm:rounded-3xl sm:px-24">
                        <h2 className="tracking-widest mx-auto max-w-2xl text-center text-3xl font-bold  text-white sm:text-4xl">
                            Promo! Promo!! Promo!!!.
                        </h2>
                        <h1 className="mx-auto mt-2 max-w-7xl text-center leading-relaxed text-gray-300 xl:mt-6">
                            NOVEMBER TO DECEMBER SALES <br /> <span> 50%</span><br />OFF SALES !!!
                        </h1>
                    </div>
                </div>
            </div>
        </div >
</>
    );
}
