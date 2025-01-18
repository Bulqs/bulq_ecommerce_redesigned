"use client";
import React, { useState } from 'react';

interface UserProfileData {
    image: string; // Store image URL
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
}

interface ModalProps {
    onSave: (data: UserProfileData) => void;
    onClose: () => void;
    initialData?: UserProfileData;
}

const UserProfileModal: React.FC<ModalProps> = ({ onSave, onClose, initialData }) => {
    const [formData, setFormData] = useState<UserProfileData>(initialData || {
        image: '',
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({ ...prevData, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="!m-auto h-[500px] max-h-[600px] flex flex-col py-4 px-12 w-6/12 !mt-36 fixed inset-0 bg-appTitleBgColor/95 items-center justify-center z-50 top-0 overflow-y-auto rounded-lg border-2 border-appBanner  shadow-lg shadow-appBanner ">

            <div className="flex items-center justify-between w-full border-b-2 border-b-appWhite mt-4">
                <h2 className="text-lg font-semibold text-white font-sans px-2 py-1 bg-appNav rounded-sm"> User Profile Modal</h2>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">

                <div className="w-full flex items-center justify-between">
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        className="w-5/12 p-2 border rounded-md"
                    />
                    {formData.image && (
                        <img src={formData.image} alt="Preview" className="w-32 h-32 rounded-full object-cover mb-4" />
                    )}

                </div>

                <div className="w-full flex items-center justify-between">
                    <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} className=" w-5/12 p-2 border rounded-md" />
                    <input type="text" name="middlename" placeholder="Middle Name" value={formData.middlename} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />

                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-5/12">Save</button>
                    <button onClick={onClose} className="bg-black font-semibold text-red-500 p-2 rounded-md w-5/12">Cancel</button>
                </div>




            </form>
        </div>
    );
};

export default UserProfileModal;
