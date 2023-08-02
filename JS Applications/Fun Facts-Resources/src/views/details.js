import {
  addLike,
  deleteById,
  getById,
  getLikes,
  isLiked,
  
} from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (product, isOwner, user, onDelete, likeCounter, alreadyLiked, onLike) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-category">${product.category}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p id="description">${product.description}</p>
        <p id="more-info">${product.moreInfo}</p>
      </div>
      <h3>Likes:<span id="likes">${likeCounter}</span></h3>
      <div id="action-buttons">
      ${isOwner ? html`<a href="/details/edit/${product._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` : null}
      ${!isOwner && user && alreadyLiked == 0 ? html`<a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
      </div>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const userId = getUserData()?._id
  const product = await getById(id);
  const likeCounter = await getLikes(id);
  const isOwner = user && user._id == product._ownerId;
  const alreadyLiked = await isLiked(product._id, userId);
  ctx.render(
    detailsTemplate(
      product,
      isOwner,
      user,
      onDelete,
      likeCounter,
      alreadyLiked,
      onLike
    )
  );

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete this fact?`);
    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  async function onLike() {
    await addLike({ factId: id });
    document.getElementById("like-btn").style.display = "none";
    ctx.page.redirect(`/details/${id}`)
  }
}
