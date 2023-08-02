import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (products) => html`<h2>Fun Facts</h2>
  <section id="dashboard">
    ${products.length == 0
      ? html`<h2>No Fun Facts yet.</h2>`
      : html`${products.map(productCardTemplate)}`}
  </section>`

const productCardTemplate = (product) => html`<div class="fact">
  <img src="${product.imageUrl}" alt="example1" />
  <h3 class="category">${product.category}</h3>
  <p class="description">${product.description}</p>
  <a class="details-btn" href="/details/${product._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
  const products = await getAll();
  ctx.render(eventTemplate(products));
}
