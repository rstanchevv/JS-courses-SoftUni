function solve() {
  document.querySelector('#exercise>button').addEventListener('click', generate)
  let textAreaElement = document.querySelector('#exercise>textarea');
  let tdElements = document.querySelectorAll('.table tbody tr td');
  let trElements = document.querySelectorAll('.table tbody tr');
  let tbodyElement = document.querySelectorAll('.table tbody');


  function generate(e){
    let parseObjects = JSON.parse(textAreaElement.value);
    for (const object of parseObjects) {
      tdElements[0] = object.img;
      tdElements[1] = object.name;
      tdElements[2] = object.price;
      
    }
  }

}