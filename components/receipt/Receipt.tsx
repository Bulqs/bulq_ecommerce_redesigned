import React from 'react';
import Image from "next/image";
import { FaTruck, FaMoneyBillWave } from 'react-icons/fa';
import { PiKeyReturnFill } from "react-icons/pi";
import Link from 'next/link';


interface ReceiptItem {
    name: string;
    quantity: number;
    price: number;
    color: any;
}

interface ReceiptProps {
    companyName: string;
    logoUrl: string;
    date: string;
    receiptNumber: string;
    paymentStatus: string;
    items: ReceiptItem[];
    deliveryAddress: string;
    shippingFee: number;
    subtotal: number;
    paymentMethod: string;
    customerName: string;
}

const Receipt: React.FC<ReceiptProps> = ({
    companyName,
    logoUrl,
    date,
    receiptNumber,
    paymentStatus,
    items,
    deliveryAddress,
    shippingFee,
    subtotal,
    paymentMethod,
    customerName,
}) => {
    const total = subtotal + shippingFee;

    return (
        <div className="max-w-3xl mx-auto p-8 bg-appTitleBgColor shadow-white shadow-lg rounded-lg mt-36 bg-gradient-to-br from-appTitleBgColor/50 to-appTitleBgColor/100">
            {/* Header with company logo and info */}
            <div className="flex justify-between items-center border-b pb-4">
                <Image src={logoUrl} alt={`${companyName} Logo`} width={250} height={100} className="object-contain" />
                <div className="text-right">
                    <h1 className="text-2xl font-extrabold text-white">{companyName}</h1>
                    <p className="text-white text-sm">{date}</p>
                    <p className="text-white text-sm">Receipt #: {receiptNumber}</p>
                    <p className={`font-semibold text-sm mt-1 ${paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                        Status: {paymentStatus}
                    </p>
                </div>
            </div>

            {/* Customer Thank You Message */}
            <div className="mt-4">
                <p className="text-lg text-white">Hello, {customerName}</p>
                <p className="mt-4 text-white">
                    Thank you for shopping with us at <span className="font-bold text-black">BULQ</span>. Your order{' '}
                    <span className="font-bold">{items[0].name}</span> and one other item has been placed. We will send a
                    confirmation when your item ships. We hope to see you again soon...{' '}
                    <span className="font-bold text-black">BULQ.COM</span>
                </p>
            </div>

            {/* Items List */}
            <div className="mt-4">
                <h2 className="font-semibold text-lg border-b pb-2 text-white">Items Ordered</h2>
                <ul className="mt-4 space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                            <div>
                                <p className="font-semibold text-gray-800">{item.name} (x{item.quantity})</p>
                                <p className="text-sm text-gray-600">Color: {item.color}</p>
                            </div>
                            <span className="text-lg text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Payment Details */}
            <div className="mt-4">
                <h2 className="font-semibold text-lg border-b pb-2 text-white">Payment Details</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-white">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-white">Shipping Fee</span>
                    <span className="text-white">${shippingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-white">${total.toFixed(2)}</span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                    <FaMoneyBillWave className="text-white" />
                    <p className="text-white">Payment Method: {paymentMethod}</p>
                </div>
            </div>

            {/* Delivery Address */}
            <div className="mt-4">
                <h2 className="font-semibold text-lg border-b pb-2">Delivery Address</h2>
                <div className="flex w-full items-center justify-between">
                    <div className="mt-4 flex items-center space-x-2">
                        <FaTruck className="text-white" />
                        <p className="text-white">{deliveryAddress}</p>
                    </div>
                    <div className="mt-4 flex items-center space-x-2">
                        <PiKeyReturnFill className="text-white" />
                        <Link href="/">
                            <p className="text-white">Continue Shipping</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Receipt;
