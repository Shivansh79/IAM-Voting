// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-gray-800">Logo</div>
            </Link>
          </div>

          
          <div className="flex space-x-4 items-center">
            <Link href="/">
              <div className="text-gray-800 hover:text-blue-500 transition duration-300">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="text-gray-800 hover:text-blue-500 transition duration-300">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className="text-gray-800 hover:text-blue-500 transition duration-300">
                Services
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-800 hover:text-blue-500 transition duration-300">
                Contact
              </div>
            </Link>
          </div>

       
          <div className="flex items-center">
            <div className="relative">
              <button className="focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/path-to-profile-pic.jpg"
                  alt="Profile"
                />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link href="/profile">
                  <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</div>
                </Link>
                <Link href="../Login/index.tsx">
                  <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</div>
                </Link>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
