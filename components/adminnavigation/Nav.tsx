"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaStar, FaUser, FaCartArrowDown, FaInbox, FaList, FaCreditCard, FaWallet, FaLock, FaPersonBooth, FaArrowAltCircleRight } from 'react-icons/fa';
import React from 'react'
const Nav = () => {
    const inactiveLink = 'flex gap-1 p-2';
    const activeLink = inactiveLink + ' bg-[#00000040] text-white rounded-l-lg opacity-100';
    const pathname = usePathname();
    // const {pathname} = router
    return (
        <aside className='text-white py-4 pr-0 w-64 border-t-2 border-t-white '>
            <nav className='flex flex-col gap-2 pl-4 '>

                <Link href={'/admin/adminprofile'} className={pathname === '/admin/adminprofile' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaUser
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Dashboard
                    </div>
                </Link>
                <Link href={'/admin/adminproducts'} className={pathname === '/admin/adminproducts' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaCartArrowDown
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Products
                    </div>
                </Link>
                <Link href={'/admin/admincategory'} className={pathname === '/admin/admincategory' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaInbox
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Category
                    </div>
                </Link>
                <Link href={'/admin/adminorders'} className={pathname === '/admin/adminorders' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaList
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Orders
                    </div>
                </Link>
                <Link href={'/admin/adminuser'} className={pathname === '/admin/adminuser' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaCreditCard
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Users
                    </div>
                </Link>
                <Link href={'/admin/adminwallet'} className={pathname === '/admin/adminwallet' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaWallet
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Seller
                    </div>
                </Link>
                <Link href={'/admin/adminchangepassword'} className={pathname === '/admin/adminchangepassword' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaLock
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Transaction
                    </div>
                </Link>
                <Link href={'/admin/adminlogout'} className={pathname === '/admin/adminlogout' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaArrowAltCircleRight
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Logout
                    </div>
                </Link>
            </nav>
        </aside>
    )
}

export default Nav