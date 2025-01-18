"use client"

import React, { useState } from "react";

type Prices = {
    price?: number,
    quantity?: number,
    selected?: number,
    total?: number,
}

const CartItem = ({price}: Prices) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [total, setTotal] = useState<number>()
    return (
        
        <div className="absolute top-[555px] w-[253px] h-[55px] border-2 border-[#0A8585] rounded-[19px] flex flex-row gap-4 justify-start items-center lg:top-[380px]" style={{marginTop: '-35px'}}>
                                        <div className="w-[21px] bg-[#0A8585] flex justify-center items-center" style={{marginLeft: "10px"}}>
                                            <h3 className="text[17px] text-white cursor-pointer" onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : 1)}>{`-`}</h3>
                                        </div>
                                        <div className="">{quantity}</div>
                                        <div className="w-[21px] bg-[#0A8585] flex justify-center items-center" style={{marginLeft: "10px"}}>
                                            <h3 className="text[17px]  text-white cursor-pointer" onClick={()=> setQuantity(quantity < 9 ? quantity + 1 : 1)}>{`+`}</h3>
                                        </div>
                                    </div>
                                    
    )
};
export default CartItem;