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
        <div className="flex flex-col gap-10 ">

           
             <AddPrimaryCardButton/>



             <Card name="ADRIAN TRA" cardNumber="4889 9271 1937 1932" expiryDate="12/28" cvvHidden="123" />

            <AddCardButton />

            {isFormOpen && <CreatePrimaryCardForm onClose={handleCloseForm} />}
        </div>
    )
}

