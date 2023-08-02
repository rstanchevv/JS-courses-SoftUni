import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (products) => html`
  <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
      ${products.length == 0
        ? html`<h2>There are no items added yet.</h2>`
        : html`${products.map(productCardTemplate)}`}
  </section>
`;

const productCardTemplate = (product) => html`<li class="card">
  <img src="${product.imageUrl}" alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${product.brand}</span></p>
  <p>
    <strong>Model: </strong><span class="model">${product.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${product.value}</span>$</p>
  <a class="details-btn" href="/details/${product._id}">Details</a>
</li>`;

export async function showCatalog(ctx) {
  const products = await getAll();
  ctx.render(eventTemplate(products));
}
