import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const menuItems = [
    { href: "/my-wallet", label: "My Wallet", icon: "/icons/Icon.png" },
    { href: "/my-card", label: "My Card", icon: "/icons/Icon.png" },
    { href: "/financeChart", label: "Finance Chart", icon: "/icons/Icon.png" }, 
    { href: "/recent-transactions", label: "Recent Transactions", icon: "/icons/Icon.png", notification: 3 }
];

export default function SideBar() {
    const router = useRouter();

    return (
        <div className="hidden md:flex md:w-[300px] md:h-screen md:fixed md:left-0 top-0 bg-[#080325] text-white flex-col py-6 px-5">
            {/* Logo */}
            <div className="mb-6 flex items-center justify-between">
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
                                            ${router.pathname === item.href ? 'bg-[#1B1735]' : 'hover:bg-[#1B1735]'}`}
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
            <div className="mb-[40%] mt-20 space-y-6 px-3">
                
                {/* LogOut */}
                <Link href={"/login"}>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#C9C9C9] pb-6">
                    <Image src="/icons/logout.png" alt="Settings" width={32} height={32} />
                    <span>Log Out</span>
                </div>
                </Link>
                {/* Settings */}
                <div className="flex items-center gap-3 text-sm font-semibold text-[#C9C9C9] border-b border-[#C9C9C9] pb-6">
                    <Image src="/icons/settings.png" alt="Settings" width={32} height={32} />
                    <span>Settings</span>
                </div>
                {/* Profile */}
                <Link href="/profile">
                    <div className="flex items-center gap-3 text-sm text-[#C9C9C9] font-semibold pt-2 cursor-pointer">
                        <Image src="/images/profile.png" alt="User" width={32} height={32} className="rounded-full" />
                        <span>Adrian Tra</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
