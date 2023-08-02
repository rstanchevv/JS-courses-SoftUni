import { create } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`<section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form @submit=${onSubmit} class="create-form">
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
      />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
      />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ singer, album, imageUrl, release, label, sales }) {
    if ([singer, album, imageUrl, release, label, sales].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await create({ singer, album, imageUrl, release, label, sales });
    ctx.page.redirect("/catalog");
  }
}
