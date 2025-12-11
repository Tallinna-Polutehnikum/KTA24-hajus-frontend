import { html } from "../utils.js";
import { API_URL } from "../main.js";

export default async function Product({ params }) {
  const { id } = params;

  const response = await fetch(`${API_URL}/products/${id}`);
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
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[product.id]) {
      cart[product.id].quantity += 1;
    } else {
      cart[product.id] = { ...product, quantity: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));

  });

  return el;
}
