import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  FiTrash2,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // =============================
  // TOTAL
  // =============================

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
      Number(item.quantity),
    0
  );

  // =============================
  // FORMAT PRICE
  // =============================

  const formatPrice = (price) => {
    return Number(price).toLocaleString(
      "en-NG"
    );
  };

  // =============================
  // WHATSAPP CHECKOUT
  // =============================

  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const phoneNumber = "2349162369434";

    let message = `Hello Beck & Call 👋🏽

I would like to make a purchase.

🛍️ *ORDER DETAILS*

`;

    cart.forEach((item, index) => {
      const itemTotal =
        Number(item.price) *
        Number(item.quantity);

      message += `${index + 1}. *${item.name}*
Quantity: ${item.quantity}
Price: ₦${formatPrice(item.price)}
Subtotal: ₦${formatPrice(itemTotal)}

`;
    });

    message += `-------------------------
*TOTAL: ₦${formatPrice(total)}*
-------------------------

Please let me know how I can complete my purchase.

Thank you.`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <Navbar />

      <section className="cart-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="cart-header">

          <div className="cart-badge">
            <FiShoppingBag />

            <span>
              Luxury Shopping Bag
            </span>
          </div>

          <h1>Your Cart</h1>

          <p>
            Curated premium fashion pieces
            selected for elegance, confidence
            and timeless luxury.
          </p>

        </div>

        {/* =========================
            EMPTY CART
        ========================= */}

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-icon">
              <FiShoppingBag />
            </div>

            <h2>
              Your cart feels lonely
            </h2>

            <p>
              Discover luxury fashion pieces
              and start building your
              collection.
            </p>

            <button
              onClick={() =>
                navigate("/")
              }
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          /* =========================
              CART LAYOUT
          ========================= */

          <div className="cart-layout">

            {/* CART ITEMS */}

            <div className="cart-items">

              {cart.map((item) => (

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

                  {/* INFORMATION */}

                  <div className="cart-info">

                    <span className="item-brand">
                      Beck & Call Collection
                    </span>

                    <h2>
                      {item.name}
                    </h2>

                    <p className="cart-description">
                      {item.description ||
                        "Premium luxury fashion crafted for modern elegance, comfort and confidence."}
                    </p>

                    <div className="cart-meta">

                      <span>
                        Premium Quality
                      </span>

                      <span>
                        Luxury Collection
                      </span>

                      <span>
                        In Stock
                      </span>

                    </div>

                    {/* BOTTOM */}

                    <div className="bottom-row">

                      {/* PRICE */}

                      <div className="price-box">
                        ₦
                        {formatPrice(
                          item.price
                        )}
                      </div>

                      {/* QUANTITY */}

                      <div className="quantity-box">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* ACTIONS */}

                      <div className="cart-buttons">

                        <button
                          type="button"
                          className="save-btn"
                          title="Save product"
                        >
                          <FiHeart />
                        </button>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
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

            {/* =========================
                ORDER SUMMARY
            ========================= */}

            <div className="cart-summary">

              <div className="summary-card">

                <span className="summary-label">
                  Order Summary
                </span>

                <h2>
                  ₦{formatPrice(total)}
                </h2>

                <div className="summary-row">

                  <span>
                    Items
                  </span>

                  <span>
                    {cart.reduce(
                      (sum, item) =>
                        sum +
                        item.quantity,
                      0
                    )}
                  </span>

                </div>

                <div className="summary-row">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₦
                    {formatPrice(
                      total
                    )}
                  </span>

                </div>

                <div className="summary-row">

                  <span>
                    Shipping
                  </span>

                  <span>
                    Discuss on WhatsApp
                  </span>

                </div>

                <div className="summary-divider" />

                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₦
                    {formatPrice(
                      total
                    )}
                  </strong>

                </div>

                <button
                  type="button"
                  className="checkout-btn"
                  onClick={
                    checkoutWhatsApp
                  }
                >
                  Checkout on WhatsApp
                </button>

                <p className="secure-text">
                  You will be redirected to
                  WhatsApp to complete your
                  purchase.
                </p>

              </div>

            </div>

          </div>

        )}

      </section>
    </div>
  );
}