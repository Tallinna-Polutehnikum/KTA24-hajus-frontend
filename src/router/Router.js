/**
 * Router class for handling client-side routing
 */
export class Router {
    constructor() {
        this.routes = new Map();
        this.contentElement = document.getElementById('content');
    }

    /**
     * Add a route to the router
     * @param {string} path - The path for the route
     * @param {Function} component - The component/page to render
     */
    addRoute(path, component) {
        this.routes.set(path, component);
    }

    /**
     * Navigate to a specific path
     * @param {string} path - The path to navigate to
     * @param {boolean} pushState - Whether to push to browser history
     */
    navigate(path, pushState = true) {
        // Update browser history if needed
        if (pushState) {
            window.history.pushState(null, null, path);
        }

        // Find matching route
        let component = this.routes.get(path);
        
        // If no exact match, try to find a 404 page
        if (!component) {
            component = this.routes.get('/404');
        }

        // Render the component
        if (component) {
            this.render(component);
        }

        // Update active nav link
        this.updateActiveNavLink(path);
    }

    /**
     * Render a component to the content element
     * @param {Function} component - The component to render
     */
    render(component) {
        if (this.contentElement) {
            const instance = new component();
            // Using innerHTML here is safe as we're rendering trusted component content
            // Components should ensure any user input is properly escaped
            this.contentElement.innerHTML = instance.render();
            
            // Call mount lifecycle hook if it exists
            if (typeof instance.mount === 'function') {
                instance.mount();
            }
        }
    }

    /**
     * Update active navigation link styling
     * @param {string} path - The current path
     */
    updateActiveNavLink(path) {
        document.querySelectorAll('[data-link]').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}
