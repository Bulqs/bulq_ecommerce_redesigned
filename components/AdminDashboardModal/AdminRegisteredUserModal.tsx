import React from 'react';
import { User } from '@/types';
import { IoMdCloseCircle } from 'react-icons/io';

interface UserDetailModalProps {
    user: User | null;
    onClose: () => void;
}

const AdminRegisteredUserModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <>
            <div className="!m-auto max-h-[550px] flex flex-col py-8 px-12 w-10/12 fixed inset-0 bg-appTitleBgColor/95 items-center justify-center z-50 top-0 overflow-y-auto rounded-lg border-2 border-appBanner  shadow-lg shadow-appBanner ">

                <div className="flex items-center justify-between w-full border-b-2 border-b-appWhite ">
                    <h2 className="text-lg font-semibold text-white font-sans px-2 py-1 bg-appNav rounded-sm"> Registered User Info</h2>
                </div>

                <table className="min-w-full border-collapse border border-gray-300 formtable mt-8">
                    <thead className="bg-appTitleBgColor text-white font-normal font-sans">
                        <tr className="font-normal font-sans">
                            <th className="border  border-gray-300 px-2 py-2">NIN</th>
                            <th className="border  border-gray-300 px-2 py-2"> BVN </th>
                            <th className="border px-2 py-2">Phone Number</th>
                            <th className="border px-2 py-2">KYC Completed</th>
                            <th className="border  border-gray-300 px-2 py-2">Address</th>
                            <th className="border  border-gray-300 px-2 py-2">Password</th>
                            <th className="border  border-gray-300 px-2 py-2">State</th>
                            <th className="border  border-gray-300 px-2 py-2">Country</th>
                            <th className="border px-2 py-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center bg-white font-normal font-sans">
                            <td className="border border-gray-300 px-2 py-2">{user.nin}</td>
                            <td className="border border-gray-300 px-2 py-2">{user.bvn}</td>
                            <td className="border px-2 py-2">{user.phoneNumber}</td>
                            <td className="border px-2 py-2">{user.isKycCompleted ? "Yes" : "No"}</td>
                            <td className="border border-gray-300 px-2 py-2"> {user.address}</td>
                            <td className="border border-gray-300 px-2 py-2">{user.password}</td>
                            <td className="border border-gray-300 px-2 py-2">{user.state}</td>
                            <td className="border border-gray-300 px-2 py-2">{user.country}</td>
                            <td className="border px-2 py-2">{new Date(user.created_at).toLocaleDateString()}</td>

                            </tr>
                    </tbody>
                </table>
                <button
                    onClick={onClose}
                    className="mt-auto text-white gap-4 bg-appNav hover:bg-appBanner px-6 py-2 rounded-md flex items-center justify-center"
                >
                    <IoMdCloseCircle className='w-6 h-6 text-red-700' />  Close View Order
                </button>
            </div>
        </>
    );
}

export default AdminRegisteredUserModal;
