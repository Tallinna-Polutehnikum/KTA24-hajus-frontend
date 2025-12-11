import { html } from '../utils.js';

export default function Home() {
    const el = html`
        <h1>Products</h1>
        <div class="product-list"></div>
    `;
    
    // Mock product data
    const products = [
        { id: crypto.randomUUID(), name: 'Product 1', description: 'Description for product 1' },
        { id: crypto.randomUUID(), name: 'Product 2', description: 'Description for product 2' },
        { id: crypto.randomUUID(), name: 'Product 3', description: 'Description for product 3' },
    ];

    const productListEl = el.querySelector('.product-list');
    console.log(el, productListEl);
    products.forEach(product => {
        const productEl = html`
        <div class="product-item">
            <h2>${product.name}</h2>
            <button class="add-btn">Add to cart</button>
        </div>
      `;
        productEl.querySelector('.add-btn').addEventListener('click', () => {
            console.log('Added to cart:', product.id);
        });
        productListEl.appendChild(productEl);
    });

    return el;
}
