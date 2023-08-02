import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (products) => html`
  <h2>Products</h2>
  <section id="dashboard">
    ${products.length == 0
      ? html`<h2>No products yet.</h2>`
      : html`${products.map(productCardTemplate)}`}
  </section>
`;

const productCardTemplate = (product) => html` <div class="product">
  <img src="${product.imageUrl}" alt="example1" />
  <p class="title">${product.name}</p>
  <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
  <a class="details-btn" href="/details/${product._id}">Details</a>
</div>`;

export async function showCatalog(ctx) {
  const products = await getAll();
  ctx.render(eventTemplate(products));
}
