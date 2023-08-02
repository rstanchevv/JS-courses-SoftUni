import { deleteFruit, getAFruit } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  fruit,
  hasUser,
  isOwner,
  onDelete,
  onDonateClick
) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
    <p id="details-title">${fruit.name}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p>${fruit.description}</p>
        <p id="nutrition">Nutrition</p>
        <p id="details-nutrition">${fruit.nutrition}</p>
      </div>
      <!--Edit and Delete are only for creator-->
      ${isOwner
        ? html` <div id="action-buttons">
            <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const pet = await getAFruit(id);
  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && ctx.user._id == pet._ownerId;

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete this pet?`);
    if (choice) {
      await deleteFruit(id)
      ctx.page.redirect("/");
    }
  }
  ctx.render(detailsTemplate(pet, hasUser, isOwner, onDelete));
}
