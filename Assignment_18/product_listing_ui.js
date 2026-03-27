import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Phone", price: 20000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Watch", price: 7000, category: "Fashion" }
];

function ProductListingUI() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Listing</h1>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "15px" }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingUI;