"use client"

import { useState } from "react";

const TodayOrder = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <div className="bg-appNav border border-appNav flex justify-between rounded w-40" onClick={() => setShow(!show)}>
                <p className="pl-3 py-3 text-white text-sm leading-3 tracking-normal font-normal">Today's Order</p>
                <div className="bg-appNav items-center flex rounded-r">
                    <div className="cursor-pointer text-white mx-3">
                        {show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            {show && (
                <ul className="visible transition duration-300 opacity-100 ease-out bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-appNav hover:text-white px-3 font-normal">Interface Settings</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-appNav hover:text-white px-3 font-normal">Notifications</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-appNav hover:text-white px-3 font-normal">Account Data</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm leading-3 tracking-normal py-3 hover:bg-appNav hover:text-white px-3 font-normal">Sign Out</li>
                </ul>
            )}
        </div>
    );
}

export default TodayOrder
