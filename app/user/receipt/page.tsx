
import Receipt from '@/components/receipt/Receipt';
import React from 'react';


const ReceiptPage: React.FC = () => {

    const receiptData = {
        companyName: 'BULQ',
        logoUrl: 'images/logo5.svg',
        date: '2024-10-16',
        receiptNumber: '123456',
        paymentStatus: 'Paid',
        items: [
            { name: 'Brown Bag', quantity: 1, color: 'Red', price: 30 },
            { name: 'Laptop', quantity: 1, color: 'Blue', price: 500 },
        ],
        deliveryAddress: '123 Elm St, New York, NY 10001',
        shippingFee: 10,
        subtotal: 530,
        paymentMethod: 'Credit Card',
        customerName: 'John Doe',
    };

    return (
        <div className='mt-4 pb-32 w-full flex  items-center justify-center bg-appTitleBgColor/90 pt-12'>
            <Receipt {...receiptData} />
        </div>
    );
};

export default ReceiptPage;
