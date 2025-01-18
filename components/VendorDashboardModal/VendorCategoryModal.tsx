import React, { useState, useEffect } from "react";

interface CategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, description: string) => void;
    initialName: string;
    initialDescription: string;
    // brands: Brand[]; // New prop
}

const VendorCategoryModal: React.FC<CategoryModalProps> = ({ isOpen, onClose, onSubmit, initialName, initialDescription }) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [selectedBrand, setSelectedBrand] = useState("");

    useEffect(() => {
        if (isOpen) {
            setName(initialName);
            setDescription(initialDescription);
        }
    }, [isOpen, initialName, initialDescription]);

    const handleSubmit = () => {
        onSubmit(name, description);
        setName("");
        setDescription("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-2xl">
                <div className="w-full flex items-center justify-between bg-appTitleBgColor px-2 py-2">
                    <h2 className="text-xl font-semibold text-white">{initialName ? "Edit Category" : "Add New Category"}</h2>
                    <button onClick={onClose} className="flex items-center justify-center text-white bg-red-600 px-2 rounded-md">X</button>
                </div>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>

                    <div className='flex items-center gap-8'>
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded w-full p-2 mb-4" required
                        />

                        <input
                            type="text"
                            placeholder="Category Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded w-full p-2 mb-4" required
                        />

                        {/* Brand Dropdown */}
                        {/* <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="border rounded w-full p-2 mb-4"
                        >
                            <option value="">Select a Brand</option>
                            {brands?.map((brand) => (
                                <option key={brand.id} value={brand.name}>
                                    {brand.name}
                                </option>
                            ))}
                        </select> */}
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-appTitleBgColor text-white px-4 py-2 rounded">{initialName ? 'Edit Category' : 'Create Category'}</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default VendorCategoryModal;
