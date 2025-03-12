import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <div className="md:hidden w-screen h-[50px] bg-white flex flex-row justify-between px-5 border-b-2 border-gray-200">
            {/* Logo */}
            <div className="self-center">
                <Image src="/images/TrackerBlue.png" alt="LogoBlue" width={81} height={23} />
            </div>

            <div className="self-center">
                <Image src="/icons/menu-mobile.png" alt="menuMobile" width={20} height={20} />
            </div>

            {/* Navigation */}
            

        </div>
    );
}
