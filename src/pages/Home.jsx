import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div>

      <Navbar />

      <section className="hero">
        <h1>Luxury Fashion Redefined</h1>

        <p>
          Discover premium clothing pieces crafted
          for elegance, confidence and timeless style.
        </p>

        <button>Explore Collection</button>
      </section>

      <section className="section-title">
        <h2>Latest Collection</h2>

        <p>
          Handpicked luxury fashion pieces for modern style
        </p>
      </section>

      <section className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </section>

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-column">
            <h2 className="footer-logo">
          Backand<span>call</span>
            </h2>

            <p>
              Discover luxury fashion pieces crafted
              for elegance, confidence and timeless style.
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
          © 2026 Chris J — Luxury Fashion House
        </div>

      </footer>

    </div>
  );
}