const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-white tracking-wide">DriveEase Car Rentals</h3>
        <p className="text-sm mt-2 text-gray-500">Your trusted partner for comfortable journeys.</p>
        <p className="text-sm mt-6 text-gray-600">
          © {new Date().getFullYear()} DriveEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;