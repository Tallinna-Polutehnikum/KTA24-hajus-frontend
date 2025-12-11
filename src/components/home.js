import { html } from '../utils.js';

export default function Home() {
  const el = html`<h1>Products</h1><div class="product-list"></div>`;
  
  fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(products => {
      const list = el.querySelector(".product-list");
      products.forEach(product => {
        const productEl = html`
          <div class="product-item">
          <h2><a href="/products/${product.id}" data-link>${product.name}</a></h2>
          <p>Price: ${product.price} €</p>
          </div>
        `;
        list.appendChild(productEl);
      });
    });

  return el;
}

