function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let rowsSelector = document.querySelectorAll(".container tbody tr");
    let inputFieldElement = document.getElementById("searchField").value;
    let pattern = new RegExp(inputFieldElement, "g");
    inputFieldElement = '';
    for (let i =0; i < rowsSelector.length; i++){
     rowsSelector[i].classList.remove("select");
    }
    for (let i = 0; i < rowsSelector.length; i++) {
      let elementsOnRow = rowsSelector[i].textContent;
      if (elementsOnRow.match(pattern)) {
        rowsSelector[i].classList.add("select");
      }
    }
  }
}
