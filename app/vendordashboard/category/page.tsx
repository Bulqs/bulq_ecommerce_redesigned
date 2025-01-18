"use client";
import React, { useState } from "react";
import VendorCategoryModal from "@/components/VendorDashboardModal/VendorCategoryModal";
import VendorLayout from "@/components/vendordashboardcomponents/VendorLayout";

interface Category {
    id: number;
    name: string;
    description: string;
    blocked: boolean;
}

const VendorDashboardProductCategory: React.FC = () => {
    
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [modalData, setModalData] = useState<{ name: string; description: string }>({
        name: "",
        description: "",
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "blocked" | "unblocked">("all");

    const handleCreateCategory = (name: string, description: string) => {
        const newCategory: Category = { id: Date.now(), name, description, blocked: false };
        setCategories([...categories, newCategory]);
    };

    const handleEditCategory = (index: number, name: string, description: string) => {
        setEditIndex(index);
        setModalData({ name, description });
        setCategoryModalOpen(true);
    };

    const handleSaveCategory = (name: string, description: string) => {
        if (editIndex !== null) {
            const updatedCategories = categories.map((category, i) =>
                i === editIndex ? { ...category, name, description } : category
            );
            setCategories(updatedCategories);
            setEditIndex(null);
        } else {
            handleCreateCategory(name, description);
        }
        setCategoryModalOpen(false);
    };

    const handleDeleteCategory = (index: number) => {
        setCategories(categories.filter((_, i) => i !== index));
    };

    const handleBlockCategory = (index: number) => {
        setCategories(
            categories.map((category, i) =>
                i === index ? { ...category, blocked: !category.blocked } : category
            )
        );
    };

    const filteredCategories = categories.filter((category) => {
        const matchesSearch = category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter =
            filterStatus === "all" ||
            (filterStatus === "blocked" && category.blocked) ||
            (filterStatus === "unblocked" && !category.blocked);

        return matchesSearch && matchesFilter;
    });

    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll ">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">Vendor Category Page</h2>
                    <button
                        onClick={() => {
                            setModalData({ name: "", description: "" });
                            setCategoryModalOpen(true);
                        }}
                        className="bg-app bg-appNav text-white px-4 py-2 rounded-md"
                    >
                        Add New Category
                    </button>
                </div>

                {/*Admin Product Search and Filter Dropdown Goes Here */}
                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appNav rounded-md p-4">
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
                        <thead className="bg-appNav text-white">
                            <tr className="font-normal font-sans">
                                <th className="border border-gray-300 px-2 py-2">S/N</th>
                                <th className="border border-gray-300 px-2 py-2">Category Name</th>
                                <th className="border border-gray-300 px-2 py-2">Description</th>
                                <th className="border border-gray-300 px-2 py-2">Status</th>
                                <th className="border border-gray-300 px-2 py-2">Block</th>
                                <th className="border border-gray-300 px-2 py-2">Edit</th>
                                <th className="border border-gray-300 px-2 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCategories.map((category, index) => (
                                <tr key={category.id} className="bg-white text-center">
                                    <td className="border border-gray-300 px-2 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-2 py-2">{category.name}</td>
                                    <td className="border border-gray-300 px-2 py-2">{category.description}</td>
                                    <td className="border border-gray-300 px-2 py-2">{category.blocked ? "Blocked" : "Active"}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleBlockCategory(index)}
                                            className={`px-3 py-1 rounded ${category.blocked ? "bg-red-500 " : "bg-green-500"} text-white`}
                                        >
                                            {category.blocked ? "Unblock" : "Block"}
                                        </button>
                                    </td>

                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleEditCategory(index, category.name, category.description)}
                                            className="bg-appTitleBgColor text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                    </td>

                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            onClick={() => handleDeleteCategory(index)}
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

                <VendorCategoryModal
                    isOpen={isCategoryModalOpen}
                    onClose={() => {
                        setCategoryModalOpen(false);
                        setEditIndex(null);
                    }}
                    onSubmit={handleSaveCategory}
                    initialName={modalData.name}
                    initialDescription={modalData.description}
                />
            </div>
        </VendorLayout>
    );
};

export default VendorDashboardProductCategory;
