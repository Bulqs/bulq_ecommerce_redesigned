import React, { useState, useEffect } from "react";

interface BrandModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, description: string) => void;
    initialName: string;
    initialDescription: string;
}

const VendorBrandModal: React.FC<BrandModalProps> = ({ isOpen, onClose, onSubmit, initialName, initialDescription }) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);

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
                    <h2 className="text-xl font-semibold text-white">{initialName ? "Edit Brand" : "Add New Brand"}</h2>
                    <button onClick={onClose} className="flex items-center justify-center text-white bg-red-600 px-2 rounded-md">X</button>
                </div>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>

                    <div className='flex items-center gap-8'>
                        <input
                            type="text"
                            placeholder="Brand Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded w-full p-2 mb-4"
                        />

                        <input
                            type="text"
                            placeholder="Brand Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded w-full p-2 mb-4"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-appTitleBgColor text-white px-4 py-2 rounded">{initialName ? 'Edit Brand' : 'Create Brand'}</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default VendorBrandModal;
