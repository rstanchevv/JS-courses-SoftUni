import { addGoing, deleteEvent, getAnEvent, getGoing, isGoingTo } from "../api/data.js";
import { getUserData } from "../api/util.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  event,
  going,
  isOwner,
  onDelete,
  onGoing,
  isClicked
) => html`<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${event.imageUrl}" alt="example1" />
  <p id="details-title">${event.name}</p>
  <p id="details-category">
    Category: <span id="categories">${event.category}</span>
  </p>
  <p id="details-date">Date:<span id="date">${event.date}</span></p>
  <div id="info-wrapper">
    <div id="details-description">
      <span>${event.description}</span>
    </div>
  </div>
 
  <h3>Going: <span id="go">${going}</span> times.</h3>
  <div id="action-buttons">
  ${!isClicked && !isOwner ? html`<a href="/details/${event._id}" @click=${onGoing} id="go-btn">Going</a>` : null}
  ${
    isOwner
      ? html` <a href="/details/edit/${event._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn"
            >Delete</a
          >`
      : null
  }        
  <div>
</div>
</section>`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const user = getUserData();
  const event = await getAnEvent(id);
  const going = await getGoing(id);
  const isOwner = user && user._id == event._ownerId;
  const isClicked = await isGoingTo(event._id, user._id)
  ctx.render(detailsTemplate(event, going, isOwner, onDelete, onGoing, isClicked));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${event.name}?`);
    if (choice) {
      await deleteEvent(id);
      ctx.page.redirect("/");
    }
  }

  async function onGoing() {
    await addGoing({eventId:id});
    document.getElementById('go-btn').style.display = 'none';
  }
}
