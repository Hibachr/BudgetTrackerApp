import NavBar from "@/components/navBar/navBar";
import ProfileBody from "@/components/profile/profile-body";
import SideBar from "@/components/sidebar/sidebar";

export default function Profile() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:ml-[300px]">
                {/* Navbar (Only on mobile) */}
                <NavBar />

                {/* Profile Content*/}
                <div className="mt-[50px] md:mt-0 p-5">
                    <ProfileBody />
                </div>
            </div>
        </div>
    );
}
