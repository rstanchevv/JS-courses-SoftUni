import { login } from "../api/user.js";
import { createSubmitHandler } from "../api/util.js";
import { html } from "../lib.js";

const loginTemplate = (onSubmit) => html` <section id="login">
  <div class="form">
    <h2>Login</h2>
    <form @submit=${onSubmit} class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">Not registered? <a href="/create">Create an account</a></p>
    </form>
  </div>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ email, password }) {
    if (email == "" || password == "") {
      return alert(`All fields are required!`);
    }
    await login(email, password);
    ctx.page.redirect("/catalog");
  }
}
