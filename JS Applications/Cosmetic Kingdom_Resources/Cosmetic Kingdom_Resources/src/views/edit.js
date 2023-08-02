import { editById, getById } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (product, onSubmit) => html`<section id="edit">
<div class="form">
  <h2>Edit Product</h2>
  <form @submit = ${onSubmit} class="edit-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Product Name"
      .value =${product.name}
    />
    <input
      type="text"
      name="imageUrl"
      id="product-image"
      placeholder="Product Image"
      .value = ${product.imageUrl}
    />
    <input
      type="text"
      name="category"
      id="product-category"
      placeholder="Category"
      .value = ${product.category}
    />
    <textarea
      id="product-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
      .value = ${product.description}
    ></textarea>
    
    <input
      type="text"
      name="price"
      id="product-price"
      placeholder="Price"
      .value =${product.price}
    />
    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const product = await getById(id);
  ctx.render(updateTemplate(product, createSubmitHandler(onSubmit)));
  async function onSubmit({ name, imageUrl, category, description, price }) {
    if ([name, imageUrl, category, description, price].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await editById(id, { name, imageUrl, category, description, price });
    ctx.page.redirect(`/details/${id}`);
  }
}
