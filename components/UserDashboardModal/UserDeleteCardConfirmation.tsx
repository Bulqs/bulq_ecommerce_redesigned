import React from "react";

interface ConfirmationModalProps {
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const UserDeleteCardConfirmation: React.FC<ConfirmationModalProps> = ({ onClose, onConfirm, message }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold text-black">Confirmation</h3>
                <p className="my-4 text-gray-700">{message}</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-black rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDeleteCardConfirmation;
