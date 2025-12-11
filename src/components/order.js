import { API_URL } from "../main.js";
import { html } from "../utils.js";

export default function OrderPage() {

  const state = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    response: null
  };

  async function submitOrder(e) {
    e.preventDefault();

    const order = {
      client: {
        first_name: state.first_name,
        last_name: state.last_name,
        phone: state.phone,
        email: state.email
      },
      products: []
    };
    
    order.products = Object.values(JSON.parse(localStorage.getItem("cart") || "{}"))
      .map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }));

    const res = await fetch(API_URL+"/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
    });

    state.response = await res.json();

    // uuenda ekraani
    render();
  }

  function render() {
    root.innerHTML = ""; // puhasta enne joonistamist
    const el = html`
      <div>
        <h1>Place an Order</h1>

        <form id="order-form">
          <input placeholder="First name" value="${state.first_name}" id="fn"/>
          <input placeholder="Last name" value="${state.last_name}" id="ln"/>
          <input placeholder="Phone" value="${state.phone}" id="ph"/>
          <input placeholder="Email" value="${state.email}" id="em"/>

          <button type="submit">Submit order</button>
        </form>

        ${state.response
          ? html`<p>Order created with ID: ${state.response.order_id}</p>`
          : ""
        }
      </div>
    `;

    // event listeners vaja lisada PÄRAST DOMi loomist
    el.querySelector("#fn").addEventListener("input", (e) => state.first_name = e.target.value);
    el.querySelector("#ln").addEventListener("input", (e) => state.last_name = e.target.value);
    el.querySelector("#ph").addEventListener("input", (e) => state.phone = e.target.value);
    el.querySelector("#em").addEventListener("input", (e) => state.email = e.target.value);

    el.querySelector("#order-form").addEventListener("submit", submitOrder);

    root.appendChild(el);
  }

  const root = document.createElement("div");
  render();
  return root;
}
