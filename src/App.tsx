import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
     <Router>
      <Routes>
       <Route path="/"  element={<ProductList/>}/>
       <Route path="/cart"  element={<Cart/>}/>
       
      </Routes>
     </Router>
      
    </div>
  )
}

export default App
