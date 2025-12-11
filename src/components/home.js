import { API_URL } from '../main.js';
import { html } from '../utils.js';
import { getAverageRating, getTotalRatings } from '../ratings.js';

export default function Home() {
  const el = html`<h1>Products</h1><div class="product-list"></div>`;
  
  fetch(API_URL+"/products")
    .then(res => res.json())
    .then(products => {
      const list = el.querySelector(".product-list");
      products.forEach(product => {
        const productEl = html`
          <div class="product-item">
          <h2><a href="/products/${product.id}" data-link>${product.name}</a></h2>
          <p>Price: ${product.price} €</p>
          <p class="rating-info">Loading ratings...</p>
          </div>
        `;
        list.appendChild(productEl);

        // Fetch and display ratings
        const ratingEl = productEl.querySelector('.rating-info');
        Promise.all([getAverageRating(product.id), getTotalRatings(product.id)])
          .then(([avgRating, total]) => {
            if (avgRating !== null) {
              ratingEl.textContent = `${avgRating.toFixed(1)}/10 (Total reviews: ${total})`;
            } else {
              ratingEl.textContent = 'No ratings yet';
            }
          })
          .catch(() => {
            ratingEl.textContent = 'Failed to load ratings';
          });
      });
    });

  return el;
}

