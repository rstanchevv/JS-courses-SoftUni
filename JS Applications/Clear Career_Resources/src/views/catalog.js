import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (products) => html` <section id="dashboard">
  <h2>Job Offers</h2>
  ${products.length == 0
    ? html`<h2>No offers yet.</h2>`
    : html`${products.map(productCardTemplate)}`}
</section>`;

const productCardTemplate = (product) => html`<div class="offer">
  <img src="${product.imageUrl}" alt="example1" />
  <p><strong>Title: </strong><span class="title">${product.title}</span></p>
  <p><strong>Salary:</strong><span class="salary">${product.salary}</span></p>
  <a class="details-btn" href="/details/${product._id}">Details</a>
</div>`;

export async function showCatalog(ctx) {
  const products = await getAll();
  ctx.render(eventTemplate(products));
}
