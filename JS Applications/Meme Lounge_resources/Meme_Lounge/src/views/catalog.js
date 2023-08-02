import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      ${memes.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : html`${memes.map(memeCardTemplate)}`}
    </div>
  </section>
`;

const memeCardTemplate = (meme) => html`<div class="meme">
  <div class="card">
    <div class="info">
      <p class="meme-title">${meme.title}</p>
      <img class="meme-image" alt="meme-img" src="${meme.imageUrl}" />
    </div>
    <div id="data-buttons">
      <a class="button" href="/details/${meme._id}">Details</a>
    </div>
  </div>
</div>`;

export async function showCatalog(ctx) {
  const memes = await getAll();
  ctx.render(eventTemplate(memes));
}
