import { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 p-0 m-0 bg-[#004858] text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center mt-2">
        <h1 className="text-2xl font-bold">Shopping</h1>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/cart" className="hover:text-yellow-500 transition">Cart</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-xl focus:outline-none" onClick={toggleMenu}>
            <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i> {/* Toggle between bars and cross */}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden flex flex-col items-center mt-4 space-y-4 ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
        <Link to="/cart" className="hover:text-yellow-500 transition">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
