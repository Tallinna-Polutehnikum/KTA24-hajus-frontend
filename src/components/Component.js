/**
 * Base Component class that all components can extend
 */
export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
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
     * Update component state and re-render
     * @param {Object} newState - The new state to merge
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
        // In a more complex setup, you'd trigger a re-render here
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
