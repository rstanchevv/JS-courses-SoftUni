function fancyBarcodes2(arr){
    let pattern = /@[#]{1,}(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])/g
    let numberOfProducts = arr.shift();
    for (const line of arr) {
        let productGroup = "";
        let match = pattern.exec(line);
        if (match === null){
            console.log(`Invalid barcode`);
            continue;
        }
        while (match !== null){
            for (const character of match.groups.product) {
                if (!isNaN(character)){
                    productGroup += character;
                }
            }
            match = pattern.exec(line);
        }
        if (productGroup.length === 0){
            productGroup = "00";
        }
        console.log(`Product group: ${productGroup}`)
    }
}
fancyBarcodes2(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])


