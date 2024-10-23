'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; // Import specific user-circle icon

const Navbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    router.push('/authentication/login'); // Navigate to the login page
  };

  const handleSignup = () => {
    router.push('/authentication/signup'); // Navigate to the signup page
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
        {/* Profile Icon */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="h-10 w-10 text-gray-500 cursor-pointer" // Styling similar to the previous profile image
            onClick={toggleDropdown}
          />
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              <button
                onClick={handleLogin}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Login
              </button>
              <button
                onClick={handleSignup}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
