import { createEvent } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html } from "../lib.js";

const createTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form @submit=${onSubmit} class="create-form">
        <input type="text" name="name" id="name" placeholder="Event" />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image URL"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
        />

        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input type="text" name="date" id="date" placeholder="When?" />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export async function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ name, imageUrl, category, description, date }) {
    if ([name, imageUrl, category, description, date].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await createEvent({ name, imageUrl, category, description, date });
    ctx.page.redirect("/catalog");
  }
}
