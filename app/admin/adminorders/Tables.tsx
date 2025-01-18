import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Tables = () => {
    return (

        <div className="py-5 w-full">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded ">
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full ">
                    <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-center">
                            <p className="font-bold text-gray-600 dark:text-gray-400 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                Latest Orders
                            </p>

                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                        <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                            <p className="text-base text-gray-600 dark:text-gray-400" id="page-view">
                                Viewing 1 - 20 of 60
                            </p>
                            <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded" onclick="pageView(false)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer" onclick="pageView(true)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                            <div className="relative w-32 z-10">
                                <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                                <select aria-label="Selected tab" className="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                                    <option>List View</option>
                                    <option>Grid View</option>
                                </select>
                            </div>
                        </div>
                        <div className="lg:ml-6 flex items-center">
                            <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Download All</button>
                            <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Order ID</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Full Name</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Email Adddress</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Price Paid</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Paymment Status</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Payment Date</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Payment time</th>
                                <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Delivery Status </th>
                                <td className="text-gray-600 dark:text-gray-400 font-bold pr-8 text-left text-sm tracking-normal leading-4">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">47DSHDS833JDSDS03</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Paid</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">2023-12-10</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pending</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex justify-center items-center gap-2">
                                        <button className='px-3 py-2 bg-black flex w-5/12 items-center justify-center text-white rounded-sm'> <FaRegEdit /> </button>
                                        <button className='px-3 py-2 bg-red-700 flex w-5/12 items-center justify-center text-white rounded-sm'> <MdDeleteForever /> </button>
                                    </div>
                                </td>

                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">47DSHDS833JDSDS03</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Paid</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">2023-12-10</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pending</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex justify-center items-center gap-2">
                                        <button className='px-3 py-2 bg-black flex w-5/12 items-center justify-center text-white rounded-sm'> <FaRegEdit /> </button>
                                        <button className='px-3 py-2 bg-red-700 flex w-5/12 items-center justify-center text-white rounded-sm'> <MdDeleteForever /> </button>
                                    </div>
                                </td>

                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">47DSHDS833JDSDS03</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Paid</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">2023-12-10</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pending</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex justify-center items-center gap-2">
                                        <button className='px-3 py-2 bg-black flex w-5/12 items-center justify-center text-white rounded-sm'> <FaRegEdit /> </button>
                                        <button className='px-3 py-2 bg-red-700 flex w-5/12 items-center justify-center text-white rounded-sm'> <MdDeleteForever /> </button>
                                    </div>
                                </td>

                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">47DSHDS833JDSDS03</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$2,500</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Paid</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">2023-12-10</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Pending</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex justify-center items-center gap-2">
                                        <button className='px-3 py-2 bg-black flex w-5/12 items-center justify-center text-white rounded-sm'> <FaRegEdit /> </button>
                                        <button className='px-3 py-2 bg-red-700 flex w-5/12 items-center justify-center text-white rounded-sm'> <MdDeleteForever /> </button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div >
            </div >
        </div >
    )
}

export default Tables
