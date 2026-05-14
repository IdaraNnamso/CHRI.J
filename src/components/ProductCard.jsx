export default function ProductCard({ image, name, price }) {
  return (
    <div className="card">

      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <div className="card-info">
        <span className="brand-tag">Chris J Collection</span>

        <h3>{name}</h3>

        <p className="price">₦{price}</p>

        <div className="card-actions">
          <button>Add To Cart</button>
          <button className="outline-btn">View</button>
        </div>
      </div>

    </div>
  );
}