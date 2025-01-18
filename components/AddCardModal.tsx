"use client"

import { FaCreditCard, FaTimesCircle } from 'react-icons/fa';
import React, { useState } from 'react'
interface modal {
  modal : ()=> void;
}

const AddCardModal = ({modal}: modal) => {
  
  
  return (
    <div className='absolute top-[10px] w-[290px] h-[265px] bg-white ring-[#008080] ring-1 rounded-lg shadow-lg flex flex-col justify-center items-center gap-3'>
      <div className="relative flex flex-col">
        <div className="absolute  top-[-5px] right-[2px]">
        <FaTimesCircle
          width={6}
          height={6}
          className=' text-red-500'
          onClick={modal}
        />
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          {/* CARD NUMBER DIV */}
        <label htmlFor="cardNumber" className="text-[12px] font-light italic">Card Number</label>
          <div className="w-[260px] h-[40px] ring-1 ring-[#008080] rounded-lg flex flex-row justify-around items-center gap-2">
            <div className="">
            <input type="text" name='cardNumber' placeholder='Enter card number' className="border-transparent focus:outline-none" />
            </div>
            <div className="">
            <FaCreditCard
          width={6}
          height={6}
          className=' text-gray-400'
        />
            </div>
          </div>
          <div className="w-[280px] gap-2 flex flex-col">
          <label htmlFor="expiryDate" className="text-[12px] font-light italic">Expiry date</label>
          <div className="w-[250px] h-[40px] ring-1 ring-[#008080] rounded-lg flex flex-row justify-around items-center gap-2">
            <div className="">
            <input type="text" name='expiryDate' placeholder='Expiry date' className="border-transparent focus:outline-none italic" />
            </div>
            <div className="">
            <FaCreditCard
          width={6}
          height={6}
          className=' text-gray-400'
        />
            </div>
            </div>
            <label htmlFor="cvv" className="text-[12px] font-light italic">cvv</label>
            <div className="w-[250px] h-[40px] ring-1 ring-[#008080] rounded-lg flex flex-row justify-around items-center gap-2">
            <div className="">
            <input type="text" name='cvv' placeholder='cvv' className="border-transparent focus:outline-none italic" />
            </div>
            <div className="">
            <FaCreditCard
          width={6}
          height={6}
          className=' text-gray-400'
        />
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center" style={{marginTop: "10px"}}>
        <button className="bg-[#008080] w-[200px] h-[25px] cursor-pointer rounded-lg text-white text-[12px] font-inter font-semibold italic hover:opacity-60" onClick={modal}>Add Card</button>
        </div>
      </div>
    </div>
  )
}

export default AddCardModal