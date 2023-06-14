window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');
  let publishBtn = document.getElementById('publish')
  let tbodyElement = document.getElementById('table-body')
  let carlistElement = document.getElementById('cars-list')
  let profitElement = document.getElementById('profit');

  publishBtn.addEventListener('click', onClick);

  function onClick(e){
    e.preventDefault();
  if (!makeElement.value || !modelElement.value || !yearElement.value || !fuelElement.value || Number(originalCostElement.value) > Number(sellingPriceElement.value)){
    return 
  }
  let make = makeElement.value;
  let model = modelElement.value;
  let year = yearElement.value;
  let fuel = fuelElement.value;
  let originalCost = originalCostElement.value;
  let sellingPrice = sellingPriceElement.value;

  makeElement.value = '';
  modelElement.value = '';
  yearElement.value = '';
  fuelElement.value = '';
  originalCostElement.value = '';
  sellingPriceElement.value = ''

  let arr = [make,model,year,fuel,originalCost,sellingPrice];

  function createRow(arr){
    let tr = document.createElement('tr');
    tr.classList.add('row');
    arr.forEach(el => {
      let tdElement = document.createElement('td');
      tdElement.textContent = el;
      tr.appendChild(tdElement);
    })
    let editBtn = document.createElement('button');
    editBtn.classList = 'action-btn edit'
    editBtn.textContent = 'Edit';

    let sellBtn = document.createElement('button');
    sellBtn.classList = 'action-btn sell'
    sellBtn.textContent = 'Sell';

    tr.appendChild(editBtn);
    tr.appendChild(sellBtn);

    editBtn.addEventListener('click', editFnc);
    sellBtn.addEventListener('click', sellFnc);

    function editFnc(e){
      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;
      e.target.parentNode.remove();
    }

    function sellFnc(e){
      e.target.parentNode.remove();
      let liElement = document.createElement('li');
      liElement.classList.add('each-list');
      let firstSpan = document.createElement('span');
      firstSpan.textContent = `${make} ${model}`;
      let secondSpan = document.createElement('span');
      secondSpan.textContent = year
      let thirdSpan = document.createElement('span');
      thirdSpan.textContent = Number(sellingPrice) - Number(originalCost);
      liElement.appendChild(firstSpan)
      liElement.appendChild(secondSpan)
      liElement.appendChild(thirdSpan);
      carlistElement.appendChild(liElement)
      let targetThirdChildren = liElement.querySelector(':nth-child(3)');
      let profit = Number(targetThirdChildren.textContent)
      if (profitElement.textContent == 0.00){
      profitElement.textContent = ''
      }
      profitElement.textContent = (Number(profitElement.textContent) + Number(profit)).toFixed(2)
    }
    return tr;
  }
  tbodyElement.appendChild(createRow(arr));
}
}
