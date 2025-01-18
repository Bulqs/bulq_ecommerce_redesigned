import { OrderDetail } from '@/types';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

type UserOrderModelProps = {
    orders: OrderDetail[];
    onClose: () => void;
};

const UserOrderModel: React.FC<UserOrderModelProps> = ({ orders, onClose }) => {
    return (
        <div className="!m-auto max-h-[550px] flex flex-col py-8 px-12 w-8/12 fixed inset-0 bg-appTitleBgColor/95 items-center justify-center z-50 top-0 overflow-y-auto rounded-lg border-2 border-appBanner  shadow-lg shadow-appBanner ">

            <div className="flex items-center justify-between w-full border-b-2 border-b-appWhite mt-20">
                <h2 className="text-lg font-semibold text-white font-sans px-2 py-1 bg-appNav rounded-sm"> User Orders View More </h2>
            </div>

            <table className="min-w-full border-collapse border border-gray-300 formtable mt-8">
                <thead className="bg-appTitleBgColor text-white font-normal font-sans">
                    <tr className="font-normal font-sans">
                        <th className="border  border-gray-300 px-2 py-2">id</th>
                        <th className="border  border-gray-300 px-2 py-2">Pooduct Image</th>
                        <th className="border  border-gray-300 px-2 py-2">Pooduct Name</th>
                        <th className="border  border-gray-300 px-2 py-2">Size</th>
                        <th className="border  border-gray-300 px-2 py-2"> Colour </th>
                        <th className="border  border-gray-300 px-2 py-2">Frequency</th>
                        <th className="border  border-gray-300 px-2 py-2">Total</th>
                        {/* <th className="border  border-gray-300 px-2 py-2">Delivery Status</th> */}
                        <th className="border  border-gray-300 px-2 py-2">Discount</th>
                        <th className="border  border-gray-300 px-2 py-2">Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="text-center bg-white font-normal font-sans">
                            <td className="border border-gray-300 px-2 py-2">{order.id}</td>
                            <td className="border px-2 py-2">
                                <img
                                    src={order.image}
                                    alt={order.name}
                                    className="w-full h-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="border border-gray-300 px-2 py-2">{order.name}</td>
                            <td className="border border-gray-300 px-2 py-2">{order.size}</td>
                            <td className="border border-gray-300 px-2 py-2">{order.color}</td>
                            <td className="border border-gray-300 px-2 py-2">{order.frequency}</td>
                            <td className="border border-gray-300 px-2 py-2">{order.total}</td>
                            {/* <td className="border border-gray-300 px-2 py-2">{order.deliveryStatus}</td> */}
                            <td className="border border-gray-300 px-2 py-2">{order.discount}</td>
                            <td className="border border-gray-300 px-2 py-2">{order.payment_method}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
              <button
                    onClick={onClose}
                    className="text-white gap-4 bg-appNav hover:bg-appBanner px-6 py-2 rounded-md flex items-center justify-center mt-6"
                >
                    <IoMdCloseCircle className='w-6 h-6 text-red-700' />  Close View Order
                </button>
        </div>      
    );
};


export default UserOrderModel;
