"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaTachometerAlt, FaBoxOpen, FaClipboardList, FaTags, FaBuilding,FaMoneyBill, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill, RiInboxArchiveFill } from 'react-icons/ri';
import { FaListCheck } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";





const UsernavItems: { name: string; href: string; icon: IconType }[] = [
    // { name: 'Dashboard', href: '/userdashboard/dashboard', icon: FaTachometerAlt },
    { name: 'My Orders', href: '/userdashboard/allorders', icon: FaClipboardList },
    { name: 'My Wishlist', href: '/userdashboard/wishlist', icon: FaListCheck },
    { name: 'Inbox Messages', href: '/userdashboard/inbox', icon: RiInboxArchiveFill },
    // { name: 'Category', href: '/vendordashboard/category', icon: FaTags },
    // { name: 'Brands', href: '/vendordashboard/brands', icon: FaBuilding },
    { name: 'My Wallet', href: '/userdashboard/wallet', icon: FaWallet },
    { name: 'My Voucher', href: '/userdashboard/voucher', icon: FaMoneyBill },
    { name: 'Change Password', href: '/userdashboard/changepassword', icon: RiLockPasswordFill },
    { name: 'Profile', href: '/userdashboard/profile', icon: CgProfile },
    { name: 'Logout', href: '/logout', icon: FaSignOutAlt },
];


export default function UserSidebar() {

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
                {!collapsed && <span className="font-bold text-lg">User Dashboard</span>}
                <button onClick={toggleSidebar} className="text-white ml-2">
                    <FaBars />
                </button>
            </div>

            <nav className="flex flex-col p-4">
                {UsernavItems.map((item) => (
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
