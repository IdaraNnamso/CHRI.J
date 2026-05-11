import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pink Dress",
      price: 12000,
      image: "https://images.unsplash.com/photo-1520975922284-7c3b0a5d1a5e",
    },
    {
      id: 2,
      name: "Cute Hoodie",
      price: 8000,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
  ]);

  function removeItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h2>Shopping Bag 💕</h2>

        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty 🥺</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-card">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>₦{item.price}</p>

                    <button onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: ₦{total}</h3>
              <button>Checkout 💖</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}