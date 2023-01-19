function amazingNumber(number){
    let str = number.toString();
    let sum = 0;
    for (let i =0; i < str.length; i++){
        sum += Number(str[i]);
    }
    let checkforNine = sum.toString().includes("9");
    if (checkforNine === true){
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}
amazingNumber(1233)