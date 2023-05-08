function extractText(){
    let listItems = document.getElementById('items');
    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = listItems.textContent;
}