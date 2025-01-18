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

                <Link href={'/customerprofile'} className={pathname === '/customerprofile' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaUser
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Profile
                    </div>
                </Link>
                <Link href={'/allorder'} className={pathname === '/allorder' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaCartArrowDown
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        All Order
                    </div>
                </Link>
                <Link href={'/inbox'} className={pathname === '/inbox' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaInbox
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Inbox
                    </div>
                </Link>
                <Link href={'/wishlist'} className={pathname === '/wishlist' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaList
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Wishlist
                    </div>
                </Link>
                <Link href={'/voucher'} className={pathname === '/voucher' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaCreditCard
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Voucher
                    </div>
                </Link>
                <Link href={'/mywallet'} className={pathname === '/mywallet' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaWallet
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        My Wallet
                    </div>
                </Link>
                <Link href={'/changepassword'} className={pathname === '/changepassword' ? activeLink : inactiveLink} >
                    <div className="flex items-center justify-center gap-2">
                        <FaLock
                            width={6}
                            height={6}
                            className='text-white'
                        />
                        Change Password
                    </div>
                </Link>
                <Link href={'/logout'} className={pathname === '/logout' ? activeLink : inactiveLink} >
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