import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    { href: "/my-wallet", label: "My Wallet", icon: "/icons/Icon.png", isActive: false },
    { href: "/my-card", label: "My Card", icon: "/icons/Icon.png", isActive: false },
    { href: "/finance-chart", label: "Finance Chart", icon: "/icons/Icon.png", isActive: false },
    { href: "/recent-transactions", label: "Recent Transactions", icon: "/icons/Icon.png", isActive: false, notification: 3 }
];

export default function SideBar() {
    return (
        <div className="w-[300px] max-w-[21%] h-screen bg-[#080325] text-white flex flex-col py-6 px-5">
            {/* Logo */}
            <div className="mb-6">
                <Image src="/images/Tracker.png" alt="Logo" width={161} height={54} />
            </div>

            {/* Navigation */}
            <nav className="flex-1">
                <ul className="space-y-3">
                    {menuItems.map((item) => (
                        <li key={item.href} className="flex items-center">
                            <Link
                                href={item.href}
                                className={`flex items-center text-sm font-semibold h-[72px] w-[264px] px-[20px] gap-[14px] leading-5 rounded-lg transition duration-300 
                                            ${item.isActive ? 'bg-[#080325]' : 'hover:bg-[#1B1735]'}`}
                            >
                                <Image src={item.icon} alt={`${item.label} Icon`} width={32} height={32} />
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

            {/* Footer */}
            <div className="my-auto space-y-6 px-3">
                {/* Settings */}
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-400">
                    <Image src="/icons/settings.png" alt="Settings" width={32} height={32} />
                    <span>Settings</span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 text-sm font-semibold pt-4">
                    <Image src="/images/profile.png" alt="User" width={32} height={32} className="rounded-full" />
                    <span>Adrian Tra</span>
                </div>
            </div>
        </div>
    );
}
