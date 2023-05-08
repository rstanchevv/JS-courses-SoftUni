function sumTable(){
    let firstTable = document.getElementsByTagName('table')[0];
    let pricesElement = document.getElementsByTagName('td');
    let sum = 0;
    for (const price of pricesElement) {
        if (!isNaN(price.textContent)){
            sum += Number(price.textContent);
        }
    }
    let sumField = document.getElementById('sum');
    sumField.textContent = sum;
}