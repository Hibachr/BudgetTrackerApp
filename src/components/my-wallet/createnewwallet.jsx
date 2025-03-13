import { useState, useEffect } from 'react';

export default function CreateNewWalletForm({ onClose }) {
    const [walletName, setWalletName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [icon, setIcon] = useState(null); // State for the selected icon
    const [iconPreview, setIconPreview] = useState(null); // State for the icon preview

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!walletName || !targetAmount) {
            alert("Wallet name and target amount are required.");
            return;
        }
        const walletData = {
            walletName,
            targetAmount,
            description,
            startDate,
            endDate,
            icon: iconPreview, // Include the icon in the wallet data
        };
        alert(`Creating new wallet: ${JSON.stringify(walletData, null, 2)}`);
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
            <div className="bg-white p-6 rounded-lg w-[400px] shadow-[0px_1px_2px_0px_#1018280F,0px_2px_4px_0px_#1018281A]">
                <h2 className="font-inter font-bold text-xl mb-4 text-[#121212]">Create New Wallet</h2>
                <form onSubmit={handleSubmit}>
                    {/* Wallet Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Wallet Name</label>
                        <input
                            type="text"
                            value={walletName}
                            onChange={(e) => setWalletName(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter wallet name"
                            required
                        />
                    </div>

                    {/* Target Amount */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Target Amount</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-[#5B6776]">$</span>
                            </div>
                            <input
                                type="number"
                                value={targetAmount}
                                onChange={(e) => setTargetAmount(e.target.value)}
                                className="block w-full pl-7 pr-12 p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>

                    {/* Description (Optional) */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Description (Optional)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                            placeholder="Enter a description"
                            rows="3"
                        />
                    </div>

                    {/* Start Date (Optional) */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Start Date (Optional)</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                        />
                    </div>

                    {/* End Date (Optional) */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">End Date (Optional)</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E2E8F0] rounded-md focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                        />
                    </div>

                    {/* Icon Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#5B6776]">Wallet Icon</label>
                        <div className="mt-1 flex items-center gap-4">
                            {/* Emoji Picker */}
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('💰')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    💰
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('✈️')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    ✈️
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleEmojiSelect('🏠')}
                                    className="p-2 bg-[#F7F8FD] rounded-md hover:bg-[#E2E8F0]"
                                >
                                    🏠
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
                                        <img src={iconPreview} alt="Wallet Icon" className="w-10 h-10 rounded-full" />
                                    ) : (
                                        <span className="text-2xl">{iconPreview}</span>
                                    )}
                                </div>
                            </div>
                        )}
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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}