import React from 'react';

interface ConfirmationModalProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const VendorDeleteConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-appTitleBgColor bg-opacity-75">
            <div className=" rounded-lg p-6 w-90 shadow-inner bg-appBanner shadow-appBanner ">
                <p className="text-white text-lg">{message}</p>
                <div className="flex items-center justify-between space-x-4 mt-4">
                    <button onClick={onCancel} className="px-4 py-2 bg-black text-white rounded hover:bg-appTitleBgColor">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VendorDeleteConfirmationModal;
