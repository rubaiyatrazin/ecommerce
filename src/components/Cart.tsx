function Cart() {
  return (
    <div className="flex justify-center mt-10">
      <div className="border border-gray-300 rounded-lg p-5 w-80 text-center shadow-lg flex flex-col">
        <img 
          src="https://via.placeholder.com/200" 
          alt="Product" 
          className="w-full rounded-lg"
        />
        <h2 className="mt-3 text-lg font-semibold">Product Name</h2>
        <p className="text-green-600 font-bold">$20.00</p>

        {/* Quantity Input */}
        <div className="flex items-center justify-center mt-3">
          <label className="mr-2 font-medium">Qty:</label>
          <input 
            type="number" 
            min="1" 
            defaultValue="1" 
            className="w-16 p-1 border rounded text-center"
          />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Update
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>

        {/* Total Price and Back to Home Section */}
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Total Price</h3>
          <p className="text-green-600 font-bold">$20.00</p>

          <button 
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => window.location.href = '/'} // This will redirect to the home page
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
