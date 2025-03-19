import Footer from "./Footer";
import Navbar from "./Navbar";

function ProductList() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="border border-gray-300 rounded-lg p-5 w-64 text-center shadow-lg">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Product" 
            className="w-full rounded-lg"
          />
          <h2 className="mt-3 text-lg font-semibold">Product Name</h2>
          <p className="text-green-600 font-bold">$20.00</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default ProductList;
