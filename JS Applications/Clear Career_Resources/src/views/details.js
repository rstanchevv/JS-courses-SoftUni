import {
  addApply,
  deleteById,
  getApplications,
  getById,
  isApplied,
} from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (product, user, isOwner, onDelete, appliesCounter, alreadyApplied, onApply) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.title}</p>
    <p id="details-category">
      Category: <span id="categories">${product.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${product.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${product.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${product.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${appliesCounter}</strong></p>
    <div id="action-buttons">
      ${isOwner
        ? html` <a href="/details/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
        : null}
      ${!isOwner && user && alreadyApplied == 0 ? html`<a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>` : null}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const userId = getUserData()?._id
  const product = await getById(id);
  const appliesCounter = await getApplications(id);
  const isOwner = user && user._id == product._ownerId;
  const alreadyApplied = await isApplied(product._id, userId);
  ctx.render(detailsTemplate(product, user, isOwner, onDelete, appliesCounter, alreadyApplied, onApply));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${product.title}?`);
    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  async function onApply() {
    await addApply({ offerId: id });
    document.getElementById("apply-btn").style.display = "none";
    ctx.page.redirect(`/details/${id}`)
  }
}
