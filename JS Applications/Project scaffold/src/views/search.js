import { searchProduct } from "../api/data.js";
import { submitHandler } from "../api/util.js";
import { html } from "../lib.js";

const searchTemplate = (product = [], onSearch) => html` <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form @submit=${onSearch} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
  </section>
  <h4>Results:</h4>
  <div class="search-result">
    ${product.length == 0
      ? html`<p class="no-result">No result.</p>`
      : html`${product.map(fruitCardTemplate)}`}
  </div>`;

const fruitCardTemplate = (product) => html`
  <div class="fruit">
    <img src="${product.imageUrl}" alt="example1" />
    <h3 class="title">${product.name}</h3>
    <p class="description">${product.description}</p>
    <a class="details-btn" href="/details/${product._id}">More Info</a>
  </div>
`;
export async function searchView(ctx) {
  let products;
  ctx.render(searchTemplate(products, submitHandler(onSearch)));

  async function onSearch({search}) {
    if (search == "") {
      return alert("Enter search parameter");
    }
    products = await searchProduct(search)
    console.log(products)
    ctx.render(searchTemplate(products, submitHandler(onSearch)));
  }
}

