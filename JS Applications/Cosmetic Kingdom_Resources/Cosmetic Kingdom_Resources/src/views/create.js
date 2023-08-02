import { create } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Product</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Product Name" />
      <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
      />
      <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
      />
      <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
      ></textarea>

      <input type="text" name="price" id="product-price" placeholder="Price" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ name, imageUrl, category, description, price }) {
    if ([name, imageUrl, category, description, price].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await create({ name, imageUrl, category, description, price });
    ctx.page.redirect("/catalog");
  }
}
