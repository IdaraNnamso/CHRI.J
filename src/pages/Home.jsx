import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Buy & Sell Fashion Easily</h1>
        <p>Find amazing clothes at affordable prices</p>
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
    </div>
  );
}