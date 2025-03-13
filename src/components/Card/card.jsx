

import Image from "next/image";
import PasswordToggle from "./PasswordToggle";
export default function Card({name , cardNumber , expiryDate , cvvHidden}) {
    return (
        <div className=" border border-gray-200 bg-neutral-100 p-4 h-110 w-lg flex flex-col gap-4 " >
           
           <div className="flex justify-center ">
                <div className="h-64 w-lg rounded-lg flex justify-start bg-[url(/images/creditCard.png)] bg-cover   ">
                    <h3 className=" font-inter font-semibold text-[16px] leading-[100%] tracking-[0%] text-white  pt-45 px-8 ">{name}</h3>
                </div>
           </div>
            
            <div className="flex flex-col gap-3.5 ">
                <p className="font-inter font-semibold text-[18px] leading-[24px] tracking-[-2%] text-[#121212]" >Card Information</p>
                <p className="flex justify-between font-inter font-normal text-[16px] leading-[24px] tracking-[-1%] text-[#344055]"><strong>Card No. </strong>{cardNumber}</p>
                <p className="flex justify-between font-inter font-normal text-[16px] leading-[24px] tracking-[-1%] text-[#344055]"><strong>Expiry Date: </strong>{expiryDate}</p>
                <div className=" flex justify-between">
                     <div className=" font-inter font-normal text-[16px] leading-[24px] tracking-[-1%] text-[#344055]"><strong>CVV:   </strong></div>
                    <div><PasswordToggle cvvHidden={cvvHidden}/></div>
                       
                    
                </div>
               
            </div>

         
          

         
        </div>
    );

}

