"use client";
import React, { useState, useEffect } from 'react';

interface AdminProductFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (product: any) => void;
    editProduct: any | null;
}

const VendorProductFormModal: React.FC<AdminProductFormModalProps> = ({ isOpen, onClose, onSubmit, editProduct }) => {
    if (!isOpen) return null;


    const [formData, setFormData] = useState({
        product_name: "",
        vendor: "",
        category: "",
        brand: "",
        sku: "",
        price: "",
        description: "",
        discount: "",
        stock: "",
        status: "active",
        size: "M", // Default size
        color: "Red", // Default color
        image: null
    });

    useEffect(() => {
        if (editProduct) {
            setFormData({
                ...editProduct,
                // size: editProduct.size || "M",
                // color: editProduct.color || "Red"
            });
        } else {
            setFormData({
                product_name: "",
                vendor: "",
                sku: "",
                category: "",
                brand: "",
                price: "",
                description: "",
                discount: "",
                stock: "",
                status: "",
                size: "",
                color: "",
                image: null
            });
        }
    }, [editProduct]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFormData((prevData) => ({ ...prevData, image: URL.createObjectURL(file) }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ product_name: "", sku: "", color: "", size: "", category: "", vendor: "", brand: "", price: "", description: "", discount: "", stock: "", status: "active", image: null });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-2xl">
                <div className="w-full flex items-center justify-between bg-appTitleBgColor px-2 py-2">
                    <h2 className="text-xl font-semibold text-white">{editProduct ? 'Edit Product' : 'Create Product'}</h2>
                    <button onClick={onClose} className="flex items-center justify-center text-white bg-red-600 px-2 rounded-md">X</button>
                </div>
                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                    <div className='flex items-center gap-8'>
                        <input type="text" name="product_name" value={formData.product_name} onChange={handleInputChange} placeholder="Product Name" className="border p-2 rounded w-full" required />
                        <input type="text" name="vendor" value={formData.vendor} onChange={handleInputChange} placeholder="Vendor" className="border p-2 rounded w-full" required />
                    </div>

                    <div className='flex items-center gap-8'>
                        <input type="text" name="sku" value={formData.sku} onChange={handleInputChange} placeholder="Sku" className="border p-2 rounded w-full" required />
                        <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="border p-2 rounded w-full" required />
                    </div>

                    <div className='flex items-center gap-8'>
                        <input type="number" name="discount" value={formData.discount} onChange={handleInputChange} placeholder="Discount" className="border p-2 rounded w-full" required />
                        <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} placeholder="Stock" className="border p-2 rounded w-full" required />
                    </div>

                    <div className='flex items-center'>
                        <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="border p-2 rounded w-full" required></textarea>
                    </div>

                    {/* Size Selector */}
                    <div className='flex items-center gap-4'>
                        <select name="size" value={formData.size} onChange={handleInputChange} className="border p-2 rounded w-full " required>
                            {["Select Size", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                <option className="hover:bg-appTitleBgColor" key={size} value={size}>{size}</option>
                            ))}
                        </select>

                        {/* Color Selector */}
                        <select name="color" value={formData.color} onChange={handleInputChange} className="border p-2 rounded w-full" required>
                            {["Select Color", "Red", "Blue", "Green", "Black", "White"].map((color) => (
                                <option key={color} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex items-center gap-8'>
                        <select name="category" value={formData.category} onChange={handleInputChange} className="border p-2 rounded w-full">
                            {["Select Category", "Fashion", "Electronics", "Home Appliancies", "Laptops", "Tap and Mobiles"].map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        
                        <select name="brand" value={formData.brand} onChange={handleInputChange} className="border p-2 rounded w-full">
                            {["Select Brand", "Nike", "Addidas", "Apple", "Techno"].map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    <select name="status" value={formData.status} onChange={handleInputChange} className="border p-2 rounded w-full">
                        <option value=""> Select Action</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    <input type="file" onChange={handleImageChange} className="border border-gray-300 p-2 rounded w-full" accept="image/*" required />

                    {formData.image && (
                        <div className="mt-2">
                            <img src={formData.image} alt="Uploaded Preview" className="w-16 h-16 rounded-md" />
                        </div>
                    )}

                    <div className="flex justify-end">
                        <button type="submit" className="bg-appTitleBgColor text-white px-4 py-2 rounded">{editProduct ? 'Edit Product' : 'Create Product'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorProductFormModal;
