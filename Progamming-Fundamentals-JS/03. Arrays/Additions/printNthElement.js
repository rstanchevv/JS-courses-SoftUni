function printNthElement(arr){
    let newArr = [];
    let arrToString = arr.toString();
    let stringSplit = arrToString.split(",");
    let newArrlength = stringSplit.length;
    let lastEl = Number(stringSplit[newArrlength - 1])
    for (let index = 0; index < stringSplit.length; index++) {
        if (index === stringSplit.length -1 ){
            break;
        }
        const element = stringSplit[index];
        if  (index === 0){
            newArr.push(element)
        } else if (index % lastEl === 0){
            newArr.push(element)
        }
    }
    console.log(newArr.join(" "))
}
printNthElement(['5', '20', '31', '4', '20', '2'])