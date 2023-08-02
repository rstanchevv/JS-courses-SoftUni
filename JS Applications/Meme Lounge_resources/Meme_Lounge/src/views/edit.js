import { editById, getById } from "../api/data.js";
import { createSubmitHandler, getNotified } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (meme, onSubmit) => html`<section id="edit-meme">
  <form @submit=${onSubmit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
      <label for="title">Title</label>
      <input id="title" type="text" placeholder="Enter Title" name="title" .value="${meme.title}" />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
        .value="${meme.description}"
      >
            </textarea
      >
      <label for="imageUrl">Image Url</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter Meme ImageUrl"
        name="imageUrl"
        .value="${meme.imageUrl}"
      />
      <input type="submit" class="registerbtn button" value="Edit Meme" />
    </div>
  </form>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const meme = await getById(id);
  ctx.render(updateTemplate(meme, createSubmitHandler(onSubmit)));
  async function onSubmit({ title, description, imageUrl }) {
    if ([title, description, imageUrl].some((x) => x == "")) {
      return getNotified(`All fields must be filled out!`);
    }
    await editById(id, { title, description, imageUrl });
    ctx.page.redirect(`/details/${id}`);
  }
}
