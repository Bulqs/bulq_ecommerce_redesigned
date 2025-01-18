import React, { useState } from 'react';

interface ModalProps {
    onClose: () => void;
    onSubmit: (formData: { accountName: string, bankName: string, cardNumber: string, expirationDate: string }) => void;
}

const AddCardModal: React.FC<ModalProps> = ({ onClose, onSubmit }) => {
    const [accountName, setAccountName] = useState('');
    const [bankName, setBankName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { accountName, bankName, cardNumber, accountNumber, expirationDate };
        onSubmit(formData); // Pass data to the parent
        onClose(); // Close modal after submission
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold text-black">Add New Card</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Account Name"
                        className="border p-2 w-full mt-2"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Bank Name"
                        className="border p-2 w-full mt-2"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Account Number"
                        className="border p-2 w-full mt-2"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Card Number"
                        className="border p-2 w-full mt-2"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Expiration Date"
                        className="border p-2 w-full mt-2"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />
                    <div className="mt-4 flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded">
                            Add Card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCardModal;
