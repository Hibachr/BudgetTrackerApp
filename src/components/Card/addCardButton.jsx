import { useState } from 'react';
import CreateNewCardForm from './CreateNewCardForm'; 

export default function AddCardButton() {
    const [isFormOpen, setIsFormOpen] = useState(false); 

    // Function to open the form
    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    // Function to close the form
    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>
            {/* Button to open the form */}
            <button
                onClick={handleOpenForm}
                className="border border-gray-200 p-6 w-lg h-24 rounded-md flex justify-between items-center bg-[#F7F8FD] font-inter font-normal text-[18px] leading-[24px] tracking-[-0.02em] text-[#344055]  hover:bg-[#E0E3F0]"
            >
                Add a New Card
            </button>

            {/* Conditionally render the form */}
            {isFormOpen && <CreateNewCardForm onClose={handleCloseForm} />}
        </>
    );
}