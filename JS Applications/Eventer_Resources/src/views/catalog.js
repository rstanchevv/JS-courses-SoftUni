import { getAllEvents } from "../api/data.js";
import { html } from "../lib.js";

const eventTemplate = (events) => html`
  <h2>Current Events</h2>
  <section id="dashboard">
    ${events.length == 0
      ? html`<h2>No Events yet.</h2>`
      : events.map(eventCardTemplate)}
  </section>
`;

const eventCardTemplate = (event) => html`<div class="event">
  <img src=${event.imageUrl} alt="example1" />
  <p class="title">${event.name}</p>
  <p class="date">${event.date}</p>
  <a class="details-btn" href="/details/${event._id}">Details</a>
</div>`;

export async function showCatalog(ctx) {
  const events = await getAllEvents();
  ctx.render(eventTemplate(events));
}
