import { Component } from '../components/Component.js';
import { Card } from '../components/Card.js';

/**
 * Home page component
 */
export class Home extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    render() {
        const featuresCard = new Card({
            title: 'Features',
            content: `
                <ul class="feature-list">
                    <li>✨ Modern vanilla JavaScript</li>
                    <li>🚀 Fast Vite build tool</li>
                    <li>🛣️ Client-side routing</li>
                    <li>🧩 Component-based architecture</li>
                    <li>📱 Responsive design</li>
                </ul>
            `
        });

        const interactiveCard = new Card({
            title: 'Interactive Demo',
            content: `
                <p>Counter: <span id="counter">${this.state.counter}</span></p>
                <button id="increment-btn" class="btn btn-primary">Increment Counter</button>
            `
        });

        return `
            <div class="page home-page">
                <section class="hero">
                    <h1>Welcome to Vanilla JS SPA</h1>
                    <p class="subtitle">A modern single-page application built with vanilla JavaScript and Vite</p>
                </section>
                
                <section class="cards-container">
                    ${featuresCard.render()}
                    ${interactiveCard.render()}
                </section>
            </div>
        `;
    }

    mount() {
        // Add event listener for the increment button
        const incrementBtn = document.getElementById('increment-btn');
        if (incrementBtn) {
            incrementBtn.addEventListener('click', () => {
                this.state.counter++;
                const counterElement = document.getElementById('counter');
                if (counterElement) {
                    counterElement.textContent = this.state.counter;
                }
            });
        }
    }
}
