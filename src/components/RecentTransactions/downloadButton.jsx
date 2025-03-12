export default function DownloadButton() {
    const handleDownload = async () => {
      const response = await fetch('/api/download-excel'); 
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'transactions.xlsx'; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  
    return (
      <button 
        onClick={handleDownload} 
        className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
      >
        Download the Excel File
      </button>
    );
  }

  
  