import { html } from "../utils.js";

export default async function Product({ params }) {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/products/${id}`);
  const product = await response.json();

  const el = html`
    <div class="product">
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p>Price: ${product.price} €</p>
      <img src="${product.img_url}" alt="${product.name}" width="200" />
      <button class="add-btn">Add to cart</button>
    </div>
  `;

  el.querySelector(".add-btn").addEventListener("click", () => {
    console.log("Added to cart:", product.id);
  });

  return el;
}
