import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const Rustomernotifications = () => {
    return (
        <>

            <div className="flex flex-wrap w-full h-auto bg-appNav p-4 overflow-hidden mt-10">
                <div className="w-full bg-appNav">
                    <h4>
                        Customer's Notification
                    </h4>
                </div>
            </div>


            {/* Table Section */}
            <div className="py-5 w-full mb-20">
                <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded ">

                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                    <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                                    </th>
                                    <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Full Name</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Email Adddress</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Contact Address</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Phone Number</th>
                                    <th className="text-gray-600 dark:text-gray-400 font-bold pr-6 text-left text-sm tracking-normal leading-4">Message Body</th>
                                    <td className="text-gray-600 dark:text-gray-400 font-bold pr-8 text-left text-sm tracking-normal leading-4">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                    </td>
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Address</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">+234-816-537-1302</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Message</td>
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
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Address</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">+234-816-537-1302</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Message</td>
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
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Address</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">+234-816-537-1302</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Message</td>
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
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Umar Ibrahim Ayobami</p>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">umaribrahimayobami@gmail.com</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Address</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">+234-816-537-1302</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Awaiting Message</td>
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
        </>
    )
}

export default Rustomernotifications
