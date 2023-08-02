import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (songs) => html`
  <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
      ${
        songs.length == 0
          ? html`<h2>There are no albums added yet.</h2>`
          : html`${songs.map(cardTemplate)}`
      }
  </section>
`;

const cardTemplate = (song) => html`<li class="card">
  <img src="${song.imageUrl}" alt="travis" />
  <p>
    <strong>Singer/Band: </strong><span class="singer">${song.singer}</span>
  </p>
  <p><strong>Album name: </strong><span class="album">${song.album}</span></p>
  <p><strong>Sales:</strong><span class="sales">${song.sales}</span></p>
  <a class="details-btn" href="/details/${song._id}">Details</a>
</li>`;

export async function showCatalog(ctx) {
  const songs = await getAll();
  ctx.render(catalogTemplate(songs));
}
