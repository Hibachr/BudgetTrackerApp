import AddCardButton from "./addCardButton";
import Image from "next/image"
import Card from "./card";
import PasswordToggle from "./PasswordToggle";
import { useState } from "react";
import CreatePrimaryCardForm from "./createPrimaryCardForm";
import AddPrimaryCardButton from "./addPrimaryCardButton";
export default function CardList() {
   
    const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

    // Function to open the form
    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    // Function to close the form
    const handleCloseForm = () => {
        setIsFormOpen(false);
    };


  
  
    return (
        <div className="flex flex-col gap-10">

            {/* <div className="flex items-center justify-between px-7 border border-gray-200 p-2 w-lg h-[60px] rounded-md hover:bg-[#E0E3F0] "> 
               
               
                 <button
                    onClick={handleOpenForm}
                    className="font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.01em]"
                >
                    Add Primary Card
                </button>
               
                
                 <div><Image src="/icons/Icon2.png" alt="Logo" width={10} height={15} /></div>
               
            </div>
             */}
             <AddPrimaryCardButton/>



             <Card name="ADRIAN TRA" cardNumber="4889 9271 1937 1932" expiryDate="12/28" cvvHidden="123" />

            <AddCardButton />

            {isFormOpen && <CreatePrimaryCardForm onClose={handleCloseForm} />}
        </div>
    )
}

