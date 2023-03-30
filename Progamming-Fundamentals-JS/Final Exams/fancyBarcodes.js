function fancyBarcodes(arr){
    let numberOfBarcodes = arr.shift();
    let regex = /@[#]{1,}([A-Z][a-zA-Z0-9]{4,}[A-Z])@[#]{1,}/g
    let numbersRegex = /\d/g;
    for (const barcode of arr) {
        let productGroup = '00'
        let match = regex.exec(barcode);
        if (match === null){
            console.log(`Invalid barcode`);
            continue;
        }
        while (match != null){
            let numbers = barcode.match(numbersRegex);
            if (numbers !== null){
                numbers = numbers.join("");
                productGroup = numbers;
            }
            match = regex.exec(barcode);
        }
        console.log(`Product group: ${productGroup}`)
    }
}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
