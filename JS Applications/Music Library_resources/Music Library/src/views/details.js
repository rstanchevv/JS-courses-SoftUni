import {
  addLike,
  deleteById,
  getById,
  getLikes,
  isLiked,
} from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  album,
  user,
  isOwner,
  onDelete,
  onLike,
  hasLike,
  likeCount
) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${album.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>
        <strong>Band:</strong><span id="details-singer">${album.singer}</span>
      </p>
      <p>
        <strong>Album name:</strong
        ><span id="details-album">${album.album}</span>
      </p>
      <p>
        <strong>Release date:</strong
        ><span id="details-release">${album.release}</span>
      </p>
      <p>
        <strong>Label:</strong><span id="details-label">${album.label}</span>
      </p>
      <p>
        <strong>Sales:</strong><span id="details-sales">${album.sales}</span>
      </p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likeCount}</span></div>
    <div id="action-buttons">
      ${isOwner
        ? html`<a href="/details/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn"
              >Delete</a
            >`
        : null}
      ${!hasLike && !isOwner && user
        ? html`<a href="javascript:void(0)" @click=${onLike} id="like-btn"
            >Like</a
          >`
        : null}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const album = await getById(id);
  const user = getUserData();
  const userId = getUserData()?._id
  const isOwner = user && user._id == album._ownerId;
  const likeCount = await getLikes(id)
  const hasLike = await isLiked(album._id, userId)
  ctx.render(detailsTemplate(album, user, isOwner, onDelete, onLike, hasLike,likeCount));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${album.album}?`);
    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  async function onLike() {
    await addLike({ albumId: id });
    document.getElementById("like-btn").style.display = "none";
    ctx.page.redirect(`/details/${id}`)
  }
}
