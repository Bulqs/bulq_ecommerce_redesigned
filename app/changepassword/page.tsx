'use client'
import Layout from '@/components/customernavigation/Layout'
import React from 'react'

const ChangePassword: React.FC = () => {
    return (
        <Layout>
            <div className="w-full pb-10">
                <div className="lg:max-w-[1245px] md:max-w-[744px] max-w-[375px] mx-auto ">
                    <div className="px-0 pb-0">

                        <div className="lg:max-w-[1245px] md:max-w-[744px] max-w-[375px] mx-auto py-12 ">
                            <div>
                                {/* Profile Heading Title */}
                                <div className="flex gap-3 pl-0">
                                    <p className="text-2xl font-bold text-gray-800 pb-5">
                                        Password Settings <br /> <span className="font-normal text-base"> Change Password </span>
                                    </p>
                                </div>
                                <hr />

                                {/* PERSONAL INFORMATION SETTINGS */}
                                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-3 w-full">
                                    <div className="w-full">
                                        <div className="lg:flex md:flex block gap-8 lg:mt-2 md:mt-2 mt-2">
                                            <div className="w-full">
                                                <p className="text-base text-gray-800">Old Password</p>
                                                <div
                                                    className="flex justify-between bg-white lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border ">
                                                    <input type='password'
                                                        name='oldpassword'
                                                        id="oldpassword"
                                                        placeholder="**********"
                                                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full " />
                                                </div>
                                            </div>

                                            <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                                                <p className="text-base text-gray-800"> New Password </p>
                                                <div
                                                    className="flex justify-between bg-white lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border ">
                                                    <input type='password'
                                                        name='newpassword'
                                                        id="newpassword"
                                                        placeholder="**********"
                                                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full " />
                                                </div>
                                            </div>

                                            <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                                                <p className="text-base text-gray-800"> Confirm New Password </p>
                                                <div
                                                    className="flex justify-between bg-white lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border ">
                                                    <input type='password'
                                                        name='cnewpassword'
                                                        id="cnewpassword"
                                                        placeholder="**********"
                                                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-2 flex justify-start gap-x-8 px-0 '>
                        <button className='w-32 bg-appRed  text-white px-4 font-bold py-2 rounded-sm'>
                            Edit
                        </button>

                        <button className='w-32 bg-appTitleBgColor text-white px-4 font-bold py-2 rounded-sm'>
                            Update
                        </button>

                    </div>
                </div >
            </div>
        </Layout>
    )
}

export default ChangePassword
