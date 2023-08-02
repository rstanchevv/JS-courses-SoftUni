import { editById, getById } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (product, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${product.brand} />
      <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${product.model} />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        .value=${product.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"7
        .value=${product.release}
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        .value=${product.designer}
      />
      <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${product.value} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const product = await getById(id);
  ctx.render(updateTemplate(product, createSubmitHandler(onSubmit)));
  async function onSubmit({ brand, model, release, imageUrl, designer, value }) {
    if ([brand, model, release, imageUrl, designer, value].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await editById(id, { brand, model, release, imageUrl, designer, value });
    ctx.page.redirect(`/details/${id}`);
  }
}
