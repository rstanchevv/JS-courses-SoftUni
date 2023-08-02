import { html } from "../../node_modules/lit-html/lit-html.js";
import * as moviesService from "../services/moviesService.js";

const movieTemplate = (movie) =>
  html`<div class="card" style="width: 18rem;">
    <img src="${movie.img}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">${movie.description}</p>
      <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
    </div>
  </div>`;

const homeTemplate = (movies) => html` <h1>Movie list</h1>
  <div class="movie-list">${movies.map((movie) => movieTemplate(movie))}</div>`;

export async function homeView(ctx) {
  const searchParams = new URLSearchParams(ctx.querystring)
  const allMovies = await moviesService.getAllMovies(searchParams.get('search'));
  ctx.updateNav();
  ctx.render(homeTemplate(allMovies));
}
