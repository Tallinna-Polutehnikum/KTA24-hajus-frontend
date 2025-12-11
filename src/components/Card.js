import { Component } from './Component.js';

/**
 * Reusable Card component
 */
export class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, content, footer } = this.props;
        
        return `
            <div class="card">
                ${title ? `<div class="card-header"><h3>${title}</h3></div>` : ''}
                <div class="card-body">
                    ${content || ''}
                </div>
                ${footer ? `<div class="card-footer">${footer}</div>` : ''}
            </div>
        `;
    }
}
