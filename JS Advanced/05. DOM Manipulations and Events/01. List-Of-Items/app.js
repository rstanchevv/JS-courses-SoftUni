function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText').value;
    let newElement = document.createElement('li')
    newElement.textContent = inputElement;
    ulElement.appendChild(newElement)
}