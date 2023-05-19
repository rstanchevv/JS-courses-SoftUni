function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let optionElement = document.createElement('option');
    optionElement.value = inputValueElement.value;
    optionElement.text = inputTextElement.value;
    document.getElementById('menu').appendChild(optionElement)
    inputTextElement.value = '';
    inputValueElement.value = '';
}