import Layout from '@/components/userdashboardcomponents/UserLayout'
import { vouchers } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Voucher = () => {
  return (
    <Layout>
    <div className='w-full h-[100vh-7rem] flex flex-col gap-4'>
      <div className="w-[300px] h-[50px] flex flex-row justify-between items-center">
        <div className="">All Voucher</div>
        <div className="relative flex flex-row">
          <div className="">
          <FaStar
          width={15}
          height={15}
          className='text-[#93c6c4] text-[35px]'
          color=''
          />
          </div>
          <div className="absolute top-[9px] right-[12px]">
            <h6 className="text-[14px] font-bold text-[#273f3e]">2</h6>
          </div>
        </div>
      </div>
      {/* VOUCHER DIV */}
      
          {
            vouchers &&
            vouchers.map((voucher)=> (
              <div className="w-[300px] h-[59px] bg-[#28A99E] bg-gradient-to-r from-[#87cdc7] via-[#28A99E] to-[#1c2a29] flex flex-row justify-around items-center rounded-lg cursor-pointer">
        {/* LEFT DIV */}
        <div className="flex-1 h-[142px] object-fit flex justify-center items-center">
          <Image src={voucher.image} alt='' width={55} height={82} className='object-contain'/>
        </div>
        {/* MIDDLE DIV */}
        <div className="flex-[2] flex items-around flex-col justify-between">
          <div className="">
            <h6 className="text-[12px] font-semibold text-white uppercase">{voucher.brand}</h6>
          </div>
          <div className="">
            <h6 className="text-[10px] font-light text-white">{voucher.discount}% off any {voucher.brand} Cap</h6>
          </div>
        </div>
        {/* RIGHT DIV */}
        <div className="flex-1 h-[59px] rounded-e-lg bg-[#28A99E] flex justify-center items-center">
          <div className="">
          <h6 className="text-[25px] font-semibold text-white">{voucher.discount}%</h6>
          </div>
        </div>
      </div>
            ))
          }
       
    </div>
    </Layout>
  )
}

/**
 * {
        vouchers && 
        vouchers.map((voucher)=> (
 *  ))
      }
 */

export default Voucher