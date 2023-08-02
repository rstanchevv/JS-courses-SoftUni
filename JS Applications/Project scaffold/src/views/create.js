import { createFruit } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Fruit Name" />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;

export function createView(ctx) {
  ctx.render(createTemplate(onSubmit));
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, imageUrl, description, nutrition } =
      Object.fromEntries(formData);
    if (name !== "" && imageUrl !== "" && description !== "" && nutrition) {
      const result = await createFruit({ name, imageUrl, description, nutrition });
      ctx.page.redirect("/");
    } else {
      return alert(`All fields must be filled out!`);
    }
  }
}
