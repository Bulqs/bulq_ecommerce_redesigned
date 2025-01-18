import React from 'react'
import Layout from '@/components/customernavigation/Layout'
import Imageuploads from '@/components/multiformsteps/Imageuploads'


const CustomerProfile: React.FC = () => {
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
                    Account <br /> <span className="font-normal text-base"> User Personal Information </span>
                  </p>
                </div>
                <hr />



                {/* PERSONAL INFORMATION SETTINGS */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-3 w-full">
                  <div className="w-full">
                    {/* IMAGE UPLOAD SECTION */}
                    <div className="px-0 py-0">
                      <div className="lg:max-w-[332px] md:max-w-[332px] max-w-[375px]  bg-white pb-10">
                        <div>
                          {/* Profile Heading Title */}
                          <div className="flex gap-3 pl-0">
                            <p className="text-base font-medium text-gray-800 pb-5">
                              IMAGE UPLOAD <br /> <span className="font-normal text-base"> Upload any form of identification </span>
                            </p>
                          </div>
                          <hr />

                          <Imageuploads />
                          <p className="text-xs leading-5 font-bold text-gray-600 ml-5">PNG, JPG, JPEG up to 2MB</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:flex md:flex block gap-8 lg:mt-2 md:mt-2 mt-2">
                      <div className="w-full">
                        <p className="text-base text-gray-800">First Name</p>
                        <div
                          className="flex justify-between bg-white lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border ">
                          <input type='text'
                            name='firstName'
                            id="firstName"
                            placeholder="Enter First Name"
                            className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full " />
                        </div>
                      </div>

                      <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                        <p className="text-base text-gray-800">Last Name</p>
                        <input type='text'
                          name='lastName'
                          id="lastName"
                          placeholder="Enter Last Name"
                          className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                      </div>

                    </div>

                    {/* Email address AND Phone Number */}
                    <div className="lg:flex md:flex block gap-8 lg:mt-10 md:mt-6 mt-4">
                      <div className="w-full">
                        <p className="text-base text-gray-800">Email Address</p>
                        <div className="flex justify-between border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border cursor-pointer">
                          <input type='email'
                            name='email'
                            id="email"
                            placeholder="Enter Email Address"
                            className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full" />
                        </div>
                      </div>

                      <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                        <p className="text-base text-gray-800">Phone No:</p>
                        <input type='text'
                          name='phone'
                          id="phone"
                          placeholder="Phone Number"
                          className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='my-2 flex justify-start gap-x-8 px-0 '>
            <button className='w-32 bg-appTitleBgColor text-white px-4 font-bold py-2 rounded-sm'>
              Edit
            </button>

            <button className='w-32 bg-appRed text-white px-4 font-bold py-2 rounded-sm'>
              Cancle
            </button>

          </div>
        </div >
      </div>
    </Layout>
  )
}

export default CustomerProfile