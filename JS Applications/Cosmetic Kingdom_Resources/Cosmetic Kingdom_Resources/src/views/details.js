import { addBuy, deleteById, getBought, getById, isBought } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (product, user, isOwner, onDelete, bougthCounter, alreadyBougth, onBuy) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.name}</p>
    <p id="details-category">
      Category: <span id="categories">${product.category}</span>
    </p>
    <p id="details-price">
      Price: <span id="price-number">${product.price}</span>$
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">${bougthCounter}</span> times.</h4>
        <span>${product.description}</span>
      </div>
    </div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner
        ? html` <a href="/details/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
        : null}
      ${!isOwner && !alreadyBougth ? html` <a href="/details/${product._id}" @click=${onBuy} id="buy-btn">Buy</a>` : null}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const product = await getById(id);
  const bougthCounter = await getBought(id)
  const isOwner = user && user._id == product._ownerId;
  const alreadyBougth = await isBought(product._id, user._id);
  ctx.render(detailsTemplate(product, user, isOwner, onDelete, bougthCounter, alreadyBougth, onBuy));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${product.name}?`);
    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  async function onBuy(){
    await addBuy({productId: id});
    document.getElementById('buy-btn').style.display = 'none'
  }
}

