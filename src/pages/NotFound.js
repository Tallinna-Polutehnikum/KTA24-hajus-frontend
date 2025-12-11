import { Component } from '../components/Component.js';

/**
 * 404 Not Found page component
 */
export class NotFound extends Component {
    render() {
        return `
            <div class="page not-found-page">
                <div class="error-container">
                    <h1 class="error-code">404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
                    <a href="/" data-link class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `;
    }
}
