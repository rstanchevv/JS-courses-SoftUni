function solve() {
  let addBtn = document.querySelector('#add');
  let addSectionElement = document.querySelector('section>:nth-child(2)>form');
  console.log(addSectionElement)
  let sectionElements = document.querySelectorAll('section');
  let openSection = sectionElements[1].querySelector(':nth-child(2)');
  let progressSection = sectionElements[2].querySelector(':nth-child(2)');
  let completeSection = sectionElements[3].querySelector(':nth-child(2)');
  addBtn.addEventListener('click', onClick)
  function onClick(e){
    e.preventDefault();
    let taskName = addSectionElement.querySelector('#task').value
    let description = addSectionElement.querySelector('#description').value;
    let dueDate = addSectionElement.querySelector('#date').value;
    let numberPattern = /\W/
    if (dueDate.match(numberPattern) === null || dueDate.match(numberPattern) === undefined){
      alert('you should use numbers only')
      return;
    }
    if (taskName && description && dueDate){
      createNewArticle("Open", "Start", "Delete", taskName, description, dueDate);
    }
  }
  function createNewArticle(type, button1, button2, task, description, dueDate){
    let newArticleElement = document.createElement('article');
    let articleTaskName = document.createElement('h3');
    articleTaskName.textContent = task;
    let articleDescription = document.createElement('p');
    articleDescription.textContent = `Description: ${description}`;
    let articleDueDate = document.createElement('p');
    articleDueDate.textContent = `Due Date: ${dueDate}`;
    newArticleElement.appendChild(articleTaskName);
    newArticleElement.appendChild(articleDescription);
    newArticleElement.appendChild(articleDueDate)
    if (type === "Open"){
      let newDivElement = document.createElement('div');
      newDivElement.classList = 'flex'
      let firstButton = document.createElement('button');
      firstButton.textContent = button1;
      firstButton.classList = "green";
      firstButton.addEventListener('click', () => {
        let toProgress = createNewArticle("Progress", "Delete", "Finish", task, description, dueDate);
        progressSection.appendChild(toProgress)
        newArticleElement.remove();
      })
      let secondButton = document.createElement('button');
      secondButton.textContent = button2;
      secondButton.classList = "red";
      secondButton.addEventListener('click', () => {
        newArticleElement.remove();
      });
      newDivElement.appendChild(firstButton);
      newDivElement.appendChild(secondButton);
      newArticleElement.appendChild(newDivElement)
      openSection.appendChild(newArticleElement)
    } else if (type === "Progress"){
      let newDivElement = document.createElement('div');
      newDivElement.classList = 'flex'
      let firstButton = document.createElement('button');
      firstButton.textContent = button1;
      firstButton.classList = "red";
      firstButton.addEventListener('click', () => {
        newArticleElement.remove();
      })
      let secondButton = document.createElement('button');
      secondButton.textContent = button2;
      secondButton.classList = "orange";
      secondButton.addEventListener('click', function () {
        newDivElement.remove();
        completeSection.appendChild(newArticleElement);
        return;
      });
      newDivElement.appendChild(firstButton);
      newDivElement.appendChild(secondButton);
      newArticleElement.appendChild(newDivElement)
      openSection.appendChild(newArticleElement)
    }
    return newArticleElement;
}
}
  
