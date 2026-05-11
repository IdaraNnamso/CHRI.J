import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Sell() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Product Uploaded:", form);

    alert("Clothes uploaded successfully 💖");

    setForm({
      name: "",
      price: "",
      image: "",
      description: "",
    });
  }

  return (
    <div>
      <Navbar />

      <div className="sell-container">
        <form className="sell-card" onSubmit={handleSubmit}>
          <h2>Sell Your Outfit 💕</h2>

          <input
            type="text"
            name="name"
            placeholder="Cloth Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price (₦)"
            value={form.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Upload 💗</button>
        </form>
      </div>
    </div>
  );
}