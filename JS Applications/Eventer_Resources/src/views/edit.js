import { editAnEvent, getAnEvent } from "../api/data.js";
import { createSubmitHandler } from "../api/util.js";
import { html, nothing } from "../lib.js";

const updateTemplate = (event, onSubmit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Event</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Event"
        .value=${event.name}
      />
      <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image"
        .value=${event.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
        .value=${event.category}
      />

      <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value=${event.description}
      ></textarea>

      <label for="date-and-time">Event Time:</label>
      <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
        .value=${event.date}
      />

      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const event = await getAnEvent(id);
  ctx.render(updateTemplate(event, createSubmitHandler(onSubmit)));
  async function onSubmit({ name, imageUrl, category, description, date }) {
    if ([name, imageUrl, category, description, date].some((x) => x == "")) {
      return alert(`All fields must be filled out!`);
    }
    await editAnEvent(id, { name, imageUrl, category, description, date });
    ctx.page.redirect(`/details/${id}`);
  }
}
