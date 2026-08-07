import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";
import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const { addToCart } = useCart();

  // =========================
  // FETCH PRODUCTS
  // =========================

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      console.log("STORE PRODUCTS:", data);

      if (Array.isArray(data)) {
        setProducts(data);
      } else if (Array.isArray(data?.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error(
        "HOME PRODUCT ERROR:",
        error
      );

      setError(
        "Unable to load products right now."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />

      {/* =====================
          HERO
      ====================== */}

      <section className="hero">
        <h1>Luxury Fashion Redefined</h1>

        <p>
          Discover premium clothing pieces crafted
          for elegance, confidence and timeless style.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("collection")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          Explore Collection
        </button>
      </section>

      {/* =====================
          TITLE
      ====================== */}

      <section
        className="section-title"
        id="collection"
      >
        <h2>Latest Collection</h2>

        <p>
          Handpicked luxury fashion pieces for
          modern style
        </p>
      </section>

      {/* =====================
          PRODUCTS
      ====================== */}

      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          Loading collection...
        </div>
      ) : error ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <p>{error}</p>

          <button
            onClick={fetchProducts}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
            }}
          >
            Try Again
          </button>
        </div>
      ) : products.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          No products available yet.
        </div>
      ) : (
        <section className="products">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              onView={() =>
                setSelectedProduct(item)
              }
            />
          ))}
        </section>
      )}

      {/* =====================
          POPUP
      ====================== */}

      {selectedProduct && (
        <div
          className="popup-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className="popup-card"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div className="popup-info">
              <span>
                Beck & Call Collection
              </span>

              <h2>
                {selectedProduct.name}
              </h2>

              <p className="popup-price">
                ₦
                {Number(
                  selectedProduct.price
                ).toLocaleString()}
              </p>

              <p>
                {selectedProduct.description ||
                  "Premium luxury fashion crafted for modern elegance and everyday confidence."}
              </p>

              <button
                className="popup-btn"
                onClick={() =>
                  addToCart(
                    selectedProduct
                  )
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================
          FOOTER
      ====================== */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-column">
            <h2 className="footer-logo">
              Beckand<span>call</span>
            </h2>

            <p>
              Discover luxury fashion pieces
              crafted for elegance, confidence
              and timeless style.
            </p>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>

            <a href="#">Women</a>
            <a href="#">Luxury</a>
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>

          <div className="footer-column">
            <h4>Follow</h4>

            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Beck & Call 🛍️ — Luxury Fashion House
        </div>
      </footer>
    </div>
  );
}