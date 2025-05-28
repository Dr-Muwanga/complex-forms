import { Calendar, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
                <Link
                to="/"
                className="text-xl font-bold text-gray-800 hover:text-blue-600"
                >
                    <img src="https://img.icons8.com/ios-filled/100/4a90e2/microscope.png" alt="Microscope" width={64} className="mx-auto" />
                </Link>
            </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold"
            >
              <Home />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/create/case-report"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold"
            >
              <Calendar />
              <span className="hidden sm:inline">Report</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
