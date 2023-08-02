import { html } from "../lib.js";
import { searchProduct } from "../api/data.js";
import { createSubmitHandler, getUserData } from "../api/util.js";

const searchTemplate = (product = [], onSearch, user) => html` <section id="search">
  <h2>Search by Brand</h2>

  <form @submit=${onSearch} class="search-wrapper cf">
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container">
    <ul class="card-wrapper">
      ${product.length == 0
        ? html`<h2>There are no results found.</h2>`
        : html`${product.map(x => productTemplate(x, user))}`}
      <!-- Display a li with information about every post (if any)-->
    </ul>

    <!-- Display an h2 if there are no posts -->
    <!--  -->
  </div>
</section>`;

const productTemplate = (product, user) => html`
  <li class="card">
    <img src="${product.imageUrl}" alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${product.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${product.model}</span></p>
    <p><strong>Value:</strong><span class="value">${product.value}</span>$</p>
    ${user == null
      ? null
      : html`<a class="details-btn" href="/details/${product._id}">Details</a>`}
  </li>
`;

export async function searchView(ctx) {
  const user = getUserData();
  let products;
  ctx.render(searchTemplate(products, createSubmitHandler(onSearch), user));

  async function onSearch({ search }) {
    if (search == "") {
      return alert("Enter search parameter");
    }
    products = await searchProduct(search);
    ctx.render(searchTemplate(products, createSubmitHandler(onSearch), user));
  }
}
