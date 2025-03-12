export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div className="flex items-center justify-between mt-4">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          ⬅️ Previous
        </button>
  
        {/* Page Numbers */}
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
  
        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          Next ➡️
        </button>
      </div>
    );
  }
  