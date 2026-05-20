import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-wide">
              🚗 DriveEase
            </Link>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/available-cars" className="hover:text-blue-600 transition">Available Cars</Link>
            <Link href="/my-bookings" className="hover:text-blue-600 transition">My Bookings</Link>
          </div>
          
          {/* Action Button */}
          <div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md shadow-blue-200 dark:shadow-none">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;