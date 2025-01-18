import React from 'react'
import Layout from '@/components/adminnavigation/Layout'
import Imageuploads from '@/components/multiformsteps/Imageuploads'
import Image from 'next/image'
import Search from './Search'
import TodayOrder from './TodayOrder'
import Allusers from './Allusers'
import AdminUserTables from './AdminUserTables'


const CustomerProfile: React.FC = () => {
  return (
    <Layout>
      <div className="w-full pb-10">
        <div className="lg:max-w-[1245px] md:max-w-[744px] max-w-[375px] mx-auto ">
          <div className="px-0 pb-0">

            <div className="lg:max-w-[1245px] md:max-w-[744px] max-w-[375px] mx-auto py-12 ">
              <div>
                {/* Profile Heading Title */}
                <div className="flex w-full gap-3 pl-0 pr-6 justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-800 pb-5">
                      Users List
                    </p>
                  </div>
                </div>
                <hr />



                {/* SALES INFORMATION */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-6 w-full  h-auto">

                  <div className='w-full bg-white pr-6 h-20 flex justify-between items-center pl-6 py-2 border-b-2 border-gray-400 shadow-sm shadow-slate-900 rounded-md '>
                    <div>
                      <Search />
                    </div>
                    <div className='flex gap-6'>
                      <Allusers />
                      <TodayOrder />
                    </div>
                  </div>

                </div>

                {/* SALES STATISTICS GRAPH  */}
                <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-0 md:px-0 px-4 mt-6 w-full  h-auto ">
                  <AdminUserTables />
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