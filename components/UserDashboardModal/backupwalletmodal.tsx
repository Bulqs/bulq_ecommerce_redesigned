
"use client";
import React, { useState } from 'react';

interface UserWalletData {
    accountName: string;
    bankName: string;
    cardNumber: number;
    accountNumber: number;
    expirationDate: string;
}

interface ModalProps {
    onSave: (data: UserWalletData) => void;
    onClose: () => void;
    initialData?: UserWalletData;
}

const UserWalletModal: React.FC<ModalProps> = ({ onSave, onClose, initialData }) => {
    const [formData, setFormData] = useState<UserWalletData>(initialData || {
        accountName: '',
        bankName: '',
        cardNumber: '',
        accountNumber: '',
        expirationDate: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="!m-auto h-[500px] max-h-[600px] flex flex-col py-4 px-12 w-6/12 !mt-36 fixed inset-0 bg-appTitleBgColor/95 items-center justify-center z-50 top-0 overflow-y-auto rounded-lg border-2 border-appBanner  shadow-lg shadow-appBanner ">

            <div className="flex items-center justify-between w-full border-b-2 border-b-appWhite mt-4">
                <h2 className="text-lg font-semibold text-white font-sans px-2 py-1 bg-appNav rounded-sm"> Add New Bank Info</h2>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">


                <div className="w-full flex items-center justify-between">
                    <input type="text" name="accountname" placeholder="Account Name" value={formData.accountName} onChange={handleChange} className=" w-5/12 p-2 border rounded-md" />
                    <input type="text" name="bankname" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <input type="number" name="accountnumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                    <input type="number" name="cardnumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <input type="number" name="phoneNumber" placeholder="Expire Date" value={formData.expirationDate} onChange={handleChange} className="w-5/12 p-2 border rounded-md" />
                </div>

                <div className="w-full flex items-center justify-between">
                    <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-5/12">Save</button>
                    <button onClick={onClose} className="bg-black font-semibold text-red-500 p-2 rounded-md w-5/12">Cancel</button>
                </div>

            </form>
        </div>
    );
};

export default UserWalletModal;
