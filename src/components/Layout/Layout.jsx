// import SideBar from "../sidebar/sidebar";
import SideBar from "../sidebar/sidebar";


export default function Layout ({ children }) {
    return (
      <div className="flex flex-row " >
        <SideBar/>
        <main className="flex-2">
            {children}
        </main>
        
      </div>
    );
  };
  
  