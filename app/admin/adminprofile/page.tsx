import React from 'react'
import Layout from '@/components/adminnavigation/Layout'
import Imageuploads from '@/components/multiformsteps/Imageuploads'
import Image from 'next/image'
import Tables from './Tables'


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
                    Dashboard <br /> <span className="font-normal text-base"> Vendor Statistics Board </span>
                  </p>
                </div>
                <hr />



                {/* SALES INFORMATION */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-3 w-full  h-auto">
                  <div className="w-full p-2 h-auto justify-between items-center flex flex-wrap">

                    {/* dashboard list div  */}
                    <div className='w-3/12 bg-white h-20 grid items-center pl-6 py-2 border-2 border-gray-700 shadow-lg shadow-slate-900 rounded-md '>
                      <p className='font-bold text-xl'>Total Sales </p>
                      <p className='font-bold text-lg'> $10,000 </p>
                    </div>

                    <div className='w-3/12 bg-white h-20 grid items-center pl-6 py-2 border-2 border-gray-700 shadow-lg shadow-slate-900 rounded-md '>
                      <p className='font-bold text-xl'>Total Orders </p>
                      <p className='font-bold text-lg'> $10,000 </p>
                    </div>

                    <div className='w-3/12 bg-white h-20 grid items-center pl-6 py-2 border-2 border-gray-700 shadow-lg shadow-slate-900 rounded-md '>
                      <p className='font-bold text-xl'>Total Products </p>
                      <p className='font-bold text-lg'> $10,000 </p>
                    </div>
                  </div>
                </div>

                {/* SALES STATISTICS GRAPH  */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-14 w-full  h-auto">
                  <div className="w-full p-2 flex h-auto justify-between items-center">

                    {/* dashboard list div  */}
                    <div className='w-5/12 bg-white h-[500px] items-start pl-4 py-2 border-2 border-gray-700 shadow-lg shadow-slate-900 rounded-md '>
                      <p className='font-semibold text-xl'>Sale Statistics </p>
                      <div className="w-full h-auto justify-center items-center flex mt-6">
                        <Image src='/images/circle.png' alt="" width={350} height={350} className="object-cover mx-auto" />
                      </div>
                    </div>

                    <div className='w-5/12 bg-white h-[500px] items-start pl-4 py-2 border-2 border-gray-700 shadow-lg shadow-slate-900 rounded-md '>
                      <p className='font-semibold text-xl'>Products Statistics </p>
                      <div className="w-full h-auto justify-center items-center  flex mt-6">
                        <Image src='/images/circle.png' alt="" width={350} height={350} className="object-cover mx-auto" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* SALES STATISTICS TABLE  */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-14 w-full  h-auto">
                  <div className="w-full p-2 flex h-auto">
                    {/* dashboard list div  */}
                    <Tables />

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='my-2 flex justify-start gap-x-8 px-0 '>
            <button className='w-32 bg-appTitleBgColor text-white px-4 font-bold py-2 rounded-sm'>
              Edit
            </button>

            <button className='w-32 bg-appRed text-white px-4 font-bold py-2 rounded-sm'>
              Cancle
            </button>

          </div> */}
        </div >
      </div>
    </Layout >
  )
}

export default CustomerProfile