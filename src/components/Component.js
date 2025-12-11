/**
 * Base Component class that all components can extend
 */
export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
    }

    /**
     * Escape HTML to prevent XSS attacks
     * Use this when rendering user-provided content
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Render method - should be overridden by child components
     * @returns {string} HTML string
     */
    render() {
        return '<div>Base Component</div>';
    }

    /**
     * Lifecycle hook called after component is mounted to DOM
     */
    mount() {
        // Override in child components if needed
    }

    /**
     * Update component state (Note: does not automatically trigger re-render)
     * @param {Object} newState - The new state to merge
     * In this simple implementation, re-rendering must be done manually by updating DOM elements
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    /**
     * Helper method to create elements with event listeners
     * @param {string} selector - CSS selector
     * @param {string} event - Event type
     * @param {Function} handler - Event handler
     */
    addEventListenerToElement(selector, event, handler) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        }
    }
}
