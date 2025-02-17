"use client";
import { useState } from "react";
import Image from "next/image";

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    color: string;
    quantity: number;
    size: string;  // Added size property
}

const CheckoutPage = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: "1",
            name: "Product 1",
            image: "/images/bottle.png",
            price: 100,
            color: "Red",
            quantity: 2,
            size: "Medium",  // Example size
        },
        {
            id: "2",
            name: "Product 2",
            image: "/images/lips.png",
            price: 200,
            color: "Blue",
            quantity: 1,
            size: "Large",  // Example size
        },
        {
            id: "3",
            name: "Product 3",
            image: "/images/bottle.png",
            price: 200,
            color: "Blue",
            quantity: 1,
            size: "Small",  // Example size
        },
        {
            id: "4",
            name: "Product 4",
            image: "/images/lips.png",
            price: 200,
            color: "Blue",
            quantity: 1,
            size: "Large",  // Example size
        },
    ]);

    const deliveryFee = 20;
    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const total = subtotal + deliveryFee;

    const handleRemove = (id: string) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className=" mx-auto md:px-16 py-6 md:mt-28 md:pt-16 md:pb-32 bg-appTitleBgColor/80">
            <div className="flex w-auto">
                <h2 className=" bg-appTitleBgColor/95 py-2 px-4 rounded-md text-lg font-bold text-white">Product Order List </h2>
            </div>
            <div className="w-full flex flex-row items-start justify-between mt-8 gap-8">
                <div className="flex flex-col w-9/12 gap-6">
                    <div className="col-span-2 ">
                        <div className="overflow-x-auto rounded-lg">
                            <table className="min-w-full bg-white border border-gray-200 overflow-hidden ">
                                <thead className="bg-appTitleBgColor/95 text-white">
                                    <tr className="border-b">
                                        <th className="p-3 text-left">S/N</th>
                                        <th className="p-3 text-left">Image</th>
                                        <th className="p-3 text-left">Product Name</th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Color</th>
                                        <th className="p-3 text-left">Size</th> {/* Added Size Column */}
                                        <th className="p-3 text-left">Quantity</th>
                                        <th className="p-3 text-left">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={product.id} className="border-b">
                                            <td className="p-3">{index + 1}</td>
                                            <td className="p-3">
                                                <Image src={product.image} alt={product.name} width={64} height={64} className="object-cover" />
                                            </td>
                                            <td className="p-3">{product.name}</td>
                                            <td className="p-3">${product.price.toFixed(2)}</td>
                                            <td className="p-3">{product.color}</td>
                                            <td className="p-3">{product.size}</td> {/* Display Size */}
                                            <td className="p-3">{product.quantity}</td>
                                            <td className="p-3">
                                                <button
                                                    onClick={() => handleRemove(product.id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-3/12 bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="w-full flex items-center justify-start p-2 bg-appTitleBgColor/95 mb-2">
                        <h2 className="text-xl font-bold text-black">Order Summary</h2>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="mb-4 flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Make Payment</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
