

import { useState, useEffect } from 'react';

export default function CreatePrimaryCardForm({ onClose }) {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState('');
    const [icon, setIcon] = useState(null);
    const [iconPreview, setIconPreview] = useState(null);
    const [isPrimary, setIsPrimary] = useState(false);

    // Handle file upload for icon
    const handleIconUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIcon(file);
                setIconPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle emoji selection
    const handleEmojiSelect = (emoji) => {
        setIcon(emoji);
        setIconPreview(emoji);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cardName || !cardNumber || !expiryDate || !cvv || !cardType) {
            alert("All fields are required.");
            return;
        }
        const cardData = {
            cardName,
            cardNumber,
            expiryDate,
            cvv,
            cardType,
            icon: iconPreview,
            isPrimary,
        };
        alert(`Creating new primary card: ${JSON.stringify(cardData, null, 2)}`);
        onClose(); 
    };

    
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
        <div className="fixed inset-0 flex items-center justify-center modal-overlay backdrop-blur">
            <div className="bg-white p-6 rounded-lg w-full max-w-[400px] mx-4">
                <h2 className="font-inter font-bold text-xl mb-4 text-[#121212]">Add Primary Card</h2>
                <form onSubmit={handleSubmit}>
                    {/* Card Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Card Name</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter card name"
                            required
                        />
                    </div>

                    {/* Card Number */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter card number"
                            required
                        />
                    </div>

                    {/* Expiry Date */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Expiry Date</label>
                        <input
                            type="month"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            required
                        />
                    </div>

                    {/* CVV */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">CVV</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter CVV"
                            required
                        />
                    </div>

                    {/* Card Type */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Card Type</label>
                        <select
                            value={cardType}
                            onChange={(e) => setCardType(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            required
                        >
                            <option value="">Select card type</option>
                            <option value="Visa">Visa</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="American Express">American Express</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Icon Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Card Icon</label>
                        <div className="mt-1 flex items-center gap-4">
                            {/* Emoji Picker */}
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('💳')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    💳
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('🏦')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    🏦
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('💵')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    💵
                                </button>
                            </div>

                            {/* File Upload */}
                            <label className="flex items-center gap-2 p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0] cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleIconUpload}
                                    className="hidden"
                                />
                                <span className="text-sm text-[#5B6776]">Upload Icon</span>
                            </label>
                        </div>

                        {/* Icon Preview */}
                        {iconPreview && (
                            <div className="mt-2">
                                <p className="text-sm text-[#5B6776]">Selected Icon:</p>
                                <div className="mt-1">
                                    {typeof iconPreview === 'string' && iconPreview.startsWith('data:image') ? (
                                        <img src={iconPreview} alt="Card Icon" className="w-10 h-10 rounded-full" />
                                    ) : (
                                        <span className="text-2xl">{iconPreview}</span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Primary Card Toggle */}
                    <div className="mb-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={isPrimary}
                                onChange={(e) => setIsPrimary(e.target.checked)}
                                className="w-4 h-4 rounded border border-[#E2E8F0] focus:ring-[#4F46E5]"
                            />
                            <span className="text-sm text-[#5B6776]">Set as Primary Card</span>
                        </label>
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
                            Add Primary Card
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



