
  
import SideBar from "../Sidebar/sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <SideBar />

           
            <main className="flex-1 p-4"> {children}</main>
        </div>
    );
}
  