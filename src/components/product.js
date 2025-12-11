import { html } from "../utils.js";

export default function Product({ params }) {
  const { id } = params;
  
  // fetch product data (mocked here)
  const product = {
    id,
    name: `Product ${id}`,
    description: `This is the description for product ${id}.`,
  };

  const el = html`
    <div class="product">
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <button class="add-btn">Add to cart</button>
    </div>
  `;

  // component logic
  el.querySelector(".add-btn").addEventListener("click", () => {
    console.log("Added to cart:", product.id);
  });

  return el;
}