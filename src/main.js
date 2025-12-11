import { Router } from './router/Router.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { NotFound } from './pages/NotFound.js';

// Initialize the router
const router = new Router();

// Register routes
router.addRoute('/', Home);
router.addRoute('/about', About);
router.addRoute('/404', NotFound);

// Set up navigation
document.addEventListener('DOMContentLoaded', () => {
    // Handle link clicks
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const url = new URL(e.target.href);
            router.navigate(url.pathname);
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        router.navigate(window.location.pathname, false);
    });

    // Initial page load
    router.navigate(window.location.pathname, false);
});
