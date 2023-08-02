import { getAll, getMyMemes } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html } from "../lib.js";

const eventTemplate = (memes, userData) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
      <div class="user-content">
        <p>Username: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${memes.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : html`${memes.map(memeCardTemplate)}`}
    </div>
  </section>
`;

const memeCardTemplate = (meme) => html`<div class="user-meme">
  <p class="user-meme-title">${meme.title}</p>
  <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}" />
  <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export async function showProfile(ctx) {
  const userData = getUserData();
  const id = userData._id;
  const memes = await getMyMemes(id);
  ctx.render(eventTemplate(memes, userData));
}
