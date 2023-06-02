function addItem() {
    let targetUlList = document.getElementById('items');
    let getLiName = document.getElementById('newItemText')
    let newLiItem = document.createElement('li');
    let newAItem = document.createElement('a');
    newLiItem.textContent = getLiName.value;
    targetUlList.appendChild(newLiItem)
    newAItem.textContent = '[Delete]';
    newAItem.href = '#';
    newAItem.addEventListener('click', removeElement)
    function removeElement(e){
        this.parentNode.remove()
    }
    newLiItem.appendChild(newAItem);
    getLiName.value = ''
}