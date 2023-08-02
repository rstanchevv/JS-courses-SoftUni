import { createMovie, getMovies } from "../api/data.js";
import { showCreate } from "./create.js";

const section = document.getElementById("home-page");
const welcomeMsg = document.getElementById('welcome-msg')
const moviesDOM = document.querySelector("#movies-list");
const addMovieBtn = document.querySelector('#add-movie-button')
section.addEventListener("click", onDetailsSelect);
document.querySelector('.btn-warning').addEventListener('click', onAdd)

let ctx = null;

export async function showHome(context) {
  ctx = context;
  context.showSection(section);
  const user = sessionStorage.getItem('user');
  const movies = await getMovies();
  moviesDOM.replaceChildren(...movies.map(displayMovie));
  if (user){
    welcomeMsg.textContent = `Welcome, ${JSON.parse(sessionStorage.getItem('user')).email}`
    addMovieBtn.style.display = 'block'
  }
}

function displayMovie(movie) {
  const element = document.createElement("div");
  element.className = "card mb-4";
  element.innerHTML = `<li> 
  <div class="card mb-4">
    <img class="card-img-top" src="${movie.img}"
         alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>
</div>
</li>`
;
  return element;
}

function onDetailsSelect(e) {
  if (e.target.tagName == "BUTTON") {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      ctx.goTo("/details", id);
    }
  }
}

function onAdd(e){
  e.preventDefault();
  ctx.goTo("/create")
}