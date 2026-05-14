import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="nav">
     <h2 className="logo">
 Beckand<span>call</span>
</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/profile">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
}