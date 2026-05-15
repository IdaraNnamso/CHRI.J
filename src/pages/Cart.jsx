import { useState } from "react";
import Navbar from "../components/Navbar";
import { FiTrash2, FiHeart, FiShoppingBag } from "react-icons/fi";

export default function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pink Dress",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1520975922284-7c3b0a5d1a5e",
    },

    {
      id: 2,
      name: "Cute Hoodie",
      price: 8000,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
  ]);

  function removeItem(id) {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-page">

      <Navbar />

      <section className="cart-container">

        {/* HEADER */}

        <div className="cart-header">

          <div className="cart-badge">
            <FiShoppingBag />
            <span>Luxury Shopping Bag</span>
          </div>

          <h1>Your Cart</h1>

          <p>
            Curated premium fashion pieces selected
            for elegance, confidence and timeless luxury.
          </p>

        </div>

        {/* EMPTY */}

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-icon">
              <FiShoppingBag />
            </div>

            <h2>Your cart feels lonely</h2>

            <p>
              Discover luxury fashion pieces and
              start building your collection.
            </p>

            <button>
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="cart-layout">

            {/* ITEMS */}

            <div className="cart-items">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="cart-card"
                >

                  {/* IMAGE */}

                  <div className="cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="image-overlay">
                      Luxury Collection
                    </div>

                  </div>

                  {/* INFO */}

                  <div className="cart-info">

                    <span className="item-brand">
                      Chris J Collection
                    </span>

                    <h2>{item.name}</h2>

                    <p className="cart-description">
                      Premium handcrafted fashion
                      piece designed for modern
                      elegance and comfort.
                    </p>

                    <div className="cart-meta">

                      <span>Premium Quality</span>

                      <span>Free Delivery</span>

                      <span>In Stock</span>

                    </div>

                    <div className="bottom-row">

                      <div className="price-box">
                        ₦{item.price}
                      </div>

                      <div className="cart-buttons">

                        <button className="save-btn">
                          <FiHeart />
                        </button>

                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          <FiTrash2 />
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* SUMMARY */}

            <div className="cart-summary">

              <div className="summary-card">

                <span className="summary-label">
                  Order Summary
                </span>

                <h2>₦{total}</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₦{total}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="summary-row">
                  <span>Tax</span>
                  <span>Calculated Later</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <strong>₦{total}</strong>
                </div>

                <button className="checkout-btn">
                  Secure Checkout
                </button>

                <p className="secure-text">
                  Encrypted luxury checkout experience.
                </p>

              </div>

            </div>

          </div>
        )}

      </section>

    </div>
  );
}