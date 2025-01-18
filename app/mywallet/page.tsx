"use client"
import AddCardModal from '@/components/AddCardModal'
import AddNewBankAccount from '@/components/AddNewBankAccount'
import Cashout from '@/components/Cashout'
import Layout from '@/components/customernavigation/Layout'
import { transactions } from '@/data/data'
import Image from 'next/image'
import React, { useState } from 'react'

const MyWallet = () => {
  const [popModal, setPopModal] = useState<boolean>(false);
  const handleOpenPop = () => {
    setPopModal(!popModal);
    console.log(popModal)
  };
  const buttonColor = (button: string) => {
    if(button === "Completed") {
      return 'bg-[#008080]'
    }
    else if(button === "Approved") {
      return 'bg-yellow-300'
    }
    else if(button === "Pending...") {
      return 'bg-gray-300'
    }
    else {
      return 'bg-red-200'
    }
  };
  return (
    <Layout>
    <div className='relative w-[300px] h-full flex flex-col items-center justify-start p-8 gap-6'>
      {/* WALLET AND BALANCE DIVS */}
      <div className="flex flex-col">
        {/* WALLET DIV */}
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="text-appLightBlack text-[14px] font-semibold font-inter">WALLET ID:</h3>
          <h6 className="text-appLightBlack font-semibold text-[12px] font-inter">22433536GB</h6>
        </div>
        {/* ACCOUNT BALANCE */}
        <div className="flex flex-row items-center justify-center gap-4">
        <h3 className="text-appLightBlack text-[14px] font-semibold font-inter">Balance:</h3>
          <h6 className="text-[#008080] font-semibold text-[12px] italic font-inter">$2100</h6>
        </div>
      </div>
      {/* CASH-OUT FUND AND ADD-CARD DIVS */}
      <div className="flex flex-row gap-2">
        {/* CASHOUT BUTTON */}
        <div className="">
          <button className="bg-[#008080] w-[60px] h-[25px] cursor-pointer rounded-lg text-white text-[12px] font-inter font-semibold italic"
          onClick={handleOpenPop}
          >Cash out</button>
        </div>
        {/* FUND BUTTON */}
        <div className="">
          <button className="bg-[#008080] w-[60px] h-[25px] cursor-pointer rounded-lg text-white text-[12px] font-inter font-semibold italic">Fund</button>
        </div>
        {/* ADD CARD BUTTON */}
        <div className="">
        <button className="bg-[#008080] w-[60px] h-[25px] cursor-pointer rounded-lg text-white text-[12px] font-inter font-semibold italic" 
        onClick={handleOpenPop}>Add Card</button>
        </div>
        </div>
        {/* ACCOUNT NUMBER AND ADD NEW BANK ACCOUNT DIVS */}
        <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-row justify-around items-center gap-2 bg-[#008080] w-[200px] h-[40px] rounded-lg">
          <div className=" gap-2 flex-[3] flex justify-center items-center">
            <h6 className="text-white text-[14px] font-inter font-semibold italic">2222********</h6>
          </div>
          <div className="flex-[1] relative">
            <Image src='/images/mastercard.png' alt='' width={48} height={39}/>
            <h6 className="text-white text-[8px] font-semibold absolute top-3">mastercard</h6>
          </div>
    </div>
    <div className="">
        <button className="bg-[#008080] w-[150px] h-[40px] cursor-pointer rounded-lg text-white text-[12px] font-inter font-semibold italic"
        onClick={handleOpenPop}
        >Add New Bank Account</button>
        </div>
    </div>
    <div className="flex flex-col gap-4 justify-start items-center">
      {/* TRANSACTION  HISTORY HEADER DIV */}
      <div className="">
        <h4 className="uppercase text-[14px] font-bold">transaction history</h4>
      </div>
      {/* TABLE DIV */}
      <div className="">
      <table className="gap-2 w-[320px]">
      <thead className="">
        <tr className="text-center font-light font-inter">
          <th className="font-semibold font-inter text-[12px]">Date</th>
          <th className="font-semibold font-inter text-[12px]">Transaction</th>
          <th className="font-semibold font-inter text-[12px]">Amount</th>
          <th className="font-semibold font-inter text-[12px]">Status</th>
        </tr>
      </thead>
      <tbody className="border-spacing-4">
    {
      transactions && 
      transactions.map((transaction) => (
        
      
        <tr className="">
          <th className="font-light font-inter text-[12px]">
            {transaction.date}
          </th>
          <th className="font-light font-inter text-[12px]">
            {transaction.transaction}
          </th>
          <th className="font-light font-inter text-[12px]">
           ${transaction.amount}
          </th>
          <th className="">
            <button className={`${ buttonColor(transaction.status ?? "string") } text-white italic w-[70px] h-[20px] rounded-lg`}>
              <h6 className="font-semibold font-inter text-[12px]">{transaction.status}</h6>
            </button>
          </th>
        </tr>
      
    
      ))
    }
    </tbody>
    </table>
    </div>
    </div>
    {popModal &&
    <AddCardModal
    modal={handleOpenPop}
    />
    }
    {
      popModal && 
    <Cashout modal={handleOpenPop}/>

    }
    {
      popModal && 
    <AddNewBankAccount modal={handleOpenPop}/>

    }
      </div>
      
    </Layout>
  )
}

export default MyWallet