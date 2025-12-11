import Home from "./components/home.js";
import About from "./components/about.js";
import NotFound from "./components/notfound.js";
import Product from "./components/product.js";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Home }, 
  { path: "/products/:id", component: Product },
  { path: "/404", component: NotFound },
];

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export async function router() {
  const path = window.location.pathname;

  // Match dynamic routes
  const match = routes.find(r => path.match(pathToRegex(r.path)));

  const root = document.getElementById("app");
  root.innerHTML = "";

  // helper: accept a value or a Promise resolving to a Node/string/array and append to root
  async function resolveAndAppend(result) {
    const resolved = await Promise.resolve(result);

    if (resolved instanceof Node) {
      root.appendChild(resolved);
      return;
    }

    if (Array.isArray(resolved)) {
      resolved.forEach(item => {
        if (item instanceof Node) root.appendChild(item);
        else root.appendChild(document.createTextNode(String(item)));
      });
      return;
    }

    // fallback: treat as string or primitive
    root.appendChild(document.createTextNode(resolved == null ? "" : String(resolved)));
  }

  if (!match) {
    // fallback to /404 (component may be sync or async)
    const NotFound = routes.find(r => r.path === "/404")?.component;
    const result = NotFound ? NotFound() : "404";
    await resolveAndAppend(result);
    return;
  }

  const regex = pathToRegex(match.path);
  const result = path.match(regex);
  const params = getParams(match.path, result);

  // pass params to component (component may return a Node or a Promise<Node>)
  await resolveAndAppend(match.component({ params }));
}

window.addEventListener("popstate", router);

function pathToRegex(path) {
  return new RegExp("^" + path.replace(/:\w+/g, "([^/]+)") + "$");
}

function getParams(path, match) {
  const values = match.slice(1);
  const keys = [...path.matchAll(/:(\w+)/g)].map(m => m[1]);

  return Object.fromEntries(keys.map((k, i) => [k, values[i]]));
}
