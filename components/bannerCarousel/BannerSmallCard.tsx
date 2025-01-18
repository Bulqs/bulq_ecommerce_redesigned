import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import Buttons from '../Button';

interface BannerSmallCardProps {
    imageSrc: any; // Path to the background image
    buttonLabel: string; // Text for the button
    buttonClickHandler?: () => void; // Optional click handler for the button
}

const BannerSmallCard: React.FC<BannerSmallCardProps> = ({ imageSrc, buttonLabel, buttonClickHandler }) => {
    return (
        <div className='w-[48%] h-48 relative rounded-md overflow-hidden'>
            {/* Background Image */}
            <Image
                src={imageSrc} // Image is passed as a prop
                alt='Banner Image'
                layout='fill' // Ensures the image covers the entire div
                objectFit='cover' // Makes sure the image scales properly to cover the div
            />

            {/* Button Positioned at the Bottom */}
            <div className='absolute bottom-3 w-full items-center justify-center flex'>
                <Buttons small label={buttonLabel} onClick={buttonClickHandler} />
            </div>
        </div>
    );
};

export default BannerSmallCard;
