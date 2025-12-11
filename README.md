# KTA24-hajus-frontend

A modern single-page application (SPA) built with vanilla JavaScript and Vite. Features client-side routing, component-based architecture, and a clean, responsive design.

## Features

- ✨ **Vanilla JavaScript**: No frameworks, just modern ES6+ JavaScript
- 🚀 **Vite Build Tool**: Lightning-fast development and optimized production builds
- 🛣️ **Client-Side Routing**: Custom router with history API support
- 🧩 **Component System**: Reusable component architecture with lifecycle hooks
- 📱 **Responsive Design**: Mobile-first, works on all devices
- 🎨 **Dark Mode**: Automatic dark mode support based on system preferences

## Project Structure

```
├── index.html          # Entry HTML file
├── src/
│   ├── main.js         # Application entry point
│   ├── router/
│   │   └── Router.js   # Client-side routing implementation
│   ├── components/
│   │   ├── Component.js # Base component class
│   │   └── Card.js     # Reusable card component
│   ├── pages/
│   │   ├── Home.js     # Home page component
│   │   ├── About.js    # About page component
│   │   └── NotFound.js # 404 error page
│   └── styles/
│       └── main.css    # Application styles
├── package.json
└── vite.config.js      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KTA24-hajus-frontend
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`.

### Building for Production

Build the application for production:
```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Architecture

### Router

The custom router (`src/router/Router.js`) provides:
- Path-based routing
- Browser history management
- 404 fallback handling
- Active link highlighting

### Components

All components extend the base `Component` class which provides:
- Props and state management
- Lifecycle hooks (`render`, `mount`)
- Event handler helpers

Example component:
```javascript
import { Component } from './components/Component.js';

export class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return `<div>Count: ${this.state.count}</div>`;
    }

    mount() {
        // Add event listeners after component is mounted
    }
}
```

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Register the route in `src/main.js`:
```javascript
import { MyNewPage } from './pages/MyNewPage.js';
router.addRoute('/my-new-page', MyNewPage);
```

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

ISC