import { useCart } from "../context/CartContext";

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  onView,
}) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <div className="card-info">
        <span className="brand-tag">
          Beck & Call Collection
        </span>

        <h3>{name}</h3>

        <p className="price">
          ₦{Number(price).toLocaleString()}
        </p>

        <div className="card-actions">
          <button
            style={{ backgroundColor: "black" }}
            onClick={() =>
              addToCart({
                id,
                image,
                name,
                description,
                price,
              })
            }
          >
            Add To Cart
          </button>

          <button
            className="outline-btn"
            onClick={onView}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}