"use client";
import React, { useState } from "react";
import Layout from "@/components/admindashboardcomponents/Layout";
import BrandModal from "@/components/AdminDashboardModal/BrandModal";

interface Brand {
    id: number;
    name: string;
    description: string;
    blocked: boolean;
}

const AdminDashboardProductBrand: React.FC = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [isBrandModalOpen, setBrandModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [modalData, setModalData] = useState<{ name: string; description: string }>({
        name: "",
        description: "",
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "blocked" | "unblocked">("all");

    const handleCreateBrand = (name: string, description: string) => {
        const newBrand: Brand = { id: Date.now(), name, description, blocked: false };
        setBrands([...brands, newBrand]);
    };

    const handleEditBrand = (index: number, name: string, description: string) => {
        setEditIndex(index);
        setModalData({ name, description });
        setBrandModalOpen(true);
    };

    const handleSaveBrand = (name: string, description: string) => {
        if (editIndex !== null) {
            const updatedBrands = brands.map((brand, i) =>
                i === editIndex ? { ...brand, name, description } : brand
            );
            setBrands(updatedBrands);
            setEditIndex(null);
        } else {
            handleCreateBrand(name, description);
        }
        setBrandModalOpen(false);
    };

    const handleDeleteBrand = (index: number) => {
        setBrands(brands.filter((_, i) => i !== index));
    };

    const handleBlockBrand = (index: number) => {
        setBrands(
            brands.map((brand, i) =>
                i === index ? { ...brand, blocked: !brand.blocked } : brand
            )
        );
    };

    const filteredBrands = brands.filter((brand) => {
        const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            brand.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter =
            filterStatus === "all" ||
            (filterStatus === "blocked" && brand.blocked) ||
            (filterStatus === "unblocked" && !brand.blocked);

        return matchesSearch && matchesFilter;
    });

    return (
        <Layout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">Admin Brand Page</h2>
                    <button
                        onClick={() => {
                            setModalData({ name: "", description: "" });
                            setBrandModalOpen(true);
                        }}
                        className="bg-app bg-appTitleBgColor text-white px-4 py-2 rounded-md"
                    >
                        Add New Brand
                    </button>
                </div>

                {/*Admin Product Search and Filter Dropdown Goes Here */}
                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appTitleBgColor p-4">
                    <input
                        type="text"
                        placeholder="Search by name or description"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-3/12 px-4 py-2 mb-2 md:mb-0 rounded-md border border-gray-300"
                    />

                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as "all" | "blocked" | "unblocked")}
                        className="w-full md:w-2/12 px-4 py-2 rounded-md border border-gray-300"
                    >
                        <option value="all">Filter By Status</option>
                        <option value="blocked">Blocked</option>
                        <option value="unblocked">Unblocked</option>
                    </select>
                </div>
                {/*Admin Product Search and Filter Dropdown Ends Here */}

                <div className="flex flex-col mt-6 w-12/12">
                    <table className="min-w-full border-collapse border border-gray-300 formtable">
                        <thead className="bg-appTitleBgColor text-white">
                            <tr className="font-normal font-sans">
                                <th className="border border-gray-300 px-2 py-2">S/N</th>
                                <th className="border border-gray-300 px-2 py-2">Brand Name</th>
                                <th className="border border-gray-300 px-2 py-2">Description</th>
                                <th className="border border-gray-300 px-2 py-2">Status</th>
                                <th className="border border-gray-300 px-2 py-2">Block</th>
                                <th className="border border-gray-300 px-2 py-2">Edit</th>
                                <th className="border border-gray-300 px-2 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBrands.map((brand, index) => (
                                <tr key={brand.id} className="bg-white text-center">
                                    <td className="border border-gray-300 px-2 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-2 py-2">{brand.name}</td>
                                    <td className="border border-gray-300 px-2 py-2">{brand.description}</td>
                                    <td className="border border-gray-300 px-2 py-2">{brand.blocked ? "Blocked" : "Active"}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleBlockBrand(index)}
                                            className={`px-3 py-1 rounded ${brand.blocked ? "bg-red-500 " : "bg-green-500"} text-white`}
                                        >
                                            {brand.blocked ? "Unblock" : "Block"}
                                        </button>
                                    </td>

                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleEditBrand(index, brand.name, brand.description)}
                                            className="bg-appTitleBgColor text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                    </td>

                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleDeleteBrand(index)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <BrandModal
                    isOpen={isBrandModalOpen}
                    onClose={() => {
                        setBrandModalOpen(false);
                        setEditIndex(null);
                    }}
                    onSubmit={handleSaveBrand}
                    initialName={modalData.name}
                    initialDescription={modalData.description}
                />
            </div>
        </Layout>
    );
};

export default AdminDashboardProductBrand;
