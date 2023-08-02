import { create } from "../api/data.js";
import { createSubmitHandler, getNotified } from "../api/util.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`<section id="create-meme">
  <form @submit=${onSubmit} id="create-form">
    <div class="container">
      <h1>Create Meme</h1>
      <label for="title">Title</label>
      <input id="title" type="text" placeholder="Enter Title" name="title" />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
      ></textarea>
      <label for="imageUrl">Meme Image</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter meme ImageUrl"
        name="imageUrl"
      />
      <input type="submit" class="registerbtn button" value="Create Meme" />
    </div>
  </form>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ title, description, imageUrl }) {
    if ([title, description, imageUrl].some((x) => x == "")) {
      return getNotified(`All fields must be filled out!`);
    }
    await create({ title, description, imageUrl });
    ctx.page.redirect("/catalog");
  }
}
