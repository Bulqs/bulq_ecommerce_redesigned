"use client"
import React, { useState } from 'react';
import AdminOrderModel from '../AdminDashboardModal/AdminOrderModel';
import { FaRegEye } from 'react-icons/fa';
import { CustomerOrder } from '@/types';


const AdminOrderTable: React.FC<{ orders: CustomerOrder[] }> = ({ orders }) => {
    const [selectedCustomerOrder, setSelectedCustomerOrder] = useState<CustomerOrder | null>(null);

    return (
        <div className="flex flex-col mt-6 w-full">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-appTitleBgColor text-white font-normal font-sans">
                    <tr className="">
                        <th className="border px-2 py-2">S/N</th>
                        <th className="border px-2 py-2">Order ID</th>
                        <th className="border px-2 py-2">Customer Name</th>
                        <th className="border px-2 py-2">Customer Email</th>
                        <th className="border px-2 py-2">Total Items</th>
                        <th className="border px-2 py-2">Subtotal</th>
                        <th className="border px-2 py-2">Shipping Fee</th>
                        <th className="border px-2 py-2">Country</th>
                        <th className="border px-2 py-2">State</th>
                        <th className="border px-2 py-2">Payment Status</th>
                        <th className="border px-2 py-2">Delivery Status</th>
                        <th className="border px-2 py-2">Address</th>
                        <th className="border px-2 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id} className="text-center bg-white font-normal font-sans">
                            <td className="border px-2 py-2">{index + 1}</td>
                            <td className="border px-2 py-2">{order.order_id}</td>
                            <td className="border px-2 py-2">{order.customerName}</td>
                            <td className="border px-2 py-2">{order.customer_email}</td>
                            <td className="border px-2 py-2">{order.totalItems}</td>
                            <td className="border px-2 py-2">{order.subtotal}</td>
                            <td className="border px-2 py-2">{order.shippingFee}</td>
                            <td className="border px-2 py-2">{order.country}</td>
                            <td className="border px-2 py-2">{order.state}</td>
                            <td className="border px-2 py-2">{order.paymentstatus}</td>
                            <td className="border px-2 py-2">{order.deliveryStatus}</td>
                            <td className="border px-2 py-2">{order.address}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => setSelectedCustomerOrder(order)}
                                    className="bg-appNav text-white px-2 py-2 rounded-md"
                                >
                                    <FaRegEye />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedCustomerOrder && (
                <AdminOrderModel
                    orders={selectedCustomerOrder.orders}
                    onClose={() => setSelectedCustomerOrder(null)}
                />
            )}
        </div>
    );
};


export default AdminOrderTable;
