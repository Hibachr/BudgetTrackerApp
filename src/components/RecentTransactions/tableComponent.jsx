import React, { useState } from "react";
import SearchBar from "./searchBar";
import Pagination from "./paginationControls";

export default function TransactionsTable({ currentPage, pageSize }) {
  const transactions = [
    { id: "962296152", name: "Sherman Blankenship", date: "08 Jan, 2022", status: "Pending", amount: "$217.90" },
    { id: "829892537", name: "Claudio Barrera", date: "06 Jan, 2022", status: "Completed", amount: "$329.90" },
    { id: "741560657", name: "Clifton Daniel", date: "03 Jan, 2022", status: "Completed", amount: "-$549.90" },
    { id: "529040347", name: "Curt Boyer", date: "01 Jan, 2022", status: "Completed", amount: "-$238.90" },
    { id: "398078341", name: "Jeff Proctor", date: "31 Dec, 2021", status: "Completed", amount: "-$283.90" },
    { id: "197401837", name: "Rodger Fritz", date: "24 Dec, 2021", status: "Completed", amount: "$237.90" },
    { id: "123456789", name: "New User", date: "10 Mar, 2023", status: "Pending", amount: "$150.00" },
    { id: "987654321", name: "Test User", date: "12 Apr, 2023", status: "Completed", amount: "-$99.90" },
    { id: "654987321", name: "John Doe", date: "15 May, 2023", status: "Completed", amount: "$500.00" },
    { id: "321654987", name: "Jane Smith", date: "20 Jun, 2023", status: "Pending", amount: "$200.00" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.includes(searchQuery) ||
      transaction.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredTransactions.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Search Bar */}
      <div className="flex justify-between mb-4 pb-6 pt-6">
        <p className="font-inter font-bold text-2xl leading-[40px] tracking-normal text-[#121212]">
          Recent Transactions
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/*  Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-4">Transaction ID</th>
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((transaction) => (
              <tr key={transaction.id} className="text-gray-800 hover:bg-gray-50 transition">
                <td className="px-4 py-6 text-center text-[#344055]">{transaction.id}</td>
                <td className="px-4 py-6 text-center text-[#344055]">{transaction.name}</td>
                <td className="px-4 py-6 text-center text-[#344055]">{transaction.date}</td>
                <td className="px-4 py-6 text-center text-[#344055]">
                  <span className="px-2 py-1">{transaction.status}</span>
                </td>
                <td
                  className={`px-4 py-6 font-medium text-center ${
                    transaction.amount.startsWith("-") ? "text-[#D1493D]" : "text-[#2B825C]"
                  }`}
                >
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
}





