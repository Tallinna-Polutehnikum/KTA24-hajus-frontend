import { navigateTo, router } from "./router.js";

export const API_URL = "http://192.168.114.50/api";

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

router(); // initial load
