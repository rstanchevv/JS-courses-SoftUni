import { getAllFruits } from "../api/data.js";
import { html } from "../lib.js";

const fruitCardTemplate = (fruit) => html`
  <div class="fruit">
    <img src="${fruit.imageUrl}" alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div>
`;

const fruitsTemplate = (fruits) =>
  html`<section id="dashboard">
    ${fruits.length > 0
      ? html`<h2>Fruits</h2>
          ${fruits.map(fruitCardTemplate)} `
      : html`<h2>No fruit info yet.</h2>`}
  </section>`;

export async function showCatalog(ctx) {
  const fruits = await getAllFruits();
  ctx.render(fruitsTemplate(fruits));
}
