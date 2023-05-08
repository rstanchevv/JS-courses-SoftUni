function sumNumbers(){
    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');
    let sumNumberField = document.getElementById('sum');
    let firstNumber = Number(firstNumberElement.value);
    let secondNumber = Number(secondNumberElement.value);
    sumNumberField.value = firstNumber + secondNumber;
}