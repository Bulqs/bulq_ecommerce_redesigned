"use client";
import VendorLayout from "@/components/vendordashboardcomponents/VendorLayout";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaRotateRight } from "react-icons/fa6";
import { FaRotateLeft } from "react-icons/fa6";
import VendorProductFormModal from "@/components/VendorDashboardModal/VendorProductFormModal";


const VendorProductDashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState<any[]>([]);
    const [editProduct, setEditProduct] = useState<any | null>(null);
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
    const [productToDelete, setProductToDelete] = useState<number | null>(null);
    // const [filteredProducts, setFilteredProducts] = useState<any[]>(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [sortOrder, setSortOrder] = useState("Latest");
    const categories = ["All Categories", "Fashion", "Electronics", "Home Appliancies", "Laptops", "Tap and Mobiles"]; // Add categories as needed
    const brands = ["All Brands", "Brand A", "Brand B", "Brand C"]; // Add brands as needed

    const openModal = () => {
        setEditProduct(null);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const addProduct = (product: any) => {
        if (editProduct) {
            setProducts((prevProducts) =>
                prevProducts.map((p) => (p.id === editProduct.id ? { ...product, id: editProduct.id } : p))
            );
        } else {
            setProducts((prevProducts) => [...prevProducts, { ...product, id: prevProducts.length + 1 }]);
        }
        closeModal();
    };

    const confirmDeleteProduct = (id: number) => {
        setProductToDelete(id);
        setIsConfirmDelete(true);
    };

    const deleteProduct = () => {
        if (productToDelete !== null) {
            setProducts((prevProducts) => prevProducts.filter(product => product.id !== productToDelete));
            setProductToDelete(null);
        }
        setIsConfirmDelete(false);
    };

    const editProductHandler = (product: any) => {
        setEditProduct(product);
        setIsModalOpen(true);
    };

    const toggleStatus = (id: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, status: product.status === "active" ? "inactive" : "active" } : product
            )
        );
    };



    const filteredProducts = products
        .filter(product =>
            product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.sku.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(product =>
            selectedCategory === "All Categories" || product.category === selectedCategory
        )
        .filter(product =>
            selectedBrand === "All Brands" || product.brand === selectedBrand
        )
        .sort((a, b) =>
            sortOrder === "Latest"
                ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );



    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll ">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Vendor Product Page </h2>
                    <button onClick={openModal} className="bg-app bg-appTitleBgColor text-white px-4 py-2 rounded-md">Create Product</button>
                </div>

                {/*Admin Product Search and Filter Dropdown Goes Here */}
                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appNav p-4">
                    <input
                        type="text"
                        placeholder="Search by name or SKU"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-3/12"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-2/12"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-2/12"
                    >
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full md:w-2/12"
                    >
                        <option value="Latest">Latest Added</option>
                        <option value="Oldest">Oldest Added</option>
                    </select>
                </div>
                {/*Admin Product Search and Filter Dropdown Ends Here */}

                
                {/* Product Table */}
                <div className="flex flex-col mt-6 w-12/12">
                    <table className="min-w-full border-collapse border border-gray-300 formtable">
                        <thead className="bg-appNav text-white">
                            <tr className="font-normal font-sans">
                                <th className="border border-gray-300 px-2 py-2">S/N</th>
                                <th className="border border-gray-300 px-2 py-2">Product Name</th>
                                <th className="border border-gray-300 px-2 py-2">Image</th>
                                <th className="border border-gray-300 px-2 py-2">Sku</th>
                                <th className="border border-gray-300 px-2 py-2">Color</th>
                                <th className="border border-gray-300 px-2 py-2">Size</th>
                                <th className="border border-gray-300 px-2 py-2">Vendor</th>
                                <th className="border border-gray-300 px-2 py-2">Cat.</th>
                                <th className="border border-gray-300 px-2 py-2">Brand</th>
                                <th className="border border-gray-300 px-2 py-2">Price</th>
                                {/* <th className="border border-gray-300 px-2 py-2">Description</th> */}
                                <th className="border border-gray-300 px-2 py-2">Disc.</th>
                                <th className="border border-gray-300 px-2 py-2">Stock</th>
                                <th className="border border-gray-300 px-2 py-2">Status</th>
                                <th className="border border-gray-300 px-2 py-2">Edit</th>
                                <th className="border border-gray-300 px-2 py-2">Delete</th>
                                <th className="border border-gray-300 px-2 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product, index) => (
                                <tr key={product.id} className=" bg-white">
                                    <td className="border border-gray-300 px-2 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.product_name}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        {product.image && <img src={product.image} alt="Product" className="w-16 h-16" />}
                                    </td>
                                    <td className="border border-gray-300 px-2 py-2">{product.sku}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.color}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.size}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.vendor}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.category}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.brand}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.price}</td>
                                    {/* <td className="border border-gray-300 px-2 py-2">{product.description}</td> */}
                                    <td className="border border-gray-300 px-2 py-2">{product.discount}</td>
                                    <td className="border border-gray-300 px-2 py-2">{product.stock}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <p className={`flex items-center justify-center px-2 py-1 rounded ${product.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {product.status}
                                        </p>
                                    </td>
                                
                                    <td className="px-4 py-2 ">
                                        <div className=" flex items-center justify-center gap-4 ">
                                            <button onClick={() => editProductHandler(product)} className="bg-appNav text-white px-2 py-2 rounded-md"><FiEdit /></button>
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 ">
                                        <div className=" flex items-center justify-center gap-4 ">
                                            <button onClick={() => confirmDeleteProduct(product.id)} className="bg-red-500 text-white px-2 py-2 rounded-md"><MdDelete />
                                            </button>
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 ">
                                        <div className=" flex items-center justify-center gap-4 ">
                                            <button
                                                onClick={() => toggleStatus(product.id)}
                                                className={`px-2 py-1 rounded Think ${product.status === 'active' ? 'bg-red-500' : 'bg-green-500'} text-white`}
                                            >
                                                {product.status === 'active' ? <FaRotateLeft /> : <FaRotateRight />
}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isConfirmDelete && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
                        <div className="bg-appTitleBgColor p-6 rounded-md w-full max-w-md">
                            <h3 className="text-lg font-semibold text-white">Are you sure you want to delete this product?</h3>
                            <div className="flex justify-between mt-4">
                                <button onClick={deleteProduct} className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold">Yes</button>
                                <button onClick={() => setIsConfirmDelete(false)} className="bg-appBanner text-white px-4 py-2 rounded-md  font-semibold">No</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <VendorProductFormModal isOpen={isModalOpen} onClose={closeModal} onSubmit={addProduct} editProduct={editProduct} />
        </VendorLayout>
    );
};

export default VendorProductDashboard;
