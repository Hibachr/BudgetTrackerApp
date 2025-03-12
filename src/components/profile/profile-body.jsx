import { useState } from 'react';

export default function ProfileBody() {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState("Adrian Tra");
    const [email, setEmail] = useState("adriantra@gmail.com");
    const [username, setUsername] = useState("Adrian Tra");

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFullName("Adrian Tra");
        setEmail("adriantra@gmail.com");
        setUsername("Adrian Tra");
    };

    return (
        <div className="flex-1 bg-[#FFFFFF] h-full">           
         {/* Header Section */}
        <div className="flex justify-between mt-6 md:mt-auto py-6 md:py-8 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="font-inter font-bold text-3xl leading-10 text-[#121212]">My Profile</h1>
            <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="font-inter font-semibold px-4 bg-[#F7F8FD] text-sm text-[#4F46E5] hover:text-[#4338CA] transition duration-300"
            >
                    Edit profile
            </button>
            </div>
            {/* Profile Picture and Username Section */}
            <div className="flex items-center m-[36px] gap-8">
                <img
                    src="images/profile.png"
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full object-cover"
                />
                <h2 className="font-inter font-semibold text-lg md:text-xl text-[#121212]">
                    {username}
                </h2>
            </div>



            {/* Full Name and Email Section */}
            <div className=" m-[36px] flex flex-col md:flex-row gap-6">
                {/* Full Name Section */}
                <div className="flex-1">
                    <h2 className="font-inter font-semibold text-lg md:text-xl text-[#121212] mb-2">Full Name</h2>
                    {isEditing ? (
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full p-2 border border-[#E2E8F0] rounded-md focus:border-[#4F46E5] focus:outline-none"
                        />
                    ) : (
                        <p className="font-inter text-[#344055] p-2 border border-transparent rounded-md">
                            {fullName}
                        </p>
                    )}
                </div>

                {/* Email Section */}
                <div className="flex-1">
                    <h2 className="font-inter font-semibold text-lg md:text-xl text-[#121212] mb-2">Email address</h2>
                    {isEditing ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-[#E2E8F0] rounded-md focus:border-[#4F46E5] focus:outline-none"
                        />
                    ) : (
                        <p className="font-inter text-[#344055] p-2 border border-transparent rounded-md">
                            {email}
                        </p>
                    )}
                </div>
            </div>

            {/* Username Section */}
            <div className="m-[36px]">
                <h2 className="font-inter font-semibold text-lg md:text-xl text-[#121212] mb-2">Username</h2>
                {isEditing ? (
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-[#E2E8F0] rounded-md focus:border-[#4F46E5] focus:outline-none"
                    />
                ) : (
                    <p className="font-inter text-[#344055] p-2 border border-transparent rounded-md">
                        {username}
                    </p>
                )}
            </div>

            {/* Save and Cancel Buttons */}
            {isEditing && (
                <div className="flex gap-4 m-[36px]">
                    <button
                        onClick={handleSave}
                        className="font-inter font-semibold text-sm text-white bg-[#4F46E5] px-4 py-2 rounded-md hover:bg-[#4338CA] transition duration-300"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancel}
                        className="font-inter font-semibold text-sm text-[#4F46E5] bg-white border border-[#4F46E5] px-4 py-2 rounded-md hover:bg-[#F7F8FD] transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}