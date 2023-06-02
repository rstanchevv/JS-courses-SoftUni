window.addEventListener("load", solve);

function solve() {
  let gemNameElement = document.getElementById("gem-name");
  let colorElement = document.getElementById("color");
  let caratsElement = document.getElementById("carats");
  let priceElement = document.getElementById("price");
  let typeElement = document.getElementById("type");
  let addBtnElement = document.getElementById("add-btn");
  let previewUlElement = document.getElementById("preview-list");
  let collectionUlElement = document.getElementById("collection");
  

  addBtnElement.addEventListener('click', onPublish);
  function onPublish(e) {
    e.preventDefault();
    if (gemNameElement.value == ''
      || colorElement.value == ''
      || caratsElement.value == ''
      || priceElement.value == ''
      || typeElement.value == '') {
      return;
    }

    let liElement = document.createElement("li");
    liElement.setAttribute('class', 'gem-info');
    

    let articleElement = document.createElement("article");

    let gemName = document.createElement("h4");
    gemName.textContent = `${gemNameElement.value}`;


    let color = document.createElement("p");
    color.textContent = `Color: ${colorElement.value}`;

    let carats = document.createElement("p");
    carats.textContent = `Carats: ${caratsElement.value}`;

    let price = document.createElement("p");
    price.textContent = `Price: ${priceElement.value} $`;

    let type = document.createElement("p");
    type.textContent = `Type: ${typeElement.value}`;



    let saveBtn = document.createElement("button");
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save to Collection';

    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Information';

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'cancel-btn');
    deleteBtn.textContent = 'Cancel';

    articleElement.appendChild(gemName);
    articleElement.appendChild(color);
    articleElement.appendChild(carats);
    articleElement.appendChild(price);
    articleElement.appendChild(type);

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewUlElement.appendChild(liElement);


    let editGemName = gemNameElement.value;
    let editColor = colorElement.value;
    let editCarats = caratsElement.value;
    let editPrice = priceElement.value;
    let editType = typeElement.value;

    gemNameElement.value = "";
    colorElement.value = "";
    caratsElement.value = "";
    priceElement.value = "";
    typeElement.value = "";

    addBtnElement.disabled = true;

    saveBtn.addEventListener("click", onSave);
    function onSave() {
      let liElement = document.createElement("li");
    
      pElement = document.createElement('p');
      pElement.setAttribute('class', 'collection-item');

      pElement.textContent = `${editGemName} - Color: ${editColor}/ Carats: ${editCarats}/ Price: ${editPrice}$/ Type: ${editType}`;

      liElement.appendChild(pElement);

      collectionUlElement.appendChild(liElement);
      let previewLi = document.querySelector('.gem-info');
      previewLi.remove();
      addBtnElement.disabled = false;
    }

    editBtn.addEventListener("click", onEdit);
    function onEdit() {
      gemNameElement.value = editGemName;
      colorElement.value = editColor;
      caratsElement.value = editCarats;
      priceElement.value = editPrice;
      typeElement.value = editType;

      liElement.remove();

      addBtnElement.disabled = false;
    }

    deleteBtn.addEventListener("click", onDelete);
    function onDelete() {
      liElement.remove();
      addBtnElement.disabled = false;
    }

  }

}
