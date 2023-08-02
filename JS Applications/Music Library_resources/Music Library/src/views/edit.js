import { editById, getById } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (album, onSubmit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
        .value=${album.singer}
      />
      <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
        .value=${album.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
        .value=${album.release}
      />
      <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const album = await getById(id);
  ctx.render(updateTemplate(album, createSubmitHandler(onSubmit)));
  async function onSubmit({ singer, album, imageUrl, release, label, sales }) {
    if ([singer, album, imageUrl, release, label, sales].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await editById(id, { singer, album, imageUrl, release, label, sales });
    ctx.page.redirect(`/details/${id}`);
  }
}
