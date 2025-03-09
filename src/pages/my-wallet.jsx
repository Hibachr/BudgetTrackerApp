import SideBar from "@/components/sidebar/sidebar";
import MyWalletBody from "../components/my-wallet/mywallet-body";

export default function MyWallet() {
  return (
    <div className="flex min-h-screen">
    <SideBar />
    <MyWalletBody />
    </div>
  );
}
