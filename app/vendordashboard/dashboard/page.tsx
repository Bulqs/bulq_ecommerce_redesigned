"use client"
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { RiBox1Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { BiBorderOuter } from "react-icons/bi";
import { VscLayersActive } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { CustomerOrder } from "@/types";
import VendorOrderTable from "@/components/vendordashboardcomponents/VendorOrderTable";
import VendorBarChart from "@/components/vendordashboardcomponents/VendorBarChart";
import VendorLayout from "@/components/vendordashboardcomponents/VendorLayout";


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

const VendorDashboard = () => {

    const [searchInput, setSearchInput] = useState('');
    const [vendorFilter, setVendorFilter] = useState('');
    const [deliveryStatusFilter, setDeliveryStatusFilter] = useState('');

    const [timeFilter, setTimeFilter] = useState('all'); // "all", "days", "weeks", "months"
    const [chartData, setChartData] = useState<number[]>([]); // Dynamic data for the bar chart


    //Filter orders based on search and dropdown selections
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

    const handleFilterChange = (filter: string) => {
        setTimeFilter(filter);
        updateChartData(filter);
    };

    const updateChartData = (filter: string) => {
        // Simulate data fetching and filtering by time range
        let filteredData: number[] = [];

        switch (filter) {
            case 'weeks':
                filteredData = [250, 300, 350, 400, 450]; // Replace with actual week-based data
                break;
            case 'months':
                filteredData = [1000, 1200, 1500, 1800, 2000, 700, 3000, 1800, 2780, 400, 900, 580]; // Replace with actual month-based data
                break;
            case 'days':
                filteredData = [80, 100, 60, 150, 120, 90, 200]; // Replace with actual day-based data
                break;
            default:
                filteredData = [1000, 1200, 1500, 1800, 1300, 2000, 1700]; // Default data (e.g., for "all" time)
        }

        setChartData(filteredData);
    };

    useEffect(() => {
        updateChartData(timeFilter); // Initialize with default filter
    }, []);

    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll ">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> VENDOR DASHBOARD MANAGEMENT </h2>
                </div>

                <div className="w-full bg-appNav/60 p-4 flex flex-col items-center justify-between mt-6 rounded-lg gap-4">

                    <div className="w-full p-1 flex items-center justify-between rounded-lg gap-5">

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <FaRegMoneyBill1 className="text-3xl text-appTitleBgColor" />
                                <p className="font-extrabold text-2xl text-appTitleBgColor value"> $10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Total Sales </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <RiBox1Fill className="text-4xl text-purple-800" />
                                <p className="font-extrabold text-2xl text-purple-800 value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Total Orders </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <MdOutlineDirectionsBike className="text-3xl text-blue-950" />
                                <p className="font-extrabold text-2xl text-blue-950 value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Orders in Transit </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <TbTruckDelivery className="text-3xl text-yellow-500 " />
                                <p className="font-extrabold text-2xl text-yellow-500 value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Orders on Delivery </p>
                            </div>
                        </div>

                    </div>


                    <div className="w-full  p-1 flex items-center justify-between rounded-lg gap-4">

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <IoMdCheckmarkCircle className="text-3xl text-green-500" />
                                <p className="font-extrabold text-2xl text-green-500 value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Orders Completed </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <MdCancel className="text-3xl text-red-700" />
                                <p className="font-extrabold text-2xl text-red-700 value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Orders Rejected </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <BiBorderOuter className="text-3xl text-appTitleBgColor" />
                                <p className="font-extrabold text-2xl text-appTitleBgColor value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Total Products </p>
                            </div>
                        </div>

                        <div className="w-3/12 bg-white  h-28 flex flex-col rounded-lg overflow-hidden p-1 border-2 border-white shadow-white shadow-sm ">
                            <div className="flex items-center justify-center bg-white w-full h-14 p-2 gap-4 rounded-t-md">
                                <VscLayersActive className="text-3xl text-appNav" />
                                <p className="font-extrabold text-2xl text-appNav value"> 10,000 </p>
                            </div>

                            <div className=" flex items-center justify-center  h-14 bg-appTitleBgColor rounded-b-md">
                                <p className="font-normal text-lg text-white"> Active Products </p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="w-full bg-appNav/60 p-4 flex flex-col items-center justify-between mt-6 rounded-lg gap-1">

                    <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                        <h2 className="text-lg font-semibold text-white font-serif">VENDOR STATISTICS </h2>

                        <div className="flex items-center justify-between mb-2 gap-4">
                          <p className="text-white font-bold"> Filter by: </p>
                            <select
                                onChange={(e) => handleFilterChange(e.target.value)}
                                className="py-1 px-2 bg-gray-200 rounded text-sm"
                            >
                                <option value="all">All</option>
                                <option value="days">Daily</option>
                                <option value="weeks">Weekly</option>
                                <option value="months">Monthly</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col w-full h-full mt-4">
                        {/* Filter Dropdown */}
                        

                        {/* Bar Chart */}
                        <div className="flex-grow w-full h-full p-4">
                            <VendorBarChart
                                data={chartData}
                                labels={
                                    timeFilter === "months"
                                        ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
                                        : timeFilter === "weeks"
                                            ? ["Week 1", "Week 2", "Week 3", "Week 4"]
                                            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                                }
                            />
                        </div>
                    </div>

                </div>


                <div className="w-full bg-appNav/60 p-4 flex flex-col items-center justify-between mt-6 rounded-lg gap-1">

                    <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                        <h2 className="text-lg font-semibold text-white font-serif"> VENDOR ORDERS </h2>
                    </div>

                    <VendorOrderTable orders={filteredOrders} />

                </div>

            </div>
        </VendorLayout>
    );
};

VendorDashboard.getLayout = (page: React.ReactElement) => <VendorLayout>{page}</VendorLayout>;

export default VendorDashboard;