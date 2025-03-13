
import { useState } from 'react';
import CreatePrimaryCardForm from './CreatePrimaryCardForm';
import Image from 'next/image';

export default function AddPrimaryCardButton() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Function to open the form
    const handleOpenForm = () => {
        console.log("Open Primary");
        setIsFormOpen(true);
    };

    // Function to close the form
    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>


            <button onClick={handleOpenForm} className='border border-gray-200 p-2 w-lg h-[60px] rounded-md hover:bg-[#E0E3F0]'>
                <div className="flex items-center justify-between px-7 ">
                    <div

                        className="font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.01em] "
                    >
                        Add Primary Card
                    </div>
                    <div>
                        <Image src="/icons/Icon2.png" alt="Logo" width={10} height={15} />
                    </div>
                </div>
            </button>





            {isFormOpen && <CreatePrimaryCardForm onClose={handleCloseForm} />}
        </>
    );
}







