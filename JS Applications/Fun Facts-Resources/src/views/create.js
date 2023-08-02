import { create } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`<section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }) {
    if ([category, imageUrl, description, moreInfo].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await create({ category, imageUrl, description, moreInfo });
    ctx.page.redirect("/catalog");
  }
}
