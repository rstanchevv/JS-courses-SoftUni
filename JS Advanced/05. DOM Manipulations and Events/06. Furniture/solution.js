function solve() {
  let generateTextAreaElement = document.querySelector('#exercise>textarea');
  let generateBtn = document.querySelector('#exercise button');
  let tableBodyElement = document.querySelector('.table>tbody');
  let buyTextAreaElement = document.querySelectorAll('#exercise>textarea')[1];
  let buyBtn = document.querySelectorAll('#exercise>button')[1];
  console.log(buyBtn)
  generateBtn.addEventListener('click', () => {
    let arrayOfObjects = JSON.parse(generateTextAreaElement.value);
    for (const object of arrayOfObjects) {
      let imageSource = object.img;
      let productName = object.name;
      let productPrice = object.price;
      let decorationFactor = object.decFactor;
      tableBodyElement.appendChild(createRow(imageSource,productName,productPrice,decorationFactor))
    }
  })
 
  function createRow(imageSrc, name, price, decorationFactor){
    let newRowElement = document.createElement('tr');
    let imageTDElement = document.createElement('td');
    let newImageElement = document.createElement('img');
    newImageElement.src = imageSrc;
    imageTDElement.appendChild(newImageElement);
    let nameTDElement = document.createElement('td');
    let namePElement = document.createElement('p');
    namePElement.textContent = name;
    nameTDElement.appendChild(namePElement);
    let priceTDElement = document.createElement('td');
    let pricePElement = document.createElement('p');
    pricePElement.textContent = Number(price);
    priceTDElement.appendChild(pricePElement);
    let decorationTDElement = document.createElement('td');
    let decorationPElement = document.createElement('p');
    decorationPElement.textContent = decorationFactor;
    decorationTDElement.appendChild(decorationPElement);
    let markTDElement = document.createElement('td');
    let markInputElement = document.createElement('input');
    markInputElement.type = 'checkbox';
    markTDElement.appendChild(markInputElement)
    newRowElement.appendChild(imageTDElement);
    newRowElement.appendChild(nameTDElement);
    newRowElement.appendChild(priceTDElement);
    newRowElement.appendChild(decorationTDElement);
    newRowElement.appendChild(markTDElement)
    return newRowElement;
  }
  buyBtn.addEventListener('click', () => {
    let markedElements = document.querySelectorAll('input[type="checkbox"]:checked');
    let arrOfProducts = [];
    let totalPrice = 0;
    let averageDecorationFactor = [];
    Array.from(markedElements).forEach(x => {
      let parentElement = x.parentElement.parentElement;
      let productName = parentElement.querySelector(':nth-child(2)').textContent;
      arrOfProducts.push(productName)
      totalPrice += Number(parentElement.querySelector(':nth-child(3)').textContent);
      averageDecorationFactor.push((Number(parentElement.querySelector(':nth-child(4)').textContent)));
    })
    let averageFactor = getAverage(averageDecorationFactor)
    buyTextAreaElement.value = `Bought furniture: ${arrOfProducts.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`
  })
  function getAverage(arr){
    let total = 0;
    for (const iterator of arr) {
      total += iterator;
    }
    return total / arr.length;
  }
}