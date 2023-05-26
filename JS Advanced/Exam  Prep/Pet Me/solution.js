function solve() {
    let containerElement = document.querySelector('#container');
    let name = containerElement.querySelector(':nth-child(1)');
    let age = containerElement.querySelector(':nth-child(2)');
    let kind = containerElement.querySelector(':nth-child(3)');
    let currentOwner = containerElement.querySelector(':nth-child(4)');
    let addBtn = containerElement.querySelector('button');
    let adoptionElement = document.querySelector('#adoption>ul');
    let adoptedElement = document.querySelector('#adopted>ul')
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (isNaN(age.value)){
            return;
        }
        if (name.value && age.value && kind.value && currentOwner){
        let newLiItem = createLiItem(name.value, age.value, kind.value, currentOwner.value);
        adoptionElement.appendChild(newLiItem)
        }
    })
    function createLiItem(name, age, kind, owner){
        let liItem = document.createElement('li');
        let output = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`
        let paragraph = document.createElement('p');
        paragraph.innerHTML = output;
        let spanElement = document.createElement('span');
        spanElement.textContent = `Owner: ${owner}`;
        let contactOwnerButton  = document.createElement('button');
        contactOwnerButton.textContent = 'Contact with owner';
        contactOwnerButton.addEventListener('click', () => {
            contactOwnerButton.remove();
            let divElement = document.createElement('div');
            let yesButton = document.createElement('button')
            let inputElement = document.createElement('input');
            inputElement.placeholder = 'Enter your names';
            yesButton.textContent = 'Yes! I take it!';
            divElement.appendChild(inputElement);
            divElement.appendChild(yesButton);
            liItem.appendChild(divElement)
            yesButton.addEventListener('click', (e) => {
                if (inputElement.value) {
                    spanElement.textContent = `New Owner: ${inputElement.value}`
                    divElement.remove();
                    let checkedButton = document.createElement('button');
                    checkedButton.textContent = 'Checked'
                    checkedButton.addEventListener('click', () => {
                        liItem.remove();
                    })
                    liItem.appendChild(checkedButton)
                    adoptedElement.appendChild(liItem);
                }
        })
        })
        liItem.appendChild(paragraph);
        liItem.appendChild(spanElement);
        liItem.appendChild(contactOwnerButton);
        return liItem;
    }
}

