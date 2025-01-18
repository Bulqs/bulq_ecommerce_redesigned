
import React from 'react'
import Image from 'next/image'
import { images } from '@/data/data'
import { Iimage } from '@/types'
import Link from 'next/link';

interface ImageListProps {
    images: Iimage[];
}

export const OfficialVendors: React.FC<ImageListProps> = ({ images }) => {
    return (
        <div className='w-full h-auto bg-appWhite py-2'>
            <div className='h1-header-div'>
                <h2> Official Vendors </h2>
            </div>

            <div className="officialvendor-allimg-container">
                {images.map((image) => (
                    <Link key={image.id} href={image.imageSrc} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-40 ">
                            <Image
                                src={image.imageSrc}
                                alt={image.imageAlt}
                                width={image.width}
                                height={image.height}
                                className="h-full w-full  object-center group-hover:opacity-75"
                            />

                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}
