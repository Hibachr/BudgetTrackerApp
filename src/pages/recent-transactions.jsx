import DownloadButton from "@/components/RecentTransactions/downloadButton";
import TransactionsTable from "@/components/RecentTransactions/tableComponent";
import { useState } from 'react';



export default function recentTransactions () {
    
    return (
        <div>
           
          

            <TransactionsTable/>
            <DownloadButton/>
            
         
        </div>
    )
}

