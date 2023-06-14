window.addEventListener("load", solve);

function solve() {
  let fistNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let ageElement = document.getElementById("age");
  let genderElement = document.getElementById("genderSelect");
  let dishDescriptionElement = document.getElementById("task");
  let submitBtn = document.getElementById("form-btn");
  let inProgressSection = document.getElementById("in-progress");
  let finishedSection = document.getElementById("finished");
  let clearBtn = document.getElementById("clear-btn");
  let progressCountElement = document.getElementById('progress-count')

  submitBtn.addEventListener("click", () => {
    let firstName = fistNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let gender = genderElement.value;
    let description = dishDescriptionElement.value;

    console.log(firstName)
    console.log(lastName)
    console.log(age)
    console.log(gender)
    console.log(description)

    if (firstName && lastName && age && description) {
      fistNameElement.value = "";
      lastNameElement.value = "";
      ageElement.value = "";
      genderElement.value = "";
      dishDescriptionElement.value = "";

      progressCountElement.textContent = Number(progressCountElement.textContent) + 1

      let liItem = document.createElement('li');
      liItem.classList = 'each-line';

      let articleItem = document.createElement('article');
      
      let h4Element = document.createElement('h4');
      h4Element.textContent = `${firstName} ${lastName}`;

      let genderAgePElement = document.createElement('p');
      genderAgePElement.textContent = `${gender}, ${age}`

      let descriptionPElement = document.createElement('p');
      descriptionPElement.textContent = `Dish description: ${description}`

      articleItem.appendChild(h4Element)
      articleItem.appendChild(genderAgePElement)
      articleItem.appendChild(descriptionPElement)

      let editBtn = document.createElement('button');
      editBtn.classList = 'edit-btn';
      editBtn.textContent = 'Edit'

      let completeBtn = document.createElement('button');
      completeBtn.classList = 'complete-btn';
      completeBtn.textContent = 'Mark as complete';

      liItem.appendChild(articleItem)
      liItem.appendChild(editBtn)
      liItem.appendChild(completeBtn)
      inProgressSection.appendChild(liItem)

      editBtn.addEventListener('click', editFnc);
      completeBtn.addEventListener('click', completeFnc)
      clearBtn.addEventListener('click', clearFnc)

      function editFnc(e){
        liItem.remove();
        progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
        fistNameElement.value = firstName;
        lastNameElement.value = lastName;
        ageElement.value = age;
        genderElement.value = gender;
        dishDescriptionElement.value = description
      }

      function completeFnc(e){
        e.target.parentNode.remove();
        finishedSection.appendChild(liItem);
        progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
        let buttons = finishedSection.getElementsByTagName('button');
        Array.from(buttons).forEach(x => x.remove());
      }

      function clearFnc(e){
        let children = finishedSection.children;
        Array.from(children).forEach(x => x.remove())
      }
    }
  });
}
