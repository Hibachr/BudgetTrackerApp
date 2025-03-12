import { useState } from 'react';
import Image from 'next/image';
import nextConfig from '../../../next.config.mjs';
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className="flex ">
        <div className='px-3'>
            <input 
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleChange}
                className="w-xs px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

        </div>
     
        <div >
            
                <Image src="/icons/Iconbutton.png" alt="Logo" width={45} height={40} />
            
        </div>
    </div>
  );
}
