"use client";
import React, { useState } from "react";
import UserLayout from "@/components/userdashboardcomponents/UserLayout";
import CashOutModal from "@/components/UserDashboardModal/CashOutModal";
import FundModal from "@/components/UserDashboardModal/FundModal";
import UserAddWalletModal from "@/components/UserDashboardModal/UserAddWalletModal";
import UserDeleteCardConfirmation from "@/components/UserDashboardModal/UserDeleteCardConfirmation";
import { v4 as uuidv4 } from "uuid";

interface UserWalletData {
    walletId: string;
    accountName: string;
    bankName: string;
    cardNumber: number;
    accountNumber: number;
    expirationDate: string;
    balance: number;
}

interface TransactionData {
    id: string;
    walletId: string;
    date: string;
    time: string;
    type: "Fund" | "Cash Out";
    amount: number;
    status: "Successful" | "Failed";
}

interface ToggleableFieldProps {
    keyName: string;
    value: string | number;
    isVisible: boolean;
    onToggle: () => void;
}

const ToggleableField: React.FC<ToggleableFieldProps> = ({ keyName, value, isVisible, onToggle }) => {
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={onToggle}
                className="text-white px-2 py-1 bg-green-700 rounded-md"
                aria-label={`Toggle visibility for ${keyName}`}
            >
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <span className="px-2 py-1 bg-green-200 rounded">{value}</span>}
        </div>
    );
};




const UserDashboardWallet: React.FC = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [wallets, setWallets] = useState<UserWalletData[]>([]);
    const [transactions, setTransactions] = useState<TransactionData[]>([]);
    const [currentWalletId, setCurrentWalletId] = useState<string | null>(null);
    // const [toggleDetails, setToggleDetails] = useState<Record<string, boolean>>({
    //     cardNumber: false,
    //     balance: false,
    // });
    const [toggleDetails, setToggleDetails] = useState<Record<string, boolean>>({});

    const toggleVisibility = (key: string) => {
        setToggleDetails((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    
    const handleSaveWallet = (data: Omit<UserWalletData, "walletId" | "balance">) => {
        const newWallet = { ...data, walletId: uuidv4(), balance: 0 };
        setWallets((prev) => [...prev, newWallet]);
        closeModal();
    };

    const updateWalletBalance = (walletId: string, amount: number, type: "Fund" | "Cash Out") => {
        setWallets((prev) =>
            prev.map((wallet) =>
                wallet.walletId === walletId
                    ? { ...wallet, balance: type === "Cash Out" ? wallet.balance - amount : wallet.balance + amount }
                    : wallet
            )
        );
    };

    const handleSaveTransaction = (walletId: string, transaction: Omit<TransactionData, "id" | "walletId">) => {
        const newTransaction: TransactionData = {
            ...transaction,
            id: uuidv4(),
            walletId,
        };
        setTransactions((prev) => [...prev, newTransaction]);
    };

    const confirmDeleteWallet = (walletId: string) => {
        setCurrentWalletId(walletId);
        openModal("confirmDelete");
    };

    const handleDeleteWallet = () => {
        if (currentWalletId) {
            setWallets((prev) => prev.filter((wallet) => wallet.walletId !== currentWalletId));
        }
        closeModal();
    };

    const openModal = (modalName: string, walletId?: string) => {
        setActiveModal(modalName);
        if (walletId) setCurrentWalletId(walletId);
    };

    const closeModal = () => {
        setActiveModal(null);
        setCurrentWalletId(null);
    };

    return (
        <UserLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">Customer Wallets</h2>
                    <button
                        onClick={() => openModal("addWallet")}
                        className="bg-appNav transition-colors text-white py-2 px-4 rounded-md"
                    >
                        Add Wallet
                    </button>
                </div>

                <div className="w-full bg-appNav/60 mt-8 p-4 min-h-[62vh] h-[auto] flex flex-col items-start gap-4">
                    <div className="w-full h-auto flex flex-row items-start gap-4">
                        {wallets.map((wallet) => (
                            <div key={wallet.walletId} className="max-w-md rounded-lg border p-4 shadow-lg bg-white h-auto">
                                <div className="text-center">
                                    <h2 className="text-xl font-bold text-black">Wallet Id: {wallet.walletId.slice(0, 8)}</h2>
                                    <div className="flex flex-col w-full">
                                        {Object.entries(wallet).map(([key, value]) =>
                                            key !== "walletId" ? (
                                                <p key={key} className="text-gray-900 flex justify-between">
                                                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>
                                                    {["cardNumber", "balance"].includes(key) ? (
                                                        <ToggleableField
                                                            keyName={key}
                                                            value={value}
                                                            isVisible={toggleDetails[key] ?? false}
                                                            onToggle={() => toggleVisibility(key)}
                                                        />
                                                    ) : (
                                                        value
                                                    )}

                                                </p>
                                            ) : null
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <button
                                        onClick={() => confirmDeleteWallet(wallet.walletId)}
                                        className="px-4 py-2 bg-red-500 text-white rounded"
                                    >
                                        Delete Wallet
                                    </button>
                                    <button
                                        onClick={() => openModal("cashOut", wallet.walletId)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                    >
                                        Cash Out
                                    </button>
                                    <button
                                        onClick={() => openModal("fund", wallet.walletId)}
                                        className="px-4 py-2 bg-green-500 text-white rounded"
                                    >
                                        Fund
                                    </button>
                                </div>
                            </div>
                        ))}

                        {wallets.length === 0 && <p className="text-gray-400">No wallets added yet.</p>}
                    </div>
                    

                    <div className="transact-display bg-white w-full p-4">
                        <table className="table-auto w-full border">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">S/N</th>
                                    <th className="border px-4 py-2">Wallet Id</th>
                                    <th className="border px-4 py-2">Date</th>
                                    <th className="border px-4 py-2">Time</th>
                                    <th className="border px-4 py-2">Type</th>
                                    <th className="border px-4 py-2">Amount</th>
                                    <th className="border px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={transaction.id}>
                                        <td className="border px-4 py-2">{index + 1}</td>
                                        <td className="border px-4 py-2">{transaction.walletId.slice(0, 8)}</td>
                                        <td className="border px-4 py-2">{transaction.date}</td>
                                        <td className="border px-4 py-2">{transaction.time}</td>
                                        <td className="border px-4 py-2">{transaction.type}</td>
                                        <td className="border px-4 py-2">{transaction.amount}</td>
                                        <td className="border px-4 py-2">{transaction.status}</td>
                                    </tr>
                                ))}
                                {transactions.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="border px-4 py-2 text-center text-gray-500">
                                            No transactions yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {activeModal === "cashOut" && currentWalletId && (
                <CashOutModal
                    walletId={currentWalletId}
                    balance={wallets.find((wallet) => wallet.walletId === currentWalletId)?.balance ?? 0}
                    onClose={closeModal}
                    onSaveTransaction={handleSaveTransaction}
                    updateWalletBalance={updateWalletBalance}
                />
            )}
            {activeModal === "fund" && currentWalletId && (
                <FundModal
                    walletId={currentWalletId}
                    balance={wallets.find((wallet) => wallet.walletId === currentWalletId)?.balance ?? 0}
                    onClose={closeModal}
                    onSaveTransaction={handleSaveTransaction}
                    updateWalletBalance={updateWalletBalance}
                />
            )}
            {activeModal === "addWallet" && (
                <UserAddWalletModal onClose={closeModal} onSave={handleSaveWallet} />
            )}
            {activeModal === "confirmDelete" && (
                <UserDeleteCardConfirmation
                    onClose={closeModal}
                    onConfirm={handleDeleteWallet}
                    message="Are you sure you want to delete this wallet?"
                />
            )}
        </UserLayout>
    );
};

export default UserDashboardWallet;
