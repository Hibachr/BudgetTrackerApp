
import SideBar from "@/components/sidebar/sidebar";
import MyWalletBody from "../components/my-wallet/mywallet-body";
import NavBar from "@/components/navBar/navBar";

export default function MyWallet() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
        <div className="flex-1 flex flex-col md:ml-[300px]">
          {/* Navbar (Only on mobile) */}
            <NavBar />

          {/* Profile Content */}
            <div className="mt-[50px] md:mt-0 p-5">
                    <MyWalletBody />
            </div>
        </div>
    </div>
  );
}




