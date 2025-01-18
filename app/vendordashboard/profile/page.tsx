"use client";
import React, { useState } from 'react';
import VendorLayout from "@/components/vendordashboardcomponents/VendorLayout";
import VendorProfileModal from '@/components/VendorDashboardModal/VendorProfileModal';

interface VendorProfileData {
    image: string; // Store image URL
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    password: any; // Consider whether you want to display this
    address: string;
    phoneNumber: string;
}

const VendorDashboardProfile: React.FC = () => {
    const [profileData, setProfileData] = useState<VendorProfileData | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSave = (data: VendorProfileData) => {
        setProfileData(data);
    };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Vendor Profile Page </h2>
                    <button
                        onClick={toggleModal}
                        className="bg-appNav transition-colors text-white py-2 px-4 rounded-md"
                    >
                        Edit Profile
                    </button>
                </div>

                <div className="w-full bg-appNav/60 mt-8 p-4 h-[62vh]">
                    {profileData ? (
                        <form className="space-y-6 text-white p-4  h-full">
                            {profileData.image && (
                                <img src={profileData.image} alt="Profile" className="w-24 h-24 rounded-full object-cover mb-4 mx-auto" />
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        value={profileData.firstname}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Middle Name</label>
                                    <input
                                        type="text"
                                        value={profileData.middlename}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        value={profileData.lastname}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        value={profileData.email}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Address</label>
                                    <input
                                        type="text"
                                        value={profileData.address}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Phone Number</label>
                                    <input
                                        type="text"
                                        value={profileData.phoneNumber}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Password</label>
                                    <input
                                        type="password"
                                        value={profileData.password}
                                        readOnly
                                        className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                                    />
                                </div>
                            </div>
                        </form>
                    ) : (
                        <p className="text-white">No profile data available.</p>
                    )}
                    {isModalOpen && (
                        <VendorProfileModal
                            onSave={handleSave}
                            onClose={toggleModal}
                            initialData={profileData}
                        />
                    )}
                </div>
               
            </div>
        </VendorLayout>
    );
};

export default VendorDashboardProfile;
