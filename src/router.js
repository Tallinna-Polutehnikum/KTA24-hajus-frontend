import Home from "./components/home.js";
import About from "./components/about.js";
import NotFound from "./components/notfound.js";
import Product from "./components/product.js";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products/:id", component: Product },
  { path: "/404", component: NotFound },
];

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export function router() {
  const path = window.location.pathname;

  // Match dynamic routes
  const match = routes.find(r => path.match(pathToRegex(r.path)));

  const root = document.getElementById("app");
  root.innerHTML = "";

  if (!match) {
    // fallback
    const NotFound = routes.find(r => r.path === "/404")?.component;
    root.appendChild(NotFound ? NotFound() : document.createTextNode("404"));
    return;
  }

  const regex = pathToRegex(match.path);
  const result = path.match(regex);
  const params = getParams(match.path, result);

  // pass params to component
  root.appendChild(match.component({ params }));
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
