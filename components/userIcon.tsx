import React from 'react'
import Image from 'next/image'
import { Iimage } from '@/types'
import Link from 'next/link';


interface SvgIconProps {
    // Define any props you want to pass to the SVG here
    // For example, you can add width, height, CSS classes, etc.
    width?: string;
    height?: string;
    className?: any;
    fill?: string;
}

export const userIcon: React.FC<SvgIconProps> = ({ width, height, className }) => {
    return (
        //    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" fill="#008088" width={22} height={18} viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#008088" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
    )
}
