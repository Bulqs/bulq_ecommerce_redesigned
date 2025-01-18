"use client"
import React, { useEffect, useState } from 'react';
import AdminRegisteredSellerTable from '@/components/admindashboardcomponents/AdminRegisteredSellerTable';
import Layout from '@/components/admindashboardcomponents/Layout';
import AdminDeleteConfirmationModal from '@/components/AdminDashboardModal/AdminDeleteConfirmationModal';
import AdminRegisteredSellerModal from '@/components/AdminDashboardModal/AdminRegisteredSellerModal';
import { Seller } from '@/types';

const VendorDashoardRegisteredSeller: React.FC = () => {


    const [sellers, setSellers] = useState<Seller[]>([
        // Populate with sample data or fetch data here
        {
            sn: 1,
            seller_id: "abc123",
            firstname: "Hammed",
            lastname: "Ridwan",
            middlename: "Olaide",
            username: "redux123",
            email: "redux@gmail.com",
            phoneNumber: "123-456-7890",
            password: "password123",
            created_at: "2023-01-01",
            nin: "1234567890",
            bvn: "0987654321",
            isKycCompleted: true,
            country: "Canada",
            state: "Manitoba",
            address: "123 Main St",
            isBlocked: false, // Initial blocked status

        },
        {
            sn: 2,
            seller_id: "xyz678",
            firstname: "Umar",
            lastname: "Ibrahim",
            middlename: "Ayobami",
            username: "umar123",
            email: "umar@gmail.com",
            phoneNumber: "123-456-7890",
            password: "password123",
            created_at: "2023-01-01",
            nin: "1234567890",
            bvn: "0987654321",
            isKycCompleted: true,
            country: "Nigeria",
            state: "Lagos",
            address: "123 Main St",
            isBlocked: false, // Initial blocked status

        },
    ]);

    const [filteredSellers, setFilteredSellers] = useState<Seller[]>(sellers);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [sellerToDelete, setSellerToDelete] = useState<string | null>(null);

    const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredSellers(
            sellers.filter(seller =>
                ['seller_id', 'firstname', 'email', 'state', 'country', 'username', 'nin', 'bvn']
                    .some(key => seller[key as keyof Seller]?.toString().toLowerCase().includes(term))
            )
        );
    };

    // Update filtered users based on block status
    useEffect(() => {
        if (filterStatus === 'all') {
            setFilteredSellers(sellers);
        } else {
            const isBlocked = filterStatus === 'blocked';
            setFilteredSellers(sellers.filter(seller => seller.isBlocked === isBlocked));
        }
    }, [filterStatus, sellers]);

    // const handleDelete = (sellerId: string) => {
    //     setSellers(users.filter(seller => seller.seller_id !== sellerId));
    // };

    const handleDeleteClick = (sellerId: string) => {
        setSellerToDelete(sellerId);
        setIsConfirmationOpen(true);
    };

    const confirmDelete = () => {
        if (sellerToDelete) {
            setSellers(sellers.filter(seller => seller.seller_id !== sellerToDelete));
            setSellerToDelete(null);
        }
        setIsConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setSellerToDelete(null);
        setIsConfirmationOpen(false);
    };

    const handleBlock = (sellerId: string) => {
        setSellers(prevSellers =>
            prevSellers.map(seller =>
                seller.seller_id === sellerId ? { ...seller, isBlocked: !seller.isBlocked } : seller
            )
        );
    };


    const handleViewMore = (seller: Seller) => {
        setSelectedSeller(seller);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedSeller(null);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Registered Sellers Page </h2>
                </div>


                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appTitleBgColor p-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by Seller ID, Firstname, etc."
                        className="p-2 border border-gray-300 rounded-md w-full md:w-4/12"
                    />

                    {/* Dropdown for Block Status Filter */}
                    <select
                        className="p-2 border border-gray-300 rounded-md w-full md:w-2/12"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Sellers</option>
                        <option value="blocked">Blocked Sellers</option>
                        <option value="unblocked">Unblocked Sellers</option>
                    </select>
                </div>



                <AdminRegisteredSellerTable
                    // sellers={sellers}
                    sellers={filteredSellers}
                    // onDelete={handleDelete}
                    onDelete={handleDeleteClick}
                    onBlock={handleBlock} onViewMore={handleViewMore} />

                {isModalOpen && (
                    <AdminRegisteredSellerModal seller={selectedSeller} onClose={closeModal} />
                )}

                {isConfirmationOpen && (
                    <AdminDeleteConfirmationModal
                        message="Are you sure you want to delete this seller account?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                    />
                )}

            </div>
        </Layout>
    );
}

export default VendorDashoardRegisteredSeller;
