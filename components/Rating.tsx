"use client"

import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

type Size = {
    size:number
    rating: number
}
const Rating = ({size, rating}:Size) => {
    return (
        <div className="">
        <div className="flex flex-row">
            {[1,2,3,4,5].map((star)=> (
                <FaStar
                key={star}
                width={size}
                height={size}
                className={`text-xl cursor-pointer ${rating && star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            ))}
        </div>
        </div>
    );
};

export default Rating;