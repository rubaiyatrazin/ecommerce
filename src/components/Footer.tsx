import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#004858] text-white py-6 mt-10w-full fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <h1>Shopping</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/cart" className="hover:text-yellow-500 transition">Cart</Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-yellow-500 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-xl hover:text-yellow-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-yellow-500 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6">
        <p className="text-sm">&copy; 2025 Shopping. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
