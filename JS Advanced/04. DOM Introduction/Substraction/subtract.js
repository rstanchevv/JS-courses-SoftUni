function subtract(){
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');
    let firstElementToNumber = Number(firstNumberElement)
    let secondElementToNumber = Number(secondNumberElement);
    
    resultElement.textContent = firstElementToNumber - secondElementToNumber;
}