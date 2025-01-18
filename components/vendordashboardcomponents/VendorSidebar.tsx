"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaTachometerAlt, FaBoxOpen, FaClipboardList, FaTags, FaBuilding,FaMoneyBill, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from 'react-icons/ri';


const VendornavItems: { name: string; href: string; icon: IconType }[] = [
    { name: 'Dashboard', href: '/vendordashboard/dashboard', icon: FaTachometerAlt },
    { name: 'Products', href: '/vendordashboard/products', icon: FaBoxOpen },
    { name: 'Orders', href: '/vendordashboard/orders', icon: FaClipboardList },
    // { name: 'Category', href: '/vendordashboard/category', icon: FaTags },
    // { name: 'Brands', href: '/vendordashboard/brands', icon: FaBuilding },
    { name: 'Transaction', href: '/vendordashboard/transaction', icon: FaMoneyBill },
    { name: 'Profile', href: '/vendordashboard/profile', icon: CgProfile },
    { name: 'Change Password', href: '/vendordashboard/changepassword', icon: RiLockPasswordFill },
    { name: 'Logout', href: '/logout', icon: FaSignOutAlt },
];


export default function VendorSidebar() {

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
                {!collapsed && <span className="font-bold text-lg">Vendor Dashboard</span>}
                <button onClick={toggleSidebar} className="text-white ml-2">
                    <FaBars />
                </button>
            </div>

            <nav className="flex flex-col p-4">
                {VendornavItems.map((item) => (
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
