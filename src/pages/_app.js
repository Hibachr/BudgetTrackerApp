
// import "@/styles/globals.css";
// import { Inter } from 'next/font/google';

// import Layout from "../components/layout/Layout"

// const inter = Inter({ subsets: ['latin'] });
// export default function App({ Component, pageProps }) {
//   return (
//       <>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
       
//       </>
//       // return <Component {...pageProps} className={inter.className} />;
//   )
    
        
        
//         // console.log(Card, SideBar, TransactionsTable),
//         // <RecentTransactions/>
        
    
        

 
  
// }

import "@/styles/globals.css";
import { Inter } from 'next/font/google';
import Layout from "../components/layout/Layout";
import SideBar from "@/components/Sidebar/sidebar";

const inter = Inter({ subsets: ['latin'] });

console.log(inter);
export default function App({ Component, pageProps }) {
    return (
        <div className={inter.className}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>

             
                
              
           

        </div>

       
    );

   
    
}