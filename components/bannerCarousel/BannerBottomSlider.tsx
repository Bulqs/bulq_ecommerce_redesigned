import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductSliderProps {
    images: string[];
}

const BannerBottomSlider: React.FC<ProductSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerSlide = 8; // Number of product cards per slide
    const totalSlides = Math.ceil(images.length / productsPerSlide);

    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3000ms = 3 seconds

        return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
    }, [totalSlides]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-full mx-auto px-6 bg-appNav ">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Render each slide with 8 product cards */}
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="min-w-full grid grid-cols-8 gap-4"
                        >
                            {images
                                .slice(
                                    slideIndex * productsPerSlide,
                                    (slideIndex + 1) * productsPerSlide
                                )
                                .map((image, index) => (
                                    <div key={index} className="w-full p-2">
                                        <Image
                                            width={400}
                                            height={400}
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="h-40 w-40 object-fit border-[1.2px] border-appBanner/90 rounded-xl bg-appNav"
                                        />
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Prev & Next Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                ›
            </button>

            {/* Dots */}
            {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex
                            ? 'bg-gray-800'
                            : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default BannerBottomSlider;
