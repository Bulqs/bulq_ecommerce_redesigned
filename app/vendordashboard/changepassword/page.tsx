import VendorLayout from '@/components/vendordashboardcomponents/VendorLayout';
import React from 'react';

const VendorChangePassword = () => {
    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Vendor Password Page </h2>

                </div>


                <div className="w-full bg-appNav/60 mt-8 p-4 h-[62vh] rounded-md">

                    <div className="flex flex-row items-center justify-between">

                        <div className='w-3/12'>
                            <label className="block text-sm text-white font-semibold">Old Password</label>
                            <input
                                type="password"
                                //   value={}
                                readOnly
                                placeholder='Input Old Password'
                                className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                            />
                        </div>

                        <div className='w-3/12'>
                            <label className="block text-sm text-white font-semibold">New Password</label>
                            <input
                                type="password"
                                //   value={}
                                readOnly
                                placeholder='Input New Password'
                                className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                            />
                        </div>

                        <div className='w-3/12'>
                            <label className="block text-sm text-white font-semibold">Confirm New Password</label>
                            <input
                                type="password"
                                //   value={}
                                placeholder='Confirm New Password'
                                readOnly
                                className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 text-gray-800 py-2 px-3"
                            />
                        </div>
                    </div>

                    <div className='flex w-full mt-8'>
                        <button
                            // onClick={}
                            className="bg-appTitleBgColor hover:bg-blue-900 transition-colors text-white py-2 px-4 rounded-md font-semibold shadow-md shadow-appTitleBgColor hover:shadow-blue-950"
                        >
                            Update Password
                        </button>
                    </div>

                </div>

            </div>
        </VendorLayout>
    );
}

export default VendorChangePassword;
