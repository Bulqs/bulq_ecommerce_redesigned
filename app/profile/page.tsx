"use client"
import React from "react";
import Image from 'next/image';
import './background.css'

import MultipleForms from "@/components/multiformsteps/MultipleForms";

const ProFilePage: React.FC = () => {

  return (
    <main className="background-image py-20 flex min-h-screen justify-center items-center flex-1 ">
      <MultipleForms showStepNumber={true} />
    </main>
  )
}


export default ProFilePage;