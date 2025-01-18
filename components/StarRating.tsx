"use client"

import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

type Size = {
    size:number
}
const StarRating = ({size}:Size) => {
    const [rating, setRating] = useState<number | null>(null);

    const handleRatingClickStar = (newRating: number) => {
        setRating(newRating);
    }
    return (
        <div className="">
        <div className="flex flex-row">
            {[1,2,3,4,5].map((star)=> (
                <FaStar
                key={star}
                width={size}
                height={size}
                onClick={()=>handleRatingClickStar(star)}
                className={`text-xl cursor-pointer ${rating && star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            ))}
        </div>
        {
            rating != null && (
                <p className="hidden md:block"> You rated this product {rating} star(s).</p>
            )
        }
        </div>
    );
};

export default StarRating;