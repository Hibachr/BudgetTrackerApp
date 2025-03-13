import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

  export default function Pagination({ currentPage, totalPages, onPageChange, pageSize, setPageSize }) {
    return (
      <div className="flex items-center justify-start py-4 bg-[#F8FAFC]">
        {/* Page Size Dropdown */}
        <div className="flex items-center gap-2 px-3">
          <span className="text-gray-600 text-sm">Items per page:</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-gray-700"
          >
            {[1 ,2, 3, 4, 5 , 6 ].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
  
        {/* Pagination Controls */}
        <div className="flex items-center gap-2 text-gray-500 text-sm px-4">
          <span>{(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalPages * pageSize)} of {totalPages * pageSize}</span>
          
          <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="p-1 hover:text-gray-800 disabled:text-gray-300">
            <ChevronsLeft size={18} />
          </button>
          
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-1 hover:text-gray-800 disabled:text-gray-300">
            <ChevronLeft size={18} />
          </button>
  
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-1 hover:text-gray-800 disabled:text-gray-300">
            <ChevronRight size={18} />
          </button>
  
          <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="p-1 hover:text-gray-800 disabled:text-gray-300">
            <ChevronsRight size={18} />
          </button>
        </div>
      </div>
    );
  }
  