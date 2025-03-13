import DownloadButton from "@/components/RecentTransactions/downloadButton";
import Pagination from "@/components/RecentTransactions/paginationControls";
import TransactionsTable from "@/components/RecentTransactions/tableComponent";
import { useState } from 'react';
import { useEffect } from'react';




export default function RecentTransactions() {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [maxItems, setMaxItems] = useState(10);
    const totalItems = 20; 
    useEffect(() => {
        const calculateMaxItems = () => {
          const rowHeight = 50; 
          const tableHeight = window.innerHeight * 0.6; // 60% of viewport height
          const maxVisibleRows = Math.floor(tableHeight / rowHeight);
          setMaxItems(maxVisibleRows);
        };
    
        calculateMaxItems();
        window.addEventListener("resize", calculateMaxItems);
        return () => window.removeEventListener("resize", calculateMaxItems);
      }, []);
    
     
    const totalPages = Math.ceil(totalItems / pageSize);
    
    
    return (
        <div className="flex  flex-col gap-6 pl-70">
           
          

            <TransactionsTable currentPage={currentPage} pageSize={pageSize} />

            <DownloadButton/>
            <Pagination currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}/>
            
            
         
        </div>
    )
}

