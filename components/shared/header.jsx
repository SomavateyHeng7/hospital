'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; 

const Header = () => {
  const router = useRouter(); 

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hospital Logo and Name */}
        {/* <div className="flex items-center">
          <img src="/images/logo.png" alt="Hospital Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-2xl font-bold">Hospital Name</h1>
        </div> */}

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Button variant="ghost" className="text-white">
            Home
          </Button>
          <Button variant="ghost" className="text-white">
            Services
          </Button>
          <Button variant="ghost" className="text-white">
            Departments
          </Button>
          <Button variant="ghost" className="text-white">
            Doctors
          </Button>
          <Button variant="ghost" className="text-white">
            Contact Us
          </Button>
        </nav>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <Button variant="solid" className="bg-white text-blue-600">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
