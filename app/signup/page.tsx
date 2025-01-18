import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ig from '../../public/images/ig.png';
import facebook from '../../public/images/facebook.png';
import google from '../../public/images/google.png';

const SignUpPage: React.FC = () => {
    return (
        <main className="flex min-h-screen justify-center items-center flex-1 ">

            <div className="flex flex-1 w-1/2 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-0 xl:px-0 ">
                <div className="ml-[270px] w-full lg:w-[500px] bg-gray-100 rounded-xl px-10">
                    <div>

                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-appBlack">
                            Create Bulq User Account
                        </h2>
                        <p className="mt-2 text-base leading-6 text-appTitleBgColor font-bold">
                            Input your correct details
                        </p>
                    </div>

                    <div className="mt-5 pb-14">
                        <div>
                            <form action="#" method="POST" className="space-y-4">

                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            required
                                            placeholder='Enter First Name'
                                            className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium leading-3 text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            required
                                            placeholder='Enter Last Name'
                                            className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone No:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            required
                                            placeholder='Enter Phone Number '
                                            className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder='Enter Email Address'
                                            required
                                            className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder='***********************'
                                            required
                                            className="form-padding block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="agree-me"
                                            name="agree-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="remember-me" className="ml-3 font-bold block text-sm leading-6 text-gray-700">
                                            I agree to <span className='text-appRed'> Term of Use </span>
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            {/* Forgot password? */}
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-appTitleBgColor px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="px-6 text-gray-900">Create a seller or vendor account </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Link
                                    href={"/"}
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-appNav px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                >
                                    <span className="text-sm font-semibold leading-6">Sign Up as a Vendor</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                >

                                    <span className="text-sm font-semibold leading-6">Exist acount ?{" "} LOGIN</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Part Section goes here  */}
            <div className="flex flex-1 w-1/2 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-0 xl:px-0">
                <div className="ml-[80px] w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-appBlack">
                            Register You Bulq Account
                        </h2>
                    </div>

                    <div className="mt-5 pb-14">
                        <div>
                            <form action="#" method="POST" className="space-y-3">
                                <div>
                                    <Link
                                        href={"/"}
                                        className="flex w-full items-center justify-evenly rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <Image
                                            alt="banner-images"
                                            src={facebook}
                                            width={30}
                                            height={30}
                                        />
                                        <span className="text-sm font-semibold leading-6">Sign Up with Facebook</span>
                                    </Link>

                                </div>
                                <div>
                                    <Link
                                        href={"/"}
                                        className="flex w-full items-center justify-evenly rounded-md bg-appRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                         <Image
                                            alt="banner-images"
                                            src={google}
                                            width={30}
                                            height={30}
                                            className='md:ml-[-10px]'
                                        />
                                        <span className="text-sm font-semibold leading-6">Sign Up with G-Mail</span>
                                    </Link>

                                </div>
                                <div>
                                    <Link
                                        href={"/"}
                                        className="flex w-full items-center justify-evenly rounded-md bg-appTitleBgColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-appNav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <Image
                                            alt="banner-images"
                                            src={ig}
                                            width={30}
                                            height={30}
                                        />
                                        <span className="text-sm font-semibold leading-6">Sign Up with Instagram </span>
                                    </Link>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10">
                            {/* <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">Create a seller or vendor account </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <Link
                                    href={"/"}
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-appNav px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                >
                                    <span className="text-sm font-semibold leading-6">Sign Up as a Vendor</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                >

                                    <span className="text-sm font-semibold leading-6">Exist acount ?{" "} LOGIN</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
           
        </main>
    )
}


export default SignUpPage;