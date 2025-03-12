import AddCardButton from "./AddCardButton";
import Image from "next/image"
// import Card from "./card";
import Card from "./card";
import PasswordToggle from "./PasswordToggle";
export default function CardList() {
    return (
        <div className="flex flex-col gap-10">

            <div className="flex items-center justify-between px-7 border border-gray-200 p-2 w-lg h-[60px] rounded-md hover:bg-[#E6EEFC] ">
                <div className=" font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.01em] ">Primary Card </div>
                <div><Image src="/icons/Icon2.png" alt="Logo" width={10} height={15} /></div>
            </div>



            <Card name="ADRIAN TRA" cardNumber="4889 9271 1937 1932" expiryDate="12/28" cvvHidden="123" />

            <AddCardButton />
        </div>
    )
}