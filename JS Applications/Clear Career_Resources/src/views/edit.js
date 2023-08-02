import { editById, getById } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (product, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value=${product.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value=${product.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value=${product.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value=${product.description}
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value=${product.requirements}
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value=${product.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const product = await getById(id);
  ctx.render(updateTemplate(product, createSubmitHandler(onSubmit)));
  async function onSubmit({
    title,
    imageUrl,
    category,
    description,
    requirements,
    salary,
  }) {
    if (
      [title, imageUrl, category, description, requirements, salary].some(
        (x) => x == ""
      )
    ) {
      return alert(`All fields must be filled out!`);
    }
    await editById(id, { title, imageUrl, category, description, requirements, salary });
    ctx.page.redirect(`/details/${id}`);
  }
}
