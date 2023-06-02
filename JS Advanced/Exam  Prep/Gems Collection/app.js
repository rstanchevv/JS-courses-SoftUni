window.addEventListener("load", solve);

function solve() {
    let previewListSection = document.querySelector("#preview-list");
    let addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", () => {
      let name = document.querySelector("#gem-name").value;
      let color = document.querySelector("#color").value;
      let carats = document.querySelector("#carats").value;
      let price = document.querySelector("#price").value;
      let type = document.querySelector("#type").value;
      if (name && color && carats && price && type) {
        document.querySelector("#gem-name").value = "";
        document.querySelector("#color").value = "";
        document.querySelector("#carats").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#type").value = "";
        let liItem = document.createElement("li");
        liItem.classList = "gem-info";
        let articleItem = document.createElement("article");
        let h4Element = document.createElement("h4");
        h4Element.textContent = name;
        let colorElement = document.createElement("p");
        colorElement.textContent = `Color: ${color}`;
        let caratsElement = document.createElement("p");
        caratsElement.textContent = `Carats: ${carats}`;
        let priceElement = document.createElement("p");
        priceElement.textContent = `Price: ${price} $`;
        let typeElement = document.createElement("p");
        typeElement.textContent = `Type: ${type}`;
        articleItem.appendChild(h4Element);
        articleItem.appendChild(colorElement);
        articleItem.appendChild(caratsElement);
        articleItem.appendChild(priceElement);
        articleItem.appendChild(typeElement);
        liItem.appendChild(articleItem);
        let saveToCollectionBtn = document.createElement("button");
        saveToCollectionBtn.classList = "save-btn";
        saveToCollectionBtn.textContent = "Save to Collection";
        saveToCollectionBtn.addEventListener("click", () => {
          let newLiItem = document.createElement("li");
          let pElement = document.createElement("p");
          pElement.classList = "collection-item";
          pElement.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
          newLiItem.appendChild(pElement);
          document.querySelector("#collection").appendChild(newLiItem);
          addBtn.disabled = false;
          liItem.remove();
        });
        liItem.appendChild(saveToCollectionBtn);
        let editBtn = document.createElement("button");
        editBtn.classList = "edit-btn";
        editBtn.textContent = "Edit Information";
        editBtn.addEventListener("click", () => {
          addBtn.disabled = false;
          liItem.remove();
          document.querySelector("#gem-name").value = name;
          document.querySelector("#color").value = color;
          document.querySelector("#carats").value = carats;
          document.querySelector("#price").value = price;
          document.querySelector("#type").value = type;
        });
        liItem.appendChild(editBtn);
        let cancelBtn = document.createElement("button");
        cancelBtn.classList = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
          liItem.remove();
          addBtn.disabled = false;
        });
        liItem.appendChild(cancelBtn);
        addBtn.disabled = true;
        previewListSection.appendChild(liItem);
      }
    });
  }
