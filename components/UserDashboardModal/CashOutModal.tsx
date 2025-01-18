
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TransactionData {
    id: string;
    date: string;
    time: string;
    type: "Cash Out";
    amount: number;
    status: "Successful" | "Failed";
}

// Example of a CashOutModal implementation
const CashOutModal: React.FC<{
    walletId: string;
    balance: number;
    onClose: () => void;
    onSaveTransaction: (walletId: string, transaction: TransactionData) => void;
    updateWalletBalance: (walletId: string, amount: number, type: "Cash Out") => void;
}> = ({ walletId, balance, onClose, onSaveTransaction, updateWalletBalance }) => {
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (amount > balance) {
            alert("Insufficient funds");
            return;
        }

        const transaction: TransactionData = {
            id: uuidv4(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            type: "Cash Out",
            amount,
            status: "Successful",
        };

        updateWalletBalance(walletId, amount, "Cash Out");
        onSaveTransaction(walletId, transaction);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold text-black">Cash Out</h3>
                <p className="text-gray-500">Balance: ${balance.toFixed(2)}</p>
                <input
                    type="number"
                    placeholder="Enter Amount"
                    className="border p-2 w-full mt-2"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
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
                </div>
            </form>
        </div>
    );
};
export default CashOutModal;


