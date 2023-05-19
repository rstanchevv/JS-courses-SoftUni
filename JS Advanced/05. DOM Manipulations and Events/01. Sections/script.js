function create(words) {
   let divContentElement = document.querySelector('#content');
   for (const word of words) {
      let newDivElement = document.createElement('div');
      let newParagraphElement = document.createElement('p');
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = 'none';
      newDivElement.appendChild(newParagraphElement);
      divContentElement.appendChild(newDivElement)
      newDivElement.addEventListener('click', (e) => {
         newDivElement.children[0].style.display = ''
      })
   }
}