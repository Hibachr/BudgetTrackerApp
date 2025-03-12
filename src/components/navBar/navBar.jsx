import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const menuItems = [
    { href: "/my-wallet", label: "My Wallet", icon: "/icons/Icon.png" },
    { href: "/my-card", label: "My Card", icon: "/icons/Icon.png" },
    { href: "/finance-chart", label: "Finance Chart", icon: "/icons/Icon.png" },
    { href: "/recent-transactions", label: "Recent Transactions", icon: "/icons/Icon.png", notification: 3 }
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            {/* Mobile Navbar */}
            <div className="fixed top-0 left-0 w-full h-[50px] bg-white flex justify-between px-5 border-b-2 border-gray-200 md:hidden z-50">
                {/* Logo */}
                <div className="self-center">
                    <Image src="/images/TrackerBlue.png" alt="LogoBlue" width={81} height={23} />
                </div>

                {/* Menu Icon */}
                <div className="self-center cursor-pointer" onClick={() => setIsOpen(true)}>
                    <Image src="/icons/menu-mobile.png" alt="menuMobile" width={20} height={20} />
                </div>
            </div>

            {/* Mobile Menu (Off-Canvas) */}
            <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#080325] text-white flex flex-col py-6 px-5 transition-transform duration-300 ease-in-out z-50 
                            ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Close Button */}
                <button className="text-white text-2xl mb-6 self-end" onClick={() => setIsOpen(false)}>×</button>

                {/* Logo */}
                <div className="mb-6 flex items-center justify-between">
                    <Image src="/images/Tracker.png" alt="Logo" width={161} height={54} />
                </div>

                {/* Menu Items */}
                <nav className="flex-1">
                    <ul className="space-y-3">
                        {menuItems.map((item) => (
                            <li key={item.href} className="flex items-center">
                                <Link
                                    href={item.href}
                                    className={`flex items-center text-sm font-semibold h-[50px] w-full px-[20px] gap-[14px] leading-5 rounded-lg transition duration-300 
                                                ${router.pathname === item.href ? 'bg-[#1B1735]' : 'hover:bg-[#1B1735]'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Image src={item.icon} alt={`${item.label} Icon`} width={24} height={24} />
                                    <span className="ml-4 flex-1">{item.label}</span>

                                    {/* Notification Badge */}
                                    {item.notification && (
                                        <span className="bg-red-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                                            {item.notification}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer Section */}
                <div className="mb-[40%] mt-8 space-y-6 px-3">
                    {/* Settings */}
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#C9C9C9] border-b border-[#C9C9C9] pb-4">
                        <Image src="/icons/settings.png" alt="Settings" width={24} height={24} />
                        <span>Settings</span>
                    </div>

                    {/* Profile */}
                    <Link href="/profile" className="flex items-center gap-3 text-sm text-[#C9C9C9] font-semibold pt-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <Image src="/images/profile.png" alt="User" width={32} height={32} className="rounded-full" />
                        <span>Adrian Tra</span>
                    </Link>
                </div>
            </div>

            {/* Background Overlay (Closes Menu) */}
            {isOpen && <div className="fixed inset-0 z-40 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}


