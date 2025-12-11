import { html } from "../utils.js";
import { API_URL } from "../main.js";
import { getReviews } from "../ratings.js";

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
      
      <hr>
      <h2>Reviews</h2>
      <div class="reviews-section">Loading reviews...</div>
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

  // Load and display reviews
  const reviewsSection = el.querySelector(".reviews-section");
  getReviews(id)
    .then(reviews => {
      if (reviews.length === 0) {
        reviewsSection.innerHTML = '<p>No reviews yet.</p>';
        return;
      }
      
      reviewsSection.innerHTML = '';
      reviews.forEach(review => {
        const reviewEl = html`
          <div class="review-item" style="border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <p><strong>${review.name}</strong> (${review.email})</p>
            <p>Rating: <strong>${review.rating}/10</strong></p>
            <p>${review.comment}</p>
          </div>
        `;
        reviewsSection.appendChild(reviewEl);
      });
    })
    .catch(() => {
      reviewsSection.innerHTML = '<p>Failed to load reviews.</p>';
    });

  return el;
}
