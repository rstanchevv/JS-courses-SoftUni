function solve() {
 
    let resultInput = document.getElementById('result');
    let inputElement = document.getElementById('input');
 
    let toMenu = document.getElementById('selectMenuTo');
    let firstOption = document.querySelector('#selectMenuTo>option'); // i have a selected first option for drop-down menu
    let binary = document.createElement('option');// just create second drop-down menu option
 
 
    firstOption.textContent='Hexadecimal'; // setting text
    firstOption.value='hexadecimal'; // setting value
 
 
    binary.textContent = 'Binary'; // setting text
    binary.value = 'binary'; // setting value
    toMenu.appendChild(binary); // append it to the drop-down menu for second option
 
    document.querySelector('button').addEventListener('click', convert)
    function convert() {
        if (toMenu.value === 'binary') {
            resultInput.value = Number(inputElement.value).toString(2);
        }
        if (toMenu.value === 'hexadecimal') {
            resultInput.value = Number(inputElement.value).toString(16).toUpperCase();
        }
    }
}