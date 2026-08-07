import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  const openWhatsApp = () => {
    const phoneNumber = "2349162369434";

    const message =
      "Hello Beck & Call 👋🏽\n\nI'm interested in your products and I'd like to make an enquiry.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Beckand<span>call</span>
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link
          to="/cart"
          className="cart-link"
          aria-label="Shopping cart"
        >
          <FaShoppingCart />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </Link>

        <button
          type="button"
          className="whatsapp-nav-btn"
          onClick={openWhatsApp}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp />
        </button>

      </div>
    </nav>
  );
}