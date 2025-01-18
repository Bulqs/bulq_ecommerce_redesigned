import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


interface BannerMainDisplayProps {
    MainBannerImages: string[]; // Array of image URLs
}

const BannerMainDisplay: React.FC<BannerMainDisplayProps> = ({ MainBannerImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? MainBannerImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === MainBannerImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative  h-[434px] w-full max-w-5xl mx-auto bg-yellow-700 items-center mt-2 overflow-hidden rounded-lg">
            {/* Image Display */}
            <div className="w-full h-[434px]  rounded-lg overflow-hidden">
                <Image
                    src={MainBannerImages[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full  h-[434px] object-cover"
                />
            </div>

            {/* Previous Button */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-gray-900 transition"
                onClick={handlePrevious}
            >
                <FaArrowAltCircleLeft />

            </button>

            {/* Next Button */}
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-gray-900 transition"
                onClick={handleNext}
            >
                <FaArrowAltCircleRight />

            </button>
        </div>
    );
};

export default BannerMainDisplay;
