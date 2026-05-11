export default function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="card-info">
        <h3>{name}</h3>
        <p>₦{price}</p>

        <button>Buy Now</button>
      </div>
    </div>
  );
}