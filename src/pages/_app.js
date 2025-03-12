
import "@/styles/globals.css";
import { Inter } from 'next/font/google';
// import Layout from "@/components/Layout/Layout";
import Layout from "../components/Layout/Layout.jsx"
import Card from "@/components/card.jsx";
import SideBar from "@/components/sidebar/sidebar.jsx";


const inter = Inter({ subsets: ['latin'] });
export default function App({ Component, pageProps }) {
  return (
    
        <Layout>
          <Component {...pageProps} />
        </Layout>
   
      
 
  );
}