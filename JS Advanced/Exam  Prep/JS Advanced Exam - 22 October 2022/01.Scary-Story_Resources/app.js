window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name')
  let ageElement = document.getElementById('age')
  let genreELement = document.getElementById('genre')
  let storyTitleElement = document.getElementById('story-title')
  let storyElement = document.getElementById('story')
  let publishBtn = document.getElementById('form-btn');
  let previewSection = document.getElementById('preview-list')
  let mainDivElement = document.getElementById('main')


  publishBtn.addEventListener('click', () => {
    if(!firstNameElement.value || !lastNameElement.value || !ageElement.value || !genreELement.value || !storyTitleElement.value || !storyElement.value){
      return;
    }
    publishBtn.disabled = true;

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let genre = genreELement.value;
    let storyTitle = storyTitleElement.value;
    let story = storyElement.value;
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genreELement.value = '';
    storyTitleElement.value = '';
    storyElement.value = '';

    let liItem = document.createElement('li');
    liItem.classList = 'story-info';
    
    let articleItem = document.createElement('article');
    
    let h4Element = document.createElement('h4');
    h4Element.textContent = `Name: ${firstName} ${lastName}`;
    
    let agePElement = document.createElement('p');
    agePElement.textContent = `Age: ${age}`;

    let titlePElement = document.createElement('p');
    titlePElement.textContent = `Title: ${storyTitle}`;

    let genrePElement = document.createElement('p');
    genrePElement.textContent = `Genre: ${genre}`;

    let storyPElement = document.createElement('p');
    storyPElement.textContent = story;

    articleItem.appendChild(h4Element)
    articleItem.appendChild(agePElement)
    articleItem.appendChild(titlePElement)
    articleItem.appendChild(genrePElement)
    articleItem.appendChild(storyPElement);
    liItem.appendChild(articleItem);

    let saveBtn = document.createElement('button');
    saveBtn.classList = 'save-btn';
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.classList = 'edit-btn';
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'Delete Story'
    
  liItem.appendChild(saveBtn);
  liItem.appendChild(editBtn);
  liItem.appendChild(deleteBtn);
  previewSection.appendChild(liItem)

  editBtn.addEventListener('click', edit)
  saveBtn.addEventListener('click', save)
  deleteBtn.addEventListener('click', deleteFnc)

  function edit(e){
    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    ageElement.value = age;
    genreELement.value = genre;
    storyTitleElement.value = storyTitle;
    storyElement.value = story;
    publishBtn.disabled = false;
    e.target.parentNode.remove()
  }
  })
  function save(e){
    Array.from(mainDivElement.children).forEach(x => x.remove());
    let h1Element = document.createElement('h1');
    h1Element.textContent = `Your scary story is saved!`
    mainDivElement.appendChild(h1Element)
  }
  function deleteFnc(e){
    publishBtn.disabled = false;
    e.target.parentNode.remove()
  }
}
