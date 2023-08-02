async function init() {
    window.addEventListener("load", () => {
        tbody.replaceChildren();
      });
  const tbody = document.querySelector("table>tbody");
  const inputName = document.querySelector('input[name="title"]');
  const inputAuthor = document.querySelector('input[name="author"]');
  document
    .querySelector("form > :nth-child(6)")
    .addEventListener("click", createBook);
  document.getElementById("loadBooks").addEventListener("click", loadBooks);
  const form = document.querySelector("form");

  
  async function loadBooks() {
    tbody.replaceChildren();
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/books/"
    );
    const data = await response.json();
    let entries = Object.entries(data);
    bookDOMCreation(entries);
  }

  async function createBook(e) {
    e.preventDefault();
    const info = new FormData(form)
    const {author, title} = Object.fromEntries(info)
    console.log(title, author)
    let postData = {
      title,
      author
    };
    inputName.value = "";
    inputAuthor.value = "";
    const response = await fetch(
      `http://localhost:3030/jsonstore/collections/books/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    const data = await response.json();
    loadBooks();
  }

  async function bookDOMCreation(arr) {
    for (const book of arr) {
      let trElement = document.createElement("tr");
      trElement.setAttribute("data-id", book[0]);
      let title = document.createElement("td");
      title.textContent = book[1].title;

      let author = document.createElement("td");
      author.textContent = book[1].author;

      let buttons = document.createElement("td");

      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", editFnc);

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteFnc);

      trElement.appendChild(title);
      trElement.appendChild(author);
      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      trElement.appendChild(buttons);
      tbody.appendChild(trElement);
    }
  }

  async function editFnc(e) {
    let authorDOM =
      e.target.parentElement.parentElement.querySelector(":nth-child(1)");
    let nameDOM =
      e.target.parentElement.parentElement.querySelector(":nth-child(2)");
    let formTitle = document.querySelector("form > :nth-child(1)");
    document.querySelector("form > :nth-child(6)").remove();
    let saveBtn = document.createElement("button");
    let id = e.target.parentElement.parentElement.dataset;
    let element = e.target.parentElement.parentElement;
    saveBtn.textContent = "Save";
    form.appendChild(saveBtn);
    saveBtn.addEventListener("click", async function onSave(e) {
      e.preventDefault();
      element.remove();
      const info = new FormData(form)
      let {title, author} = Object.fromEntries(info)
      let putData = {
        title,
        author
      };
      const response = await fetch(
        `http://localhost:3030/jsonstore/collections/books/${id.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(putData),
        }
      );
      const data = await response.json();
      revertSubmit();
    });
    formTitle.textContent = "Edit FORM";
    inputName.value = authorDOM.textContent;
    inputAuthor.value = nameDOM.textContent;
  }

  async function deleteFnc(e) {
    let id = e.target.parentElement.parentElement.dataset;
    e.target.parentElement.parentElement.remove();
    const response = await fetch(
      `http://localhost:3030/jsonstore/collections/books/${id.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
  }

  function revertSubmit() {
    document.querySelector("form > :nth-child(6)").remove();
    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", createBook);
    form.appendChild(submitBtn);
  }
}

init()
