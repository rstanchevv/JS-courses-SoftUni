import { html, render, page } from "../lib.js";

export const layoutTemplate = (userData, content) => html` <header>
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
  <div>
    <a href="/events">Events</a>
  </div>
  ${userData ? html`  <div class="user">
    <a href="/create">Add Event</a>
    <a href="/logout">Logout</a>
  </div>` : html`  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`}
</nav>
</header>
<main>
  ${content}
</main>`


