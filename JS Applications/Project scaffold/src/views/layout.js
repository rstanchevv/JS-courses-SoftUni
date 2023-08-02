import { logout } from "../api/user.js";
import { clearUserData, getUserData } from "../api/util.js";
import { html, render, page } from "../lib.js";

//TODO Replace with real content

export const navTemplate = (userData, content) => html`<a id="logo" href="/"
><img id="logo-img" src="./images/logo.png" alt=""
/></a>
<nav>
<div>
  <a href="/dashboard">Fruits</a>
  <a href="/search">Search</a>
</div>
    ${userData
        ? html`<div class="user">
            <a href="/create">Add Fruit</a>
            <a href="javascript:void(0)">Logout</a>
          </div>`
        : html` <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`
    }
  </ul>
</nav>;
<main>
  ${content}
</main>`


