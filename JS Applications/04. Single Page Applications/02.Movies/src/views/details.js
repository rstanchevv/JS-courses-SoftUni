import { deleteMovie, getMovieById } from "../api/data.js";

const section = document.createElement('section');
section.classList = 'movie-example'

export async function showDetails(context, id){
    const movie = await getMovieById(id);
    context.showSection(section)

    const user = JSON.parse(sessionStorage.getItem('user'));
    const isOwner = user && user._id == movie._ownerId;
    section.innerHTML = createMovieHTML(movie, isOwner);

    if (isOwner){
        section.querySelector('.btn-danger').addEventListener('click', async (e) => {
            e.preventDefault()
            const choice = confirm(`Are you sure you want to delete this movie?`);
            if (choice){
                await deleteMovie(id);
                context.goTo('/')
            }
        })
        section.querySelector('.btn-warning').addEventListener('click', function onEdit(e) {
          e.preventDefault();
          context.goTo('/edit')
        })
    }
}

function createMovieHTML(movie, isOwner){
    let html = `<div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${movie.title}</h1>

      <div class="col-md-8">
        <img
          class="img-thumbnail"
          src="${movie.img}"
          alt="Movie"
        />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>${movie.description}</p>
        ${isOwner === true ? `<a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>` : '' }
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked </span>
      </div>
    </div>
  </div>`
    return html;
}