import React from "react";
import Layout from "@/components/customernavigation/Layout";
import Image from "next/image";

const AllOrder: React.FC = () => {
    return (
        <Layout>
            <div className="bg-gray-100">
                <div className="px-0 py-0">
                    <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full lg:px-10 md:px-6 px-4 py-12 bg-white mx-auto">
                        <p className="text-xl font-semibold leading-9 text-start ttext-appTitleBgColor lg:text-2xl">
                            All Orders
                        </p>
                        <div className="lg:block hidden">
                            <div className="grid grid-cols-6 mt-8 gap-5">
                                <p className="text-lg font-semibold leading-tight text-appTitleBgColor lg:text-xl col-span-2">
                                    Product
                                </p>
                                <p className="text-lg font-semibold leading-tight text-appTitleBgColor lg:pl-0 pl-28 lg:text-xl">
                                    Quantity
                                </p>
                                <p className="text-xl font-semibold leading-tight text-appTitleBgColor lg:block hidden lg:text-xl">
                                    Remove
                                </p>
                                <p className="text-lg font-semibold leading-tight text-appTitleBgColor lg:text-xl">
                                    Price
                                </p>
                                <p className="text-lg font-semibold leading-tight text-appTitleBgColor lg:text-xl">
                                    Total
                                </p>
                            </div>
                            <hr className="mt-6" />
                            <div className="grid grid-cols-6 mt-8 gap-5">
                                <div className=" ">
                                    <Image
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/redddddfgg.png"
                                        alt="wooden stool"
                                        role="img"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="lg:text-xl col-span-1">
                                    <p className="xl:text-xl lg:text-lg font-semibold leading-normal text-gray-800">
                                        Nike Air Force 1
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 xl:mt-4 lg:mt-2">
                                        Color:{" "}
                                        <span className="font-medium text-appNav"> Red Black</span>
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Size: <span className="font-medium text-appNav"> XL </span>
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Delivery:{" "}
                                        <span className="font-medium text-appNav"> Time: 2 days</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-none font-bold text-gray-600 mt-2">
                                        Quantity : 1
                                    </p>
                                </div>
                                <div>
                                    <p className="hover:underline cursor-pointer text-base font-medium text-red-500 mt-2">
                                        Remove
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                                        $210
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-800 mt-2">
                                        $450
                                    </p>
                                </div>
                            </div>
                            <hr className="mt-6" />
                            <div className="grid grid-cols-6 mt-8 gap-5">
                                <div className=" ">
                                    <Image
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/%3Bo.png"
                                        alt="wooden stool"
                                        role="img"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="lg:text-xl col-span-1">
                                    <p className="xl:text-xl lg:text-lg font-semibold leading-normal text-gray-800">
                                        Yeezy 700
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 xl:mt-4 lg:mt-2">
                                        Color:{" "}
                                        <span className="font-medium text-appNav">Energy Green</span>
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Size: <span className="font-medium text-appNav"> XL </span>
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Delivery:{" "}
                                        <span className="font-medium text-appNav"> Time: 2 days</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-none font-bold text-gray-600 mt-2">
                                        Quantity : 2
                                    </p>
                                </div>
                                <div>
                                    <p className="hover:underline cursor-pointer text-base font-medium text-red-500 mt-2">
                                        Remove
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-none text-gray-800">
                                        $120
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-800 mt-2">
                                        $360
                                    </p>
                                </div>
                            </div>
                            <hr className="mt-6" />
                            <div className="grid grid-cols-6 mt-8 gap-5">
                                <div className=" ">
                                    <Image
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/bvczf.png"
                                        alt="wooden stool"
                                        role="img"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="lg:text-xl col-span-1">
                                    <p className="xl:text-xl lg:text-lg font-semibold leading-normal text-gray-800">
                                        Nike Air Jordan `1
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 xl:mt-4 lg:mt-2">
                                        Color:{" "}
                                        <span className="font-medium text-appNav"> Red Black</span>
                                    </p>

                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Size: <span className="font-medium text-appNav"> XL </span>
                                    </p>
                                    <p className="text-sm leading-normal font-bold text-gray-600 mt-2">
                                        Delivery:{" "}
                                        <span className="font-medium text-appNav"> Time: 2 days</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base leading-none font-bold text-gray-600 mt-2">
                                        Quantity: 3
                                    </p>
                                </div>
                                <div>
                                    <p className="hover:underline cursor-pointer text-base font-medium text-red-500 mt-2">
                                        Remove
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-none text-gray-800">
                                        $190
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-800 mt-2">
                                        $380
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:hidden block">
                            <div className="mt-6">
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/789.png"
                                    alt="wooden stool"
                                    className="lg:hidden md:block hidden"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/erw3r.png"
                                    alt="pro"
                                    className="block lg:hidden md:hidden"
                                    width={500}
                                    height={500}
                                />
                                <div className="flex flex-col mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <p className="text-2xl font-semibold leading-normal text-gray-800">
                                                    Nike Air Force 1
                                                </p>
                                                <p className="text-xl font-medium text-gray-800 mt-2">
                                                    $450
                                                </p>
                                            </div>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Color:{" "}
                                                <span className="font-medium">
                                                    {" "}
                                                    Red Black
                                                </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Size:{" "}
                                                <span className="font-medium"> XL </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Delivery:{" "}
                                                <span className="font-medium">
                                                    {" "}
                                                    Time: 2 days
                                                </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Quantity 1:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:flex justify-between items-center">
                                        <div className="flex items-center mt-4 space-x-6">
                                            <p className="text-base font-medium hover:underline text-red-500 cursor-pointer">
                                                Remove
                                            </p>
                                        </div>
                                        <div className="flex gap-8 md:mt-0 mt-6">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                TOTAL:
                                            </p>
                                            <p className="text-base font-semibold leading-none text-gray-800">
                                                $210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6" />
                            <div className="mt-6">
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centerrrrrr.png"
                                    alt="wooden stool"
                                    className="lg:hidden md:block hidden"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/09787.png"
                                    alt="pro"
                                    className="block lg:hidden md:hidden"
                                    width={500}
                                    height={500}
                                />
                                <div className="flex flex-col mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <p className="text-2xl font-semibold leading-normal text-gray-800">
                                                    Yeezy 700
                                                </p>
                                                <p className="text-xl font-medium text-gray-800 mt-2">
                                                    $120
                                                </p>
                                            </div>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Color:{" "}
                                                <span className="font-medium">
                                                    {" "}
                                                    Energy Green
                                                </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Size:{" "}
                                                <span className="font-medium"> XL </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Quantity : 2
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:flex justify-between items-center">
                                        <div className="flex items-center mt-4 space-x-6">
                                            <p className="text-base font-medium hover:underline text-red-500 cursor-pointer">
                                                Remove
                                            </p>
                                        </div>
                                        <div className="flex gap-8 md:mt-0 mt-6">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                TOTAL:
                                            </p>
                                            <p className="text-base font-semibold leading-none text-gray-800">
                                                $360
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6" />
                            <div className="mt-6">
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centerrrrrr.png"
                                    alt="wooden stool"
                                    className="lg:hidden md:block hidden"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/09787.png"
                                    alt="pro"
                                    className="block lg:hidden md:hidden"
                                    width={500}
                                    height={500}
                                />
                                <div className="flex flex-col mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <p className="text-2xl font-semibold leading-normal text-gray-800">
                                                    Nike Air Jordan `1
                                                </p>
                                                <p className="text-xl font-medium text-gray-800 mt-2">
                                                    $190
                                                </p>
                                            </div>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Color:{" "}
                                                <span className="font-medium">
                                                    {" "}
                                                    Red Black
                                                </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Size:{" "}
                                                <span className="font-medium"> XL </span>
                                            </p>
                                            <p className="text-sm leading-normal text-gray-600 mt-3">
                                                Quantity : 3
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:flex justify-between items-center">
                                        <div className="flex items-center mt-4 space-x-6">
                                            <p className="text-base font-medium leading-none hover:underline text-gray-800 lg:hidden block">
                                                See details
                                            </p>
                                            <p className="text-base font-medium hover:underline text-red-500 cursor-pointer">
                                                Remove
                                            </p>
                                        </div>
                                        <div className="flex gap-8 md:mt-0 mt-6">
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                TOTAL:
                                            </p>
                                            <p className="text-base font-semibold leading-none text-gray-800">
                                                $380
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6" />
                        </div>

                        <div className="lg:px-10 md:px-6 md:mt-14 lg:mt-10 lg:flex lg:flex-row flex-row-reverse gap-4 justify-end mt-6">
                            <h1>pagination section</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllOrder;
