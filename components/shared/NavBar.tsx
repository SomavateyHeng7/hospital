'use client'; 

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { useRouter } from 'next/navigation';

const Navbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery); 
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/Logo_psp.png" alt="Hospital Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-2xl font-bold">Hospital Name</h1>
        </div>
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-72"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;