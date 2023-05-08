function search() {
   let townsElements = document.querySelectorAll('#towns li');
   let searchFieldInput = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let pattern = new RegExp(searchFieldInput, "g");
   let arrOfMatches = [];
   for (let i = 0; i < townsElements.length; i++){
      if (townsElements[i].textContent.match(pattern)){
         townsElements[i].style.textDecoration = "underline"
         townsElements[i].style.fontWeight = "bold"

         arrOfMatches.push(townsElements[i]);
      }
   }
   resultElement.textContent = `${arrOfMatches.length} matches found`
}

