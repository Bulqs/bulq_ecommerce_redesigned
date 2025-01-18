"use client"
import React from 'react';
import { ChangeEvent, useState } from 'react';
import Image from "next/image";

const Imageuploads: React.FC = () => {

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    setImagePreview(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className='grid p-4'>
            <input id="imageUpload" name="imageUpload" type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && <Image className="mt-4" src={imagePreview} alt="Preview" width={200} height={200} />}
        </div>
    );
}

export default Imageuploads
