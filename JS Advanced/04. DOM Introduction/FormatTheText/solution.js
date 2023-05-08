function solve() {
  let textFromArea = document.getElementById("input");
  let splitTextOnSentences = textFromArea.value.split(".");
  let outputDivElement = document.getElementById("output");
  let paragraph = '';
  if (splitTextOnSentences.length <= 3){
    for (let i = 0; i < splitTextOnSentences.length; i++){
      if (splitTextOnSentences[i].length < 1){
        continue;
      }
    }
    paragraph = splitTextOnSentences.join(".");
    outputDivElement.innerHTML += `<p>${paragraph}</p>`
  } else {
    let tempArr = [];
    while (splitTextOnSentences.length > 0){
      if (splitTextOnSentences[0].length === 0){
        break;
      }
      if (tempArr.length === 3){
        paragraph = tempArr.join(".");
        outputDivElement.innerHTML += `<p>${paragraph}.</p>`
        tempArr = [];
      }
      tempArr.push(splitTextOnSentences.shift());
    }
    paragraph = tempArr.join(".");
    outputDivElement.innerHTML += `<p>${paragraph}.</p>`
  }
}