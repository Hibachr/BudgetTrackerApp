import ProfileBody from "@/components/profile/profile-body";
import SideBar from "@/components/sidebar/sidebar";

export default function Profile (){
    return (
        <div className="flex min-h-screen">
        <SideBar />
        <ProfileBody />
        </div>
    )
}