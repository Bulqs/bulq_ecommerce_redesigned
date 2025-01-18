import React, { useState } from "react";

interface UserWalletData {
  accountName: string;
  bankName: string;
  cardNumber: number | string ;
  accountNumber: number | string ; 
  expirationDate: string;
}

interface ModalProps {
  onClose: () => void;
  onSave: (data: Omit<UserWalletData, "id">) => void;
}

const UserAddWalletModal: React.FC<ModalProps> = ({ onClose, onSave }) => {

  const [formData, setFormData] = useState<UserWalletData>({
    accountName: "",
    bankName: "",
    cardNumber: "",
    accountNumber: "",
    expirationDate: "",
  });

    const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    const formattedValue = value
      .slice(0, 4)
      .replace(/^(\d{2})(\d{0,2})/, (_, mm, yy) => `${mm}/${yy}`); // Format as MM/YY
    setFormData((prev) => ({ ...prev, expirationDate: formattedValue }));
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      accountName: "",
      bankName: "",
      cardNumber: "",
      accountNumber: "",
      expirationDate: "",
    });
  };


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-bold text-black">Add New Wallet</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="accountName"
            placeholder="Account Name"
            className="border p-2 w-full mt-2"
            value={formData.accountName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            className="border p-2 w-full mt-2"
            value={formData.bankName}
            onChange={handleChange}
          />
          <input
            type="number"
            name="accountNumber"
            placeholder="Account Number"
            className="border p-2 w-full mt-2"
            value={formData.accountNumber}
            onChange={handleChange}
          />
          <input
            type="number"
            name="cardNumber"
            placeholder="Card Number"
            className="border p-2 w-full mt-2"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            className="border p-2 w-full mt-2"
            value={formData.expirationDate}
            onChange={handleExpirationDateChange}
          />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddWalletModal;
