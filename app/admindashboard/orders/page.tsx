"use client"
import AdminOrderTable from '@/components/admindashboardcomponents/AdminOrderTable';
import Layout from '@/components/admindashboardcomponents/Layout';
import { CustomerOrder } from '@/types';
import React, { useState } from 'react';


const orders: CustomerOrder[] = [
    {
        id: 1,
        order_id: "12345-A",
        customerName: "Hammed Ridwan O.",
        customer_email: "redux01@gmail.com",
        country: "Nigeria",
        state: "Ogun State",
        address: "123 Main St",
        type_of_delivery: "Standard",
        paymentstatus: "Paid",
        totalItems: "5",
        deliveryStatus: "Shipped",
        subtotal: "$200",
        shippingFee: "$20",
        orders: [
            {
                size: "Large",
                color: "Red",
                frequency: "Weekly",
                total: "$220",
                vendor: "Vendor A",
                discount: "$10",
                payment_method: "Credit Card",
            },
            {
                size: "Medium",
                color: "Blue",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor B",
                discount: "$5",
                payment_method: "PayPal",
            },
            {
                size: "Medium",
                color: "Yellow",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor C",
                discount: "$5",
                payment_method: "PayPal",
            },
            {
                size: "Medium",
                color: "Pink",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor D",
                discount: "$5",
                payment_method: "PayPal",
            },
        ],
    },
    {
        id: 2,
        customerName: "Umar Ibrahim A",
        order_id: "12345-B",
        customer_email: "stopbegging@gmail.com",
        country: "Canada",
        state: "Manitoba",
        address: "123 Main St",
        type_of_delivery: "Standard",
        paymentstatus: "Paid",
        totalItems: "5",
        deliveryStatus: "Proccessed",
        subtotal: "$200",
        shippingFee: "$20",
        orders: [
            {
                size: "Large",
                color: "Blue",
                frequency: "Weekly",
                total: "$220",
                vendor: "Vendor A",
                discount: "$10",
                payment_method: "Credit Card",
            },
            {
                size: "Medium",
                color: "Brown",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor B",
                discount: "$5",
                payment_method: "PayPal",
            },
        ],
    },
    {
        id: 3,
        customerName: "John Doe",
        order_id: "12345-C",
        customer_email: "john@example.com",
        country: "Japan",
        state: "Tokyo",
        address: "123 Main St",
        type_of_delivery: "Standard",
        paymentstatus: "Not Paid",
        deliveryStatus: "Delivered",
        totalItems: "5",
        subtotal: "$200",
        shippingFee: "$20",
        orders: [
            {
                size: "Large",
                color: "Purple",
                frequency: "Weekly",
                total: "$220",
                vendor: "Vendor A",
                discount: "$10",
                payment_method: "Credit Card",
            },
            {
                size: "Medium",
                color: "White",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor B",
                discount: "$5",
                payment_method: "PayPal",
            },
            {
                size: "Medium",
                color: "Whine",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor C",
                discount: "$5",
                payment_method: "PayPal",
            },
             {
                 size: "Medium",
                color: "Green",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor D",
                discount: "$5",
                payment_method: "PayPal",
            },
            {
                size: "Medium",
                color: "Black",
                frequency: "Monthly",
                total: "$180",
                vendor: "Vendor E",
                discount: "$5",
                payment_method: "PayPal",
            },
        ],
    },
    // Additional customer orders...
];


const AdminOrderDashBoard: React.FC = () => {
    const [searchInput, setSearchInput] = useState('');
    const [vendorFilter, setVendorFilter] = useState('');
    const [deliveryStatusFilter, setDeliveryStatusFilter] = useState('');
    const vendorOptions = ["All Vendors", "Vendor A", "Vendor B", "Vendor C", "Vendor D", "Vendor E"];
    const deliveryStatusOptions = ["All Delivery Status", "Shipped", "Processing", "Delivered"];


    // Filter orders based on search and dropdown selections
    const filteredOrders = orders.filter(order => {
        const matchesSearch =
            order.customerName.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.customer_email.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.country.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.state.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.paymentstatus.toLowerCase().includes(searchInput.toLowerCase());

        const matchesVendor = vendorFilter ? order.orders.some(o => o.vendor === vendorFilter) : true;
        // const matchesDeliveryStatus = deliveryStatusFilter ? order.orders.some(o => o.deliveryStatus === deliveryStatusFilter) : true;
       
        const matchesDeliveryStatus = deliveryStatusFilter ? order.deliveryStatus === deliveryStatusFilter : true;

        return matchesSearch && matchesVendor && matchesDeliveryStatus;
    });


    return (
        <Layout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Admin Orders Page </h2>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appTitleBgColor p-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by name, email, country, state"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-4/12"
                    />

                    {/* Vendor Filter */}
                    <select
                        value={vendorFilter}
                        onChange={(e) => setVendorFilter(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-3/12"
                    >
                        {vendorOptions.map((vendor) => (
                            <option key={vendor} value={vendor === "All Vendors" ? "" : vendor}>
                                {vendor}
                            </option>
                        ))}
                    </select>

                    {/* Delivery Status Filter */}
                    <select
                        value={deliveryStatusFilter}
                        onChange={(e) => setDeliveryStatusFilter(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-3/12"
                    >
                        {deliveryStatusOptions.map((status) => (
                            <option key={status} value={status === "All Delivery Status" ? "" : status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>

                <AdminOrderTable orders={filteredOrders} />
            </div>
        </Layout>
    );
}

export default AdminOrderDashBoard;
