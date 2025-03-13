
  export default function DownloadButton() {
    const handleDownload = () => {
      const fileUrl = '/transactions.xlsx'; // Direct path
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'transactions.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  
    return (
      <div className="pl-6">
            <button 
              onClick={handleDownload} 
              className="bg-[#4F46E5] h-[55px] w-3xs text-white px-4 py-2  font-medium hover:bg-[#6360f5] transition font-inter font-semibold text-[18px] leading-[24px] tracking-[-0.02em] rounded-2xl pl-7"
            >
              Download the Excel File
            </button>
      </div>
      
    );
  }
  