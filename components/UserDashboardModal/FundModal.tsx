import React, { useState } from "react";

interface FundModalProps {
    walletId: string;
    balance: number;
    onClose: () => void;
    onSaveTransaction: (
        walletId: string,
        transaction: { date: string; time: string; type: "Fund"; amount: number; status: "Successful" }
    ) => void;
    updateWalletBalance: (walletId: string, amount: number, type: "Fund") => void;
}

const FundModal: React.FC<FundModalProps> = ({ walletId, balance, onClose, onSaveTransaction, updateWalletBalance }) => {
    const [amount, setAmount] = useState<number>(0);

    const handleConfirm = () => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();

        updateWalletBalance(walletId, amount, "Fund");
        onSaveTransaction(walletId, {
            date: formattedDate,
            time: formattedTime,
            type: "Fund",
            amount,
            status: "Successful",
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <form onSubmit={handleConfirm} className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold text-black">Fund Wallet</h3>
                <p className="text-gray-500">Current Balance: ${balance.toFixed(2)}</p>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Enter amount"
                />
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Confirm
                    </button>

                    
                    {/* <button type="submit" onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Confirm
                    </button> */}
                </div>
            </form>
        </div>
    );
};

export default FundModal;
