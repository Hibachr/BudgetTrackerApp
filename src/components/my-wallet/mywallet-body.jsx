import { useState } from 'react';
import Image from 'next/image';
import SendPaymentForm from './sendpayement'; 
import RequestPaymentForm from './requestpayement'; 
import CreateNewWalletForm from './createnewwallet';

// Data for financial plans
const financialPlans = [
    {
        icon: "/icons/hearts.png",
        title: "Emergency Fund",
        lastPaid: "August 28, 2022",
        progress: 30,
        currentAmount: "$300",
        targetAmount: "$1000",
    },
    {
        icon: "/icons/travel.png",
        title: "Travel Plan",
        lastPaid: "June 01, 2022",
        progress: 50,
        currentAmount: "$10,000",
        targetAmount: "$20,000",
    },
    {
        icon: "/icons/education.png",
        title: "Education",
        lastPaid: "May 14, 2022",
        progress: 70,
        currentAmount: "$7,000",
        targetAmount: "$10,000",
    },
    {
        icon: "/icons/foods.png",
        title: "Foods and Groceries",
        lastPaid: "August 28, 2022",
        progress: 30,
        currentAmount: "$300",
        targetAmount: "$1000",
    },
    {
        icon: "/icons/repair.png",
        title: "Repair Vehicle",
        lastPaid: "August 01, 2022",
        progress: 90,
        currentAmount: "$900",
        targetAmount: "$1000",
    },
    {
        icon: "/icons/donation.png",
        title: "Donation",
        lastPaid: "August 20, 2022",
        progress: 20,
        currentAmount: "$200",
        targetAmount: "$1000",
    },
];

export default function MyWalletBody() {
    // State to manage visibility of pop-up forms
    const [showSendPaymentForm, setShowSendPaymentForm] = useState(false);
    const [showRequestPaymentForm, setShowRequestPaymentForm] = useState(false);
    const [showCreateNewWalletForm, setShowCreateNewWalletForm] = useState(false);

    return (
        <div className="flex-1 bg-[#FFFFFF]">
            {/* Header Section */}
            <div className="mt-[24px] py-[36px] px-[48px] w-[1140px] h-[140px] gap-[95px]">
                <h1 className="font-inter font-bold text-3xl leading-10 text-[#121212]">My Wallet</h1>
                <p className="font-inter font-normal text-sm leading-5 text-[#5B6776] mt-1">Keep track your financial plan</p>
            </div>

            {/* Welcome Message and Buttons Section */}
            <div className="mx-[24px] mt-[36px] flex gap-6">
                {/* Hi Adrian! Section */}
                <div className="flex-1 w-[620px] h-[160px] px-[24px] py-[16px] gap-[21px] rounded-[6px] hover:bg-[#E2E8F0] border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A]">
                    <div className="flex justify-between items-center">
                        <h1 className="font-inter font-bold text-2xl leading-10 text-[#121212]">👋 Hi Adrian!</h1>
                        {/* Three Dots Icon */}
                        <Image
                            src="/icons/menu.png"
                            alt="More Options"
                            width={4}
                            height={16}
                            className="cursor-pointer"
                        />
                    </div>
                    <p className="font-inter text-[32px] text-[#344055] font-normal leading-[40px] tracking-[-0.024em] mt-4">$124,543</p>
                </div>

                {/* Buttons Section */}
                <div className="flex-1 flex gap-4 justify-center">
                    {/* Send a Payment Button */}
                    <button
                        onClick={() => setShowSendPaymentForm(true)} // Show Send Payment Form
                        className="flex-1 p-4 bg-white text-[#344055] text-center rounded-lg font-inter font-semibold hover:bg-[#4338CA] hover:text-white transition duration-300 border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] flex flex-col items-center gap-2"
                    >
                        <Image src="/icons/send.png" alt="Send a Payment" width={64} height={64} />
                        <span>Send a payment</span>
                    </button>

                    {/* Request a Payment Button */}
                    <button
                        onClick={() => setShowRequestPaymentForm(true)} // Show Request Payment Form
                        className="flex-1 p-4 bg-white text-[#344055] text-center rounded-lg font-inter font-semibold hover:bg-[#4338CA] hover:text-white transition duration-300 border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A] flex flex-col items-center gap-2"
                    >
                        <Image src="/icons/requestt.png" alt="Request a Payment" width={64} height={64} />
                        <span>Request a payment</span>
                    </button>
                </div>
            </div>

            {/* Financial Plans Section */}
            <div className="mt-[36px] mx-[24px]">
                <div className="grid grid-cols-3 gap-6">
                    {financialPlans.map((plan, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg hover:bg-[#E2E8F0] border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A]">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={plan.icon}
                                    alt={plan.title}
                                    width={32}
                                    height={32}
                                />
                                <h2 className="font-inter text-lg text-[#121212] text-[18px] font-semibold leading-[24px] tracking-[-0.02em] align-middle">
                                    {plan.title}
                                </h2>
                            </div>
                            <p className="font-inter font-normal leading-5 text-[#79808A] mt-1 text-[12px] tracking-[0em]">Last Paid on {plan.lastPaid}</p>
                            <div className="mt-4">
                                <div className="w-full bg-[#F7F8FD] rounded-full h-2.5">
                                    <div className="bg-[#4F46E5] h-2.5 rounded-full" style={{ width: `${plan.progress}%` }}></div>
                                </div>
                                <p className="font-inter font-normal text-sm leading-5 text-[#344055] mt-2 w-full flex justify-between items-center gap-2">
                                    <span className="font-inter font-normal text-[18px] leading-[24px] tracking-[-0.02em] text-[#4F46E5] align-bottom">
                                        {plan.currentAmount}
                                    </span> / <span className="font-inter font-normal text-[12px] leading-[18px] tracking-[0] text-[#344055] align-text-bottom">
                                        {plan.targetAmount}
                                    </span>
                                    <span className="font-inter font-normal text-[14px] leading-[20px] tracking-[0] text-[#5B6776] align-bottom ml-auto">
                                        {plan.progress}%
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Create New Wallet Button */}
            <button
                onClick={() => setShowCreateNewWalletForm(true)} // Show Create New Wallet Form
                className="flex items-center w-[1140px] h-[124px] my-8 justify-center gap-2 p-4 bg-[#F7F8FD] text-[#4F46E5] rounded-m font-inter font-semibold hover:bg-[#D3D7E8] transition duration-300 shadow-[0px_1px_2px_0px_#1018280F,0px_1px_3px_0px_#1018281A]">
                <Image
                    src="/icons/plus.png"
                    alt="Create a new wallet"
                    width={40}
                    height={40}
                />
                <span>Create New Wallet</span>
            </button>


            {/* Render Pop-Up Forms Conditionally */}
            {showSendPaymentForm && (
                <SendPaymentForm onClose={() => setShowSendPaymentForm(false)} />
            )}
            {showRequestPaymentForm && (
                <RequestPaymentForm onClose={() => setShowRequestPaymentForm(false)} />
            )}
            {showCreateNewWalletForm && 
                <CreateNewWalletForm onClose={() => setShowCreateNewWalletForm(false)} />
            }
        </div>
    );
}