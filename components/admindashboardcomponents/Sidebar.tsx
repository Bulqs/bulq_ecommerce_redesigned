"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaTachometerAlt, FaBoxOpen, FaClipboardList, FaTags, FaBuilding, FaUsers, FaUserTie, FaMoneyBill, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from 'react-icons/ri';


const navItems: { name: string; href: string; icon: IconType }[] = [
    { name: 'Dashboard', href: '/admindashboard/dashboard', icon: FaTachometerAlt },
    { name: 'Products', href: '/admindashboard/products', icon: FaBoxOpen },
    { name: 'Orders', href: '/admindashboard/orders', icon: FaClipboardList },
    { name: 'Category', href: '/admindashboard/category', icon: FaTags },
    { name: 'Brands', href: '/admindashboard/brands', icon: FaBuilding },
    { name: 'Users', href: '/admindashboard/users', icon: FaUsers },
    { name: 'Sellers', href: '/admindashboard/sellers', icon: FaUserTie },
    { name: 'Transaction', href: '/admindashboard/transaction', icon: FaMoneyBill },
    { name: 'Profile', href: '/admindashboard/profile', icon: CgProfile },
    { name: 'Change Password', href: '/admindashboard/changepassword', icon: RiLockPasswordFill },
    { name: 'Logout', href: '/logout', icon: FaSignOutAlt },
];


export default function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside
            className={`inset-y-0 left-0 ${collapsed ? 'w-18' : 'w-64'} bg-gray-800 text-white transform duration-300`}
        >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between h-16 bg-gray-900 px-4 pt-1">
                {!collapsed && <span className="font-bold text-lg">Admin Dashboard</span>}
                <button onClick={toggleSidebar} className="text-white ml-2">
                    <FaBars />
                </button>
            </div>

            <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <p className="flex items-center p-2  my-1 hover:bg-gray-700 rounded-md">
                            <item.icon className={`mr-3 transition-all duration-300 ${collapsed ? '!text-lg' : 'text-2xl'}`} />
                            {!collapsed && <span>{item.name}</span>}
                        </p>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
