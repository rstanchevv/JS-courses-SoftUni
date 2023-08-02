import { editById, getById } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (product, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="category" id="category" placeholder="Category" . value=${product.category} />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${product.imageUrl}
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        .value=${product.description}
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
        .value=${product.moreInfo}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const product = await getById(id);
  ctx.render(updateTemplate(product, createSubmitHandler(onSubmit)));
  async function onSubmit({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }) {
    if ([category, imageUrl, description, moreInfo].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await editById(id, { category, imageUrl, description, moreInfo });
    ctx.page.redirect(`/details/${id}`);
  }
}
