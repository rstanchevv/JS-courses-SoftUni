import {
  addBuy,
  deleteById,
  getBought,
  getById,
  isBought,
} from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (product, isOwner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${product.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${product.brand}</span></p>
      <p>Model: <span id="details-model">${product.model}</span></p>
      <p>Release date: <span id="details-release">${product.release}</span></p>
      <p>Designer: <span id="details-designer">${product.designer}</span></p>
      <p>Value: <span id="details-value">${product.value}</span></p>
    </div>
    ${isOwner
      ? html` <div id="action-buttons">
          <a href="/details/edit/${product._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>`
      : null}
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const product = await getById(id);
  // const bougthCounter = await getBought(id);
  const isOwner = user && user._id == product._ownerId;
  // const alreadyBougth = await isBought(product._id, user._id);
  ctx.render(detailsTemplate(product, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${product.model}?`);
    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  // async function onBuy() {
  //   await addBuy({ productId: id });
  //   document.getElementById("buy-btn").style.display = "none";
  // }
}
