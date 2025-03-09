// import { useState, useEffect } from 'react';

// export default function SendPaymentForm({ onClose }) {
//     const [amount, setAmount] = useState('');
//     const [recipient, setRecipient] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Sending $${amount} to ${recipient}`);
//         onClose(); // Close the form after submission
//     };

//     // Close the modal when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (e.target.classList.contains('modal-overlay')) {
//                 onClose();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [onClose]);

//     return (
//         <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-opacity-10 backdrop-blur-xs">
//             <div className="bg-white p-6 rounded-lg w-[400px]">
//                 <h2 className="font-inter font-bold text-xl mb-4">Send Payment</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Amount</label>
//                         <input
//                             type="number"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Recipient</label>
//                         <input
//                             type="text"
//                             value={recipient}
//                             onChange={(e) => setRecipient(e.target.value)}
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                             required
//                         />
//                     </div>
//                     <div className="flex justify-end gap-2">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="bg-[#4F46E5] text-white px-4 py-2 rounded-md hover:bg-[#4338CA]"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }


import { useState, useEffect } from 'react';

export default function SendPaymentForm({ onClose }) {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Validate and format the amount input
    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, ''); // Allow only digits and a dot
        const decimalCount = (value.match(/\./g) || []).length;
        if (decimalCount <= 1 && !isNaN(value)) {
            setAmount(value);
        }
    };

    // Validate and format the card number input
    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Add spaces every 4 digits
        setCardNumber(formattedValue.trim());
    };

    // Validate and format the expiry date input
    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length <= 4) {
            const formattedValue = value.replace(/(\d{2})(\d{0,2})/, '$1/$2'); // Add slash after 2 digits
            setExpiryDate(formattedValue);
        }
    };

    // Validate the CVV input
    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length <= 4) {
            setCvv(value);
        }
    };

    // Validate the recipient input
    const handleRecipientChange = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z0-9@.\-_ ]/g, ''); // Allow alphanumeric, spaces, and email symbols
        setRecipient(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount <= 0) {
            alert("Amount must be greater than 0.");
            return;
        }
        if (!cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all card details.");
            return;
        }
        if (cardNumber.replace(/\D/g, '').length !== 16) {
            alert("Card number must be 16 digits.");
            return;
        }
        if (expiryDate.length !== 5 || !expiryDate.includes('/')) {
            alert("Expiry date must be in MM/YY format.");
            return;
        }
        if (cvv.length < 3 || cvv.length > 4) {
            alert("CVV must be 3 or 4 digits.");
            return;
        }
        alert(`Sending $${amount} to ${recipient} using card ending in ${cardNumber.slice(-4)}`);
        onClose(); // Close the form after submission
    };

    // Close the modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay backdrop-blur-xs">
            <div className="bg-white p-6 rounded-lg w-[400px] relative shadow-[0px_1px_2px_0px_#1018280F,0px_2px_4px_0px_#1018281A]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ❌
                </button>

                <h2 className="font-inter font-bold text-xl mb-4">Send Payment</h2>
                <form onSubmit={handleSubmit}>
                    {/* Amount Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500">$</span>
                            </div>
                            <input
                                type="text"
                                value={amount}
                                onChange={handleAmountChange}
                                className="block w-full pl-7 pr-12 p-2 border border-gray-300 rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>

                    {/* Recipient Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Recipient</label>
                        <input
                            type="text"
                            value={recipient}
                            onChange={handleRecipientChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter recipient's name or email"
                            required
                        />
                    </div>

                    {/* Card Number Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19} // 16 digits + 3 spaces
                            required
                        />
                    </div>

                    {/* Expiry Date and CVV Fields */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                                placeholder="MM/YY"
                                maxLength={5} // MM/YY
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">CVV</label>
                            <input
                                type="text"
                                value={cvv}
                                onChange={handleCvvChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                                placeholder="123"
                                maxLength={4} // 3 or 4 digits
                                required
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#4F46E5] text-white px-4 py-2 rounded-md hover:bg-[#4338CA]"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}