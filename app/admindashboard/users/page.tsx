"use client"
import AdminRegisteredUserTable from '@/components/admindashboardcomponents/AdminRegisteredUserTable';
import Layout from '@/components/admindashboardcomponents/Layout';
import AdminDeleteConfirmationModal from '@/components/AdminDashboardModal/AdminDeleteConfirmationModal';
import AdminRegisteredUserModal from '@/components/AdminDashboardModal/AdminRegisteredUserModal';
import { User } from '@/types';
import React, { useEffect, useState } from 'react';



const AdminDashoardRegisteredUser: React.FC = () => {

    const [users, setUsers] = useState<User[]>([
        // Populate with sample data or fetch data here
        {
            sn: 1,
            user_id: "abc123",
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
            user_id: "xyz678",
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

    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<string | null>(null);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredUsers(
            users.filter(user =>
                ['user_id', 'firstname', 'email', 'state', 'country', 'username', 'nin', 'bvn']
                    .some(key => user[key as keyof User]?.toString().toLowerCase().includes(term))
            )
        );
    };

    // Update filtered users based on block status
    useEffect(() => {
        if (filterStatus === 'all') {
            setFilteredUsers(users);
        } else {
            const isBlocked = filterStatus === 'blocked';
            setFilteredUsers(users.filter(user => user.isBlocked === isBlocked));
        }
    }, [filterStatus, users]);


    // const handleDelete = (userId: string) => {
    //     setUsers(users.filter(user => user.user_id !== userId));
    // };

    const handleDeleteClick = (userId: string) => {
        setUserToDelete(userId);
        setIsConfirmationOpen(true);
    };

    const confirmDelete = () => {
        if (userToDelete) {
            setUsers(users.filter(user => user.user_id !== userToDelete));
            setUserToDelete(null);
        }
        setIsConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setUserToDelete(null);
        setIsConfirmationOpen(false);
    };

    const handleBlock = (userId: string) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.user_id === userId ? { ...user, isBlocked: !user.isBlocked } : user
            )
        );
    };

    const handleViewMore = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif"> Registered Users Page </h2>
                </div>


                <div className="flex flex-wrap items-center justify-between mt-4 w-12/12 bg-appTitleBgColor p-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by User ID, Firstname, etc."
                        className="p-2 border border-gray-300 rounded-md w-full md:w-4/12"
                    />

                    {/* Dropdown for Block Status Filter */}
                    <select
                        className="p-2 border border-gray-300 rounded-md w-full md:w-2/12"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Users</option>
                        <option value="blocked">Blocked Users</option>
                        <option value="unblocked">Unblocked Users</option>
                    </select>
                </div>

               

                <AdminRegisteredUserTable
                    // users={users}
                    users={filteredUsers}
                    // onDelete={handleDelete}
                    onDelete={handleDeleteClick}
                    onBlock={handleBlock} onViewMore={handleViewMore} />

                {isModalOpen && (
                    <AdminRegisteredUserModal user={selectedUser} onClose={closeModal} />
                )}

                {isConfirmationOpen && (
                    <AdminDeleteConfirmationModal
                        message="Are you sure you want to delete this user aacount?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                    />
                )}

            </div>
        </Layout>
    );
}

export default AdminDashoardRegisteredUser;
