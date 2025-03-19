import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div>
      <h1>Shopping</h1>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  )
}

export default Navbar
