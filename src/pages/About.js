import { Component } from '../components/Component.js';
import { Card } from '../components/Card.js';

/**
 * About page component
 */
export class About extends Component {
    render() {
        const techCard = new Card({
            title: 'Technology Stack',
            content: `
                <div class="tech-stack">
                    <div class="tech-item">
                        <strong>Build Tool:</strong> Vite
                    </div>
                    <div class="tech-item">
                        <strong>Language:</strong> Vanilla JavaScript (ES6+)
                    </div>
                    <div class="tech-item">
                        <strong>Architecture:</strong> Component-based SPA
                    </div>
                    <div class="tech-item">
                        <strong>Routing:</strong> Custom client-side router
                    </div>
                </div>
            `
        });

        const architectureCard = new Card({
            title: 'Project Structure',
            content: `
                <pre class="code-block">
src/
├── main.js           # Application entry point
├── router/
│   └── Router.js     # Client-side routing
├── components/
│   ├── Component.js  # Base component class
│   └── Card.js       # Reusable card component
├── pages/
│   ├── Home.js       # Home page
│   ├── About.js      # About page
│   └── NotFound.js   # 404 page
└── styles/
    └── main.css      # Application styles
                </pre>
            `
        });

        return `
            <div class="page about-page">
                <section class="hero">
                    <h1>About This Project</h1>
                    <p class="subtitle">Learn more about the architecture and technologies used</p>
                </section>
                
                <section class="cards-container">
                    ${techCard.render()}
                    ${architectureCard.render()}
                </section>

                <section class="info-section">
                    <h2>Why Vanilla JS?</h2>
                    <p>
                        This project demonstrates that modern single-page applications don't always 
                        require heavy frameworks. With ES6+ features and modern build tools like Vite, 
                        vanilla JavaScript can provide a lightweight, performant solution for many use cases.
                    </p>
                    <p>
                        Key benefits include faster load times, no framework lock-in, and a deeper 
                        understanding of core web technologies.
                    </p>
                </section>
            </div>
        `;
    }
}
