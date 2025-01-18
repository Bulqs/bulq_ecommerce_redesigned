import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Congrat = () => {
  return (
    <div className='w-full py-14 flex flex-col justify-center items-center md:mt-24'>
      <div className="w-[350px] h-1/2 text-red-500 bg-white flex flex-col justify-center items-center gap-6 border-2 border-gray-200 shadow-2xl" style={{borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}}>
        {/* IMAGE DIV */}
        <div className="relative" >
          <Image src='/images/medalbcg.png' alt='' width={400} height={200}/>
          <Image src='/images/medal.png' alt='' width={150} height={200} className='absolute top-[-7px] left-[25%]'style={{zIndex: 99}}/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[35px] left-[23%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[50px] left-[29%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[65px] left-[33%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[43px] left-[47%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[43px] left-[65%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[43px] left-[75%]'/>
          <Image src='/images/star.png' alt='' width={20} height={20} className='absolute top-[30px] left-[83%]'/>
        </div>
        {/* Congrats words here */}
        <div className="flex flex-col justify-center items-center gap-8" style={{marginTop: '20px'}}>
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-[18px]">CONGRATULATION</h1>
          <h6 className="italic text-black font-extralight">your order is on its way</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href='receipt'>
            <button className="text-white text-[14px] text-center font-bold bg-[#046969] w-[130px] h-[40px] rounded-2xl cursor-pointer">VIEW RECEIPT</button>
            </Link>
            <h6 className="text-black italic text-[12px]">check your mail for receipt</h6>
          </div>
        </div>
        {/* BOTTOM DIV */}
        <div className="flex flex-row justify-between items-end gap-[150px]">
          <Link href='/'>
          <div className="text-black text-[12px] italic font-extralight cursor-pointer">KEEP SHOPPING</div>
          </Link>
          <Link href='/'>
          <div className="text-black text-[12px] italic font-extralight cursor-pointer">Go to Profile</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Congrat